class lv2 extends Phaser.Scene {

    constructor() {
        super({ key: 'lv2' });
        
        // Put global variable here
        this.bucket=10
        this.health=3
        this.heart1;
        this.heart2;
        this.heart3;
    }

    init(data) {
        this.bucket = data.bucket;
       
      }

    preload() {
        this.load.tilemapTiledJSON("lv2","assets/lv2.tmj")

        this.load.image("desert1IMG", "assets/desert1.png")
        this.load.image("desert2IMG", "assets/desert2.png");
        this.load.image("desert3IMG", "assets/desert3.png");
        this.load.image("desert4IMG", "assets/desert4.png");

        this.load.image("bucket", "assets/bucket.png");
        this.load.image('heart', 'assets/heart.png');

        this.load.audio('touch','assets/touchenemy.mp3');
        this.load.audio('collect','assets/collectbucket.mp3');
        this.load.audio('enter','assets/enter.mp3');

    }

    create() {

        this.collectSound = this.sound.add('collect').setVolume(0.5)
        this.touchSound = this.sound.add('touch').setVolume(2)
        this.enterSound = this.sound.add('enter').setVolume(1)

        this.time.addEvent({
            delay: 100,
            callback: updateInventory,
            callbackScope: this,
            loop: false,
        })

        console.log('lv2');
        console.log("this.bucket",this.bucket)
        console.log("this.health",this.health)
        
        var map = this.make.tilemap({key: 'lv2'});
        

        let desert1Tiles = map.addTilesetImage("desert1", "desert1IMG");    
        let desert2Tiles = map.addTilesetImage("desert2", "desert2IMG");  
        let desert3Tiles = map.addTilesetImage("desert3", "desert3IMG");
        let desert4Tiles = map.addTilesetImage("desert4", "desert4IMG");

        let tilesArray = [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles]

        this.ground = map.createLayer("ground", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0,0);
        this.ground2 = map.createLayer("ground2", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0,0);
        this.deco = map.createLayer("deco", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0,0);
        this.tent = map.createLayer("tent", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0,0);
        this.oasis2 = map.createLayer("oasis2", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0,0);
        this.oasis = map.createLayer("oasis", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0,0);
        
        this.bucket1 = this.physics.add.sprite(880,210,'bucket').setScale(1);
        this.bucket2 = this.physics.add.sprite(1253,198,'bucket').setScale(1);
       
        let start = map.findObject("ObjectLayer", obj => obj.name === "start");
        let skeleton1 = map.findObject("ObjectLayer", obj => obj.name === "skeleton1");
        let skeleton2 = map.findObject("ObjectLayer", obj => obj.name === "skeleton2");
        let skeleton3 = map.findObject("ObjectLayer", obj => obj.name === "skeleton3");
        let skeleton4 = map.findObject("ObjectLayer", obj => obj.name === "skeleton4");
       

        this.player=this.physics.add.sprite(start.x,start.y,"nick").setScale(1).play("nick-right")
        this.enemy1=this.physics.add.sprite(skeleton1.x,skeleton1.y,"skeleton1").setScale(1).play("skeleton1-right")
        this.enemy2=this.physics.add.sprite(skeleton2.x,skeleton2.y,"skeleton2").setScale(1).play("skeleton2-right")
        this.enemy3=this.physics.add.sprite(skeleton3.x,skeleton3.y,"skeleton3").setScale(1).play("skeleton3-left")
        this.enemy4=this.physics.add.sprite(skeleton4.x,skeleton4.y,"skeleton4").setScale(1).play("skeleton4-left")
       

        this.tweens.add({
            targets: this.enemy1,
            y: 400,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.enemy2,
            x: 300,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.enemy3,
            x: 1050,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.enemy4,
            x: 500,
            flipX: true,
            yoyo: true,
            duration: 3000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.bucket1,
            y: '-=4', 
            duration: 500, 
            yoyo: true, 
            repeat: -1 
        });

        this.tweens.add({
            targets: this.bucket2,
            y: '-=4', 
            duration: 500, 
            yoyo: true, 
            repeat: -1 
        });
        

        this.cursors = this.input.keyboard.createCursorKeys(); 

        this.ground2.setCollisionByExclusion(-1, true) 
        this.physics.add.collider(this.player, this.ground2);

        this.cameras.main.startFollow(this.player);
        this.physics.world.bounds.width = this.ground.width;this.physics.world.bounds.height = this.ground.height;this.player.setCollideWorldBounds(true);

        window.player = this.player

        this.player.body.setSize(this.player.width * 0.5,this.player.height * 0.5)
        this.enemy1.body.setSize(this.enemy1.width * 0.5, this.enemy1.height * 0.5)
        this.enemy2.body.setSize(this.enemy2.width * 0.5, this.enemy2.height * 0.5)
        this.enemy3.body.setSize(this.enemy3.width * 0.5, this.enemy3.height * 0.5)
        this.enemy4.body.setSize(this.enemy4.width * 0.5, this.enemy4.height * 0.5)
        this.bucket1.body.setSize(this.bucket1.width * 0.5, this.bucket1.height * 0.5)
        this.bucket2.body.setSize(this.bucket2.width * 0.5, this.bucket2.height * 0.5)

        this.physics.add.overlap(
            this.player,
            [this.bucket1,this.bucket2],
            this.collectBucket,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            [this.enemy1,this.enemy2,this.enemy3,this.enemy4],
            hitEnemy,
            null,
            this
        );


        console.log("showInventory");

        this.scene.launch("showInventory");
    }

    update() {
        if(this.player.x>1100 && this.player.x < 1400 &&
            this.player.y< 585 && this.player.y>520) {
            this.enterSound.play();
             console.log("lv3")
             this.lv3()
            }
       
        if (this.cursors.left.isDown){
            this.player.setVelocityX(-200);
            this.player.anims.play("nick-left", true);
        } 
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(200);
            this.player.anims.play("nick-right", true);
        }
        else if (this.cursors.up.isDown){
            this.player.setVelocityY(-200);
            this.player.anims.play("nick-up", true);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(200);
            this.player.anims.play("nick-down", true);
        } else{
            this.player.setVelocity(0);
            this.player.anims.stop()
        }
       
    } // end of update // 

    collectBucket(player, bucket1) {

        this.collectSound.play();

        console.log("collectBucket");
        bucket1.disableBody(true, true);
        window.bucket++;
        updateInventory.call(this)
    }

    takeDamage (player,enemy1){
        console.log("takeDamage")

        window.heart--

        enemy1.disableBody(true,true);
    }
     
    lv3(player,tile){
        console.log("lv3 function");
        this.scene.start("lv3",{ 
            bucket: this.bucket,
            health: this.health})
    }  

}



