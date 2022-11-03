const verificar = () => {
    let data = new Date();
    let ano = data.getFullYear();
    let txtAno = document.getElementById("txtano");
    let res = document.querySelector("#res")
    
    if (txtAno.value.length === 0 || txtAno.value > ano) {
        window.alert ("[ERRO BIXO BURRO] NÃO DA PRA NASCER NO FUTURO, TENTA DE NOVO")
    } else {
        let sexo = document.getElementsByName("sexo")
        let idade = ano - Number(txtAno.value);
        let genero = ""
        let img = document.createElement("img");
        img.setAttribute("id", "foto")

     if (sexo[0].cheked){
        genero = "Homem";

        if (idade >= 0 && idade < 1){
            //bebe
      img.setAttribute("src", "./assets/img/homem-bebe.jpg")
        } else if (idade > 1 && idade < 10){
            //criança
            img.setAttribute("src", "./assets/img/homem-crianca.jpg");
        } else if (idade < 21){
            //jovem 
            img.setAttribute("src", "./assets/img/homem-jovem.jpg")
        } else if (idade < 50){
            //adulto
            img.setAttribute("src", "./assets/img/homem-adulto.jpg")
        } else {
            //idoso
            img.setAttribute("src", "./assets/img/homem-idoso.jpg")
        }

    } else if (sexo[1].cheked){
        genero = "Mulher"
        
        if (idade > 1 && idade < 10){
            //criança
            img.setAttribute("src", "./assets/img/mulher-crianca.jpg")
        } else if (idade < 21){
            //jovem 
            img.setAttribute("src", "./assets/img/mulher-jovem.jpg")
        } else if (idade < 50){
            //adulto
            img.setAttribute("src", "./assets/img/mulher-adulta.jpg")
        } else {
            //idoso
            img.setAttribute("src", "./assets/img/mulher-idosa.jpg")
        }
    
    }
    res.style.textAlign = "center";
    res.innerHTML = `<strong>Detectamos:</strong> ${genero} com ${idade} anos`
}
    
}