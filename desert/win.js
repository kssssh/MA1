class win extends Phaser.Scene {
    constructor() {
      super({ key: 'win' });
    }
  
    preload() {
      
      this.load.image("intro06", "assets/intro-06.png")
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro06');
        
      
     
        window.bucket = 0
        window.heart = 3
     
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('intro');
            this.scene.start('intro');
        }, this);
          }
        }
    