class story extends Phaser.Scene {
    constructor() {
      super({ key: 'story' });
    }
  
    preload() {
      
      this.load.image("intro02", "assets/intro-02.png")
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro02');
      
        var spaceDown = this.input.keyboard.addKey('SPACE');
    
        spaceDown.on('down', function () {
            console.log('task');
            this.scene.start('task');
        }, this);
          }
        }
    