function carregar(){
    let mensagem = document.getElementById("container-msg");
    let imagem = document.getElementById("img")

    let data = new Date();
    //  let hora = data.getHours();
      let minutos = data.getMinutes();
     let main = document.getElementById("main");
     let hora = 19;

    mensagem.innerHTML = `Agora são ${hora} : ${minutos}`;

    if (hora > 0 && hora <= 12){
        imagem.src = "./assets/img/manha.jpg";
        document.body.style.background = "lightblue";
        main.style.background = "white"
        mensagem.style.color = "lightblue"
       
    } else if (hora > 12 && hora <= 18){
        imagem.src = "./assets/img/tarde.jpg";
        document.body.style.background = "orange";
        main.style.background = "white"
        mensagem.style.color = "orange"
    } else if (hora > 18){
        imagem.src = "./assets/img/noite.jpg";
        document.body.style.background = "black";
        main.style.background = "white"
        mensagem.style.color = "black"
    }
}