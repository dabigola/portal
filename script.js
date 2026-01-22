document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".icone");
    const formulario = document.getElementById("formulario");
    const inputTipo = document.getElementById("tipo");
    const tituloTipo = document.getElementById("tipoTitulo");
    const formElement = document.querySelector("form");
    const msgSucesso = document.getElementById("sucesso");

    // Lógica para selecionar o tipo de denúncia
    if (cards) {
        cards.forEach(card => {
            card.addEventListener("click", () => {
                // Remove seleção de todos e adiciona ao clicado
                cards.forEach(c => c.classList.remove("selecionado"));
                card.classList.add("selecionado");

                // Pega o texto do data-tipo
                const tipo = card.getAttribute("data-tipo");
                inputTipo.value = tipo;
                tituloTipo.innerText = `DENÚNCIA: ${tipo}`;

                // Mostra o formulário com efeito
                formulario.style.display = "block";
                formulario.scrollIntoView({ behavior: "smooth" });
            });
        });
    }

    // Lógica de envio do formulário
    if (formElement) {
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            msgSucesso.style.display = "block";
            formElement.reset(); // Limpa os campos

            setTimeout(() => {
                msgSucesso.style.display = "none";
            }, 5000);
        });
    }
});