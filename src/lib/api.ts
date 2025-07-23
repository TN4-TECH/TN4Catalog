export async function loginAutomatico({
  login,
  senha,
}: {
  login: string;
  senha: string;
}) {
  const url = `/api/`;
  const headers = {
    "Content-Type": "application/json",
    "login": login,
    "senha": senha,
    "charset": "UTF-8"
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    // Não envie body se a API não espera!
    // body: JSON.stringify({ login, senha }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Erro:", errorText);
    throw new Error("Falha no login automático");
  }

  return await response.json();
}

export async function buscarProdutos(session: string, filtros: Record<string, string> = {}) {
  const params = new URLSearchParams(filtros).toString();
  const url = `/api/produto/${params ? "?" + params : ""}`;
  const headers = {
    "Content-Type": "application/json",
    "charset": "UTF-8",
    "session": session
  };

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Erro ao buscar produtos:", errorText);
    throw new Error("Falha ao buscar produtos");
  }

  return await response.json();
}