class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Put global variable here
  }

  // incoming data from scene below
  init(data) {
    this.bucket = data.bucket;
    this.health = data.health;
    this.enemyCollisions = 3
  }

  preload() {

    // this is the exported JSON map file
    this.load.tilemapTiledJSON("world", "assets/cityMap.json");

    // Add any text to the game
    this.add.text(10, 10, "Add any text here", {
      font: "30px Courier",
      fill: "#00FFFF",
    });

    window.player = this.player

   
  } /////////////////// end of create //////////////////////////////

  create() {
    this.physics.add.overlap(this.player, [this.enemy1, this.enemy2, this.enemy3], this.enemyCaught, null, this);


    var spaceDown = this.input.keyboard.addKey('SPACE');
    var key1 = this.input.keyboard.addKey(49);
    var key2 = this.input.keyboard.addKey(50);
    var key3 = this.input.keyboard.addKey(51);
    var key4 = this.input.keyboard.addKey(52);
    var keyT = this.input.keyboard.addKey(84);

  }

  enemyCaught(player, enemy) {
    console.log("*** local function enemyCaught: attack by enemy");
    this.hitSnd.play();
    window.heart--;
    enemy.disableBody(true, true);
    this.enemyCollisions++;
  }

  update() {
    // Check for the condition continuously in the game loop
    if (this.enemyCollisions >= 3) {
      this.scene.start("gameOver");
    }
  }
}




