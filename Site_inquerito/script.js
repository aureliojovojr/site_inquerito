
/* =================================
   FUNÇÃO: FAZER O BOTÃO RONALDO FUGIR
================================= */

function fujao() {

    const btnNao = document.getElementById("nao");

    // Dimensões da janela
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Limites para o movimento do botão
    const maxX = larguraJanela - btnNao.offsetWidth;
    const maxY = alturaJanela - btnNao.offsetHeight;

    // Gerar posições aleatórias
    const aleatorioX = Math.floor(Math.random() * maxX);
    const aleatorioY = Math.floor(Math.random() * maxY);

    // Aplicar novas posições
    btnNao.style.position = "fixed";
    btnNao.style.left = aleatorioX + "px";
    btnNao.style.top = aleatorioY + "px";
}


/* =================================
   ELEMENTOS DA PÁGINA
================================= */

const sim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");


/* =================================
   EVENTO: CLIQUE NO BOTÃO MESSI
================================= */

sim.addEventListener("click", function () {

    // Mostrar mensagem de confirmação
    mensagem.style.display = "block";

    // Deslocar a página até à mensagem
    mensagem.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Redireccionar após 2 segundos
    setTimeout(function () {

        window.location.href =
            "https://youtu.be/fKk3kf_CMYE?si=qOWLrlyCLDR73Ty3";

    }, 2000);

});
