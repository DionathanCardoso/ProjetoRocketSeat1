function tooggleMode(){
    //Pegando o elemento html pela árvore DOM.
    const html = document.documentElement;
    html.classList.toggle("light")

    //Pegar a tag img.
    const img = document.querySelector("#profile img")
    //Substituir a imagem.
    if(html.classList.contains("light")){
        //Se tiver light mode, adicionar a img light.
        img.setAttribute("src", "assets/assets/avatar-light.png");
        img.setAttribute("alt", "Foto de Maykbrito com barba e óculos escuro" );
    }else{
        //Set tiver sem light mode manter a imagem.
        img.setAttribute("src", "assets/assets/avatar.png")
        img.setAttribute("alt", "Foto de Maykbrito com barba e óculos normal" );
    }
}