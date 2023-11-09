const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".Personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".Personagem.selecionado");

        personagemSelecionado.classList.remove("selecionado")

        personagens[indice].classList.add("selecionado");
    });
});


