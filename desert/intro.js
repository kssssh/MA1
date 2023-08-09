class intro extends Phaser.Scene {
    constructor() {
      super({ key: 'intro' });
    }
  
    preload() {
      
      this.load.image("intro01", "assets/intro-01.png")
      this.load.audio("bgm", "assets/bgm.mp3")

    }
  
    create() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro01');

      this.music = this.sound.add("bgm", {loop: true}).setVolume(0.5);
      this.music.play();

        var spaceDown = this.input.keyboard.addKey('SPACE');
   
        spaceDown.on('down', function () {
            console.log('story');
            this.scene.start('story');
        }, this);
          }
        }
    
         
  