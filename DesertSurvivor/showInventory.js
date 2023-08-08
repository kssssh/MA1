class showInventory extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'showInventory',
        active: false });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }

    preload(){
        //Load heart image
        this.load.image('heart', 'assets/heart.png');

        this.load.image('bucket', 'assets/bucket.png');
        this.load.audio('touch','assets/touchenemy.mp3');
    }

   create () {

//         //Place hearts at the top screen
        console.log("***showInventory");
        this.scene.bringToTop("showInventory");
        
//        // Setup heart but visible to false

       this.heart1 = this.add.image (30,20,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.heart2 = this.add.image (70,20,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);
        this.heart3 = this.add.image (110,20,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);

        this.bucket1 = this.add.image (30,60,'bucket').setScrollFactor(0).setVisible(true).setScale(1);
        this.bucket2 = this.add.image (70,60,'bucket').setScrollFactor(0).setVisible(true).setScale(1);
        this.bucket3 = this.add.image (110,60,'bucket').setScrollFactor(0).setVisible(true).setScale(1);
        this.bucket4 = this.add.image (150,60,'bucket').setScrollFactor(0).setVisible(true).setScale(1);
        this.bucket5 = this.add.image (190,60,'bucket').setScrollFactor(0).setVisible(true).setScale(1);

       // Recv an event, call the method
       this.events.on('inventory', this.updateScreen, this)

    } //end of create


    updateScreen(data){
        console.log('Received event inventory', data);

        switch ( data.heart ) {
            case 3:
                this.heart1.setVisible(true)
                this.heart2.setVisible(true)
                this.heart3.setVisible(true)
                break;

            case 2:
                this.heart1.setVisible(true)
                this.heart2.setVisible(true)
                this.heart3.setVisible(false)
                break;

            case 1:
                this.heart1.setVisible(true)
                this.heart2.setVisible(false)
                this.heart3.setVisible(false)
                break;

            case 0:
                this.heart1.setVisible(false)
                this.heart2.setVisible(false)
                this.heart3.setVisible(false)
                break;    

            default:
            break;
        }

        
        switch ( data.bucket ) {
            case 5:
                this.bucket1.setVisible(true)
                this.bucket2.setVisible(true)
                this.bucket3.setVisible(true)
                this.bucket4.setVisible(true)
                this.bucket5.setVisible(true)
                break;

            case 4:
                this.bucket1.setVisible(true)
                this.bucket2.setVisible(true)
                this.bucket3.setVisible(true)
                this.bucket4.setVisible(true)
                this.bucket5.setVisible(false)
                break;

            case 3:
                this.bucket1.setVisible(true)
                this.bucket2.setVisible(true)
                this.bucket3.setVisible(true)
                this.bucket4.setVisible(false)
                this.bucket5.setVisible(false)
                break;

            case 2:
                this.bucket1.setVisible(true)
                this.bucket2.setVisible(true)
                this.bucket3.setVisible(false)
                this.bucket4.setVisible(false)
                this.bucket5.setVisible(false)
                break;

            case 1:
                this.bucket1.setVisible(true)
                this.bucket2.setVisible(false)
                this.bucket3.setVisible(false)
                this.bucket4.setVisible(false)
                this.bucket5.setVisible(false)
                break;

            case 0:
                this.bucket1.setVisible(false)
                this.bucket2.setVisible(false)
                this.bucket3.setVisible(false)
                this.bucket4.setVisible(false)
                this.bucket5.setVisible(false)
                break;    

            default:
            break;
        }
    }

} // end of class