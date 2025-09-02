(async () => {
  const el = document.getElementById("status");
  try {
    const res = await fetch("/api/hello");
    if (!res.ok) throw new Error("Resposta não ok");
    const data = await res.json();
    el.textContent = data.message;
  } catch (e) {
    el.textContent = "Erro ao chamar a API. Veja o console para mais detalhes.";
    console.error(e);
  }
})();
