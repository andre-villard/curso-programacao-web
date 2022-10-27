let principal = document.getElementById("principal")
principal.innerHTML = `
    <table>
    <tr><td>${pessoa.nome}</td></tr>
    <tr><td>${pessoa.idade}</td></tr>
    <tr><td>${pessoa.CPF}</td></tr>`

let ola = "Olá Mundo"
// let lampada = document.getElementById("lampada")

const pessoa = {
    nome: "André",
    idade: "17",
    CPF: "223344559-90",
};

// principal.innerHTML = `
// <h1> ${ola} </h1>
// <h2>Esta é uma saudação</h2>
// <p>Aqui vai um texto</p>

// `;

function acenderLampada(){
   lampada.src = "./src/assets/img/lampada-acesa.jpg" 
}
function apagarLampada(){
    lampada.src = "./src/assets/img/lampada-apagada.jpg"
}
