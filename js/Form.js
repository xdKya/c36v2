class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setPosition(){
    this.titleImg.position(120,50);
    this.input.position(width/2,height/2 -100);
    this.playButton.position(width/2,height/2);
    this.greeting.position(width/2,height/2);
  }

  setStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  display(){
    this.setPosition();
    this.setStyle();
  }
}

 