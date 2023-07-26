class intro extends Phaser.Scene {
    constructor() {
      super({ key: 'intro' });
    }
  
    preload() {
      
      this.load.image("intro01", "assets/intro-01.png")

      
    }
  
    create() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro01');

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('story');
            this.scene.start('story');
        }, this);
        
    
    
          }
        }
    
         
  