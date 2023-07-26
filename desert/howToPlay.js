class howToPlay extends Phaser.Scene {
    constructor() {
      super({ key: 'howToPlay' });
    }
  
    preload() {
      
      this.load.image("intro04", "assets/intro-04.png")
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro04');
        
      
     

        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('lv1');
            this.scene.start('lv1');
        }, this);
          }
        }
    