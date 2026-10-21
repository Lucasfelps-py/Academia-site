
const botaoTema = document.getElementById("tema");

function aplicarTema(tema) {
    document.body.classList.toggle("claro", tema === "claro");
    botaoTema.textContent = tema === "claro" ? "modo escuro" : "modo claro";
}

const temaSalvo = localStorage.getItem("temaPowerMagic") || "escuro";
aplicarTema(temaSalvo);

botaoTema.addEventListener("click", () => {
    const novoTema = document.body.classList.contains("claro")
        ? "escuro"
        : "claro";

    aplicarTema(novoTema);
    localStorage.setItem("temaPowerMagic", novoTema);
});
