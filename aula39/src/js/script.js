 let menu = document.querySelector("#menu");
let inserir = document.querySelector("#inserir");

let btn = document.querySelector("#botao");

btn.style.backgroundColor = "red"
btn.style.color = "white"
// let botao = document.querySelector("#botao");

let listas = [];

// let adicionar = () => {
//     listas.forEach(element => {
//         menu.innerHTML += `<li>${element}</li>`
//     });
// }

let adicionar = () => {
    
    if (inserir.value == ""){
        alert("Erro, preencha o campo");

    } else {
        listas.push(inserir.value);
        percorrer();
    }
    
};

let percorrer = () => {
    for (let i = 0; i < listas.length; i++) {
        let lista = document.createElement("li");
        lista.innerHTML = listas[i];
        menu.appendChild(lista);
    }
};




