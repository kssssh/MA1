class gameOver extends Phaser.Scene {
    constructor() {
      super({ key: 'gameOver' });
    }
  
    preload() {
      // Preload any assets for Scene2 here if needed
      this.load.image("intro05", "assets/intro-05.png")
      this.load.audio('lose','assets/lose.mp3');
      this.load.audio("bgm", "assets/bgm.mp3");
    }
  
    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'intro05');
        
        this.loseSound = this.sound.add('lose').setVolume(2)
        this.loseSound.play()

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
    