import { session, expiration_time } from "./sessionStore";
import { loginAutomatico } from "./api";
import { get } from "svelte/store";

const LOGIN = "api";
const SENHA = "4ce081";

let renewTimeout: ReturnType<typeof setTimeout> | null = null;
let renewPromise: Promise<void> | null = null;

function isSessaoValida(): boolean {
  const sessao = get(session);
  const expira = get(expiration_time);
  if (!sessao || !expira) return false;
  // Considera expirada se faltar menos de 1 minuto
  return new Date(expira).getTime() - Date.now() > 60 * 1000;
}

async function renovarSessao() {
  try {
    const resp = await loginAutomatico({ login: LOGIN, senha: SENHA });
    session.set(resp.session);
    expiration_time.set(resp.expiration_time);
    console.log("Sessão renovada", resp);
    agendarRenovacao(resp.expiration_time);
  } catch (e) {
    session.set(null);
    expiration_time.set(null);
    console.error("Erro ao renovar sessão", e);
  }
}

function agendarRenovacao(expira: string) {
  if (renewTimeout) clearTimeout(renewTimeout);
  const tempoRestante = new Date(expira).getTime() - Date.now() - 60 * 1000; // 1 min antes de expirar
  if (tempoRestante > 0) {
    renewTimeout = setTimeout(() => {
      renovarSessao();
    }, tempoRestante);
  }
}

export async function garantirSessaoValida() {
  if (isSessaoValida()) {
    agendarRenovacao(get(expiration_time)!);
    return;
  }
  // Se já está renovando, aguarde a mesma promessa
  if (renewPromise) {
    await renewPromise;
    return;
  }
  renewPromise = renovarSessao().finally(() => {
    renewPromise = null;
  });
  await renewPromise;

  if (isSessaoValida()) {
    agendarRenovacao(get(expiration_time)!);
  }
}
