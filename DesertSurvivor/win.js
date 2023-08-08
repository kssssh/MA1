class win extends Phaser.Scene {
    constructor() {
      super({ key: 'win' });
    }
  
    preload() {
      
      this.load.image("intro06", "assets/intro-06.png")
      this.load.audio('winmusic','assets/win.mp3');
      this.load.audio("bgm", "assets/bgm.mp3");
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro06');
        
        this.winmusicSound = this.sound.add('winmusic').setVolume(2)
        this.winmusicSound.play()

        this.events.on('create', this.handleSceneCreation, this);
      }
      
      handleSceneCreation() {
          this.sound.stopByKey('bgm');
      
     
        function resetGame() {
          window.heart = 3;
          window.bucket = 0;
      }

      var spaceDown = this.input.keyboard.addKey('SPACE');
      spaceDown.on('down', function () {
          console.log('lv1');
          resetGame();
          this.scene.start('lv1');
      }, this);
          }
        }
    