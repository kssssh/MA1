class task extends Phaser.Scene {
    constructor() {
      super({ key: 'task' });
    }
  
    preload() {
      
      this.load.image("intro03", "assets/intro-03.png")
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro03');
        
      
     

        var spaceDown = this.input.keyboard.addKey('SPACE');

              
        spaceDown.on('down', function () {
            console.log('howToPlay');
            this.scene.start('howToPlay');
        }, this);
          }
        }
    