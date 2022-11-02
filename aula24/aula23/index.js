//const numeros = [10, 90, 80, 5];

//const found = numeros.find(element => element < 10);

//console.log(found);

//  []          {}
// array     objetos

const carros = [
  {
    modelo: "500",
    cor: "branco",
    velocidade: "200km/h"
  },

  {
    modelo: "911 turbo",
    cor: "preto",
    velocidade: "300km/h"
  },
  {
     modelo: "F450",
    cor: "vermelho",
    velocidade: "400km/h"
  },
]

//carros.forEach((elemento) => {
//  console.log("elemento:" + elemento.cor);
//  console.log("modelo:" + elemento.modelo);
//  console.log("velocidade" + elemento.velocidade)
//  console.log("--------------------")
//});

const json = JSON.stringify(carros)
console.log(json)

