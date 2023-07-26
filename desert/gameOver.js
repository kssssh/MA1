class gameOver extends Phaser.Scene {
    constructor() {
      super({ key: 'gameOver' });
    }
  
    preload() {
      // Preload any assets for Scene2 here if needed
      this.load.image("intro05", "assets/intro-05.png")
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro05');
        
       window.heart = 3
       window.bucket = 0
     
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('intro');
            this.scene.start('intro');
        }, this);
          }
        }
    