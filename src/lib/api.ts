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