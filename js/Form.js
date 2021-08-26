class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset Game');
    this.resetQuestion = createButton("Reset Game");
    this.nresetQuestion = createButton("Continue the game");
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(displayWidth-500, 20)
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(() => {
      if(player.mousePressed(this.reset)) {
        this.reset.hide();
        this.resetQuestion.position(displayWidth-750, 20);
        this.nresetQuestion.position(displayWidth-900, 20);

      }
      // player.updateCount(0);
      // game.update(0);
    });
  }
}
