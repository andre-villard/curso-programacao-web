window.addEventListener("DOMContentLoaded", () => {
    let parcela = document.querySelector("#parcela");
    let vencimeto = document.querySelector("#vencimento");
    let valor = document.querySelector("#valor");


    let dados = document.querySelector("#dados");

    let botao = document.querySelector(".btn")

    const adicionarDados = () => {
        if (parcela.value.lenght !== 0 && vencimento.value.lenght !== 0 && valor.value.lenght !== 0) {
        } else {
            alert ("ERRO! DIGITE VALORES NA CAIXA")
        }
    }

    botao.addEventListener("click", () => {
        adicionarDados();
    })
})