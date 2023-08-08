class howToPlay extends Phaser.Scene {
    constructor() {
      super({ key: 'howToPlay' });
    }
  
    preload() {
      
      this.load.image("intro04", "assets/intro-04.png")
      this.load.audio("bgm", "assets/bgm.mp3");
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro04');
        
      //   this.events.on('create', this.handleSceneCreation, this);
      // }
      
      // handleSceneCreation() {
       
      //     this.sound.stopByKey('bgm');
     
        var spaceDown = this.input.keyboard.addKey('SPACE');

             
        spaceDown.on('down', function () {
            console.log('lv1');
            this.scene.start('lv1');
        }, this);
          }
        }
    