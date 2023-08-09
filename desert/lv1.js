class lv1 extends Phaser.Scene {
    constructor() {
        super({ key: 'lv1' });

        // Put global variable here

        this.heart1;
        this.heart2;
        this.heart3;
        this.bucket = 0;
    }

    init(data) {
        this.bucket = data.bucket;
        this.health = data.health;

    }

    preload() {

        // Preload all the assets here

        this.load.tilemapTiledJSON("lv1", "assets/lv1.tmj")

        // Preload any images here

        this.load.spritesheet('nick', 'assets/nick.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton1', 'assets/skeleton1.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton2', 'assets/skeleton2.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton3', 'assets/skeleton3.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('skeleton4', 'assets/skeleton4.png', { frameWidth: 64, frameHeight: 64 });

        this.load.image("desert1IMG", "assets/desert1.png")
        this.load.image("desert2IMG", "assets/desert2.png");
        this.load.image("desert3IMG", "assets/desert3.png");
        this.load.image("desert4IMG", "assets/desert4.png");
        this.load.image("bucket", "assets/bucket.png");
        this.load.image('heart', 'assets/heart.png');

        this.load.audio('touch','assets/touchenemy.mp3');
        this.load.audio('collect','assets/collectbucket.mp3');
        this.load.audio('enter','assets/enter.mp3');
        this.load.audio("bgm", "assets/bgm.mp3")
    }

    create() {

           this.events.on('create', this.handleSceneCreation, this);
      }
      
      handleSceneCreation() {
       
          this.sound.stopByKey('bgm');

        this.collectSound = this.sound.add('collect').setVolume(0.5)
        this.touchSound = this.sound.add('touch').setVolume(2)
        this.enterSound = this.sound.add('enter').setVolume(1)
        this.music = this.sound.add("bgm", {loop: true}).setVolume(0.3);
        this.music.play();

        this.time.addEvent({
            delay: 100,
            callback: updateInventory,
            callbackScope: this,
            loop: false,
        })

        console.log('lv1');
        console.log("animationScene")
        console.log("this.bucket", this.bucket)
        console.log("this.health", this.health)

        var map = this.make.tilemap({ key: 'lv1' });


        let desert1Tiles = map.addTilesetImage("desert1", "desert1IMG");
        let desert2Tiles = map.addTilesetImage("desert2", "desert2IMG");
        let desert3Tiles = map.addTilesetImage("desert3", "desert3IMG");
        let desert4Tiles = map.addTilesetImage("desert4", "desert4IMG");

        let tilesArray = [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles]

        this.ground = map.createLayer("ground", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0, 0);
        this.ground2 = map.createLayer("ground2", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0, 0);
        this.deco = map.createLayer("deco", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0, 0);
        this.tent = map.createLayer("tent", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0, 0);
        this.oasis2 = map.createLayer("oasis2", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0, 0);
        this.oasis = map.createLayer("oasis", [desert1Tiles, desert2Tiles, desert3Tiles, desert4Tiles], 0, 0);

        this.bucket1 = this.physics.add.sprite(700, 150, 'bucket').setScale(1);

        

        //////
        this.anims.create({
            key: 'nick-up',
            frames: this.anims.generateFrameNumbers('nick',
                { start: 104, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'nick-left',
            frames: this.anims.generateFrameNumbers('nick',
                { start: 117, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'nick-down',
            frames: this.anims.generateFrameNumbers('nick',
                { start: 130, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'nick-right',
            frames: this.anims.generateFrameNumbers('nick',
                { start: 143, end: 151 }),
            frameRate: 5,
            repeat: -1
        });


        /////////////
        this.anims.create({
            key: 'skeleton1-up',
            frames: this.anims.generateFrameNumbers('skeleton1',
                { start: 104, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton1-left',
            frames: this.anims.generateFrameNumbers('skeleton1',
                { start: 117, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton1-down',
            frames: this.anims.generateFrameNumbers('skeleton1',
                { start: 130, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton1-right',
            frames: this.anims.generateFrameNumbers('skeleton1',
                { start: 143, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        /////////////////////
        this.anims.create({
            key: 'skeleton2-up',
            frames: this.anims.generateFrameNumbers('skeleton2',
                { start: 104, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton2-left',
            frames: this.anims.generateFrameNumbers('skeleton2',
                { start: 117, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton2-down',
            frames: this.anims.generateFrameNumbers('skeleton2',
                { start: 130, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton2-right',
            frames: this.anims.generateFrameNumbers('skeleton2',
                { start: 143, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        /////////////////////
        this.anims.create({
            key: 'skeleton3-up',
            frames: this.anims.generateFrameNumbers('skeleton3',
                { start: 104, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton3-left',
            frames: this.anims.generateFrameNumbers('skeleton3',
                { start: 117, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton3-down',
            frames: this.anims.generateFrameNumbers('skeleton3',
                { start: 130, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton3-right',
            frames: this.anims.generateFrameNumbers('skeleton3',
                { start: 143, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        /////////////////////////////////
        this.anims.create({
            key: 'skeleton4-up',
            frames: this.anims.generateFrameNumbers('skeleton4',
                { start: 104, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton4-left',
            frames: this.anims.generateFrameNumbers('skeleton4',
                { start: 117, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton4-down',
            frames: this.anims.generateFrameNumbers('skeleton4',
                { start: 130, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton4-right',
            frames: this.anims.generateFrameNumbers('skeleton4',
                { start: 143, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        let start = map.findObject("object", obj => obj.name === "start");
        let skeleton1 = map.findObject("object", obj => obj.name === "skeleton1");
        let skeleton2 = map.findObject("object", obj => obj.name === "skeleton2");
        let skeleton3 = map.findObject("object", obj => obj.name === "skeleton3");


        this.player = this.physics.add.sprite(start.x, start.y, "nick").setScale(1).play("nick-right")
        this.enemy1 = this.physics.add.sprite(skeleton1.x, skeleton1.y, "skeleton1").setScale(1).play("skeleton1-right")
        this.enemy2 = this.physics.add.sprite(skeleton2.x, skeleton2.y, "skeleton2").setScale(1).play("skeleton2-right")
        this.enemy3 = this.physics.add.sprite(skeleton3.x, skeleton3.y, "skeleton3").setScale(1).play("skeleton3-right")


        this.tweens.add({
            targets: this.enemy2,
            x: 700,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.enemy1,
            y: 250,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.enemy3,
            y: 300,
            flipX: true,
            yoyo: true,
            duration: 4000,
            repeat: -1
        })

        this.tweens.add({
            targets: this.bucket1,
            y: '-=4', 
            duration: 500, 
            yoyo: true, 
            repeat: -1 
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.ground2.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, this.ground2);

        // this.cameras.main.setBounds( 0, 0, map.widthInPixels,map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.physics.world.bounds.width = this.ground.width; this.physics.world.bounds.height = this.ground.height; this.player.setCollideWorldBounds(true);

        window.player = this.player

        this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.5)
        this.enemy1.body.setSize(this.enemy1.width * 0.5, this.enemy1.height * 0.5)
        this.enemy2.body.setSize(this.enemy2.width * 0.5, this.enemy2.height * 0.5)
        this.enemy3.body.setSize(this.enemy3.width * 0.5, this.enemy3.height * 0.5)
        this.bucket1.body.setSize(this.bucket1.width * 0.5, this.bucket1.height * 0.5)

        this.physics.add.overlap(
            this.player,
            [this.bucket1, this.bucket2],
            this.collectBucket,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            [this.enemy1, this.enemy2, this.enemy3],
            hitEnemy,
            null,
            this
        );

        this.physics.add.overlap(
            this.player,
            this.enemy1,
            this.enemyCaught,
            null,
            this
        );

        this.physics.add.overlap(this.player, [this.enemy1, this.enemy2, this.enemy3], hitEnemy, null, this);

       

        console.log("showInventory");

        this.scene.launch("showInventory");

    }



    update() {

        if (this.player.x > 1164 && this.player.x < 1196 &&
            this.player.y < 242 && this.player.y > 190) {
            this.enterSound.play();
            console.log("Door1")
            this.lv2()
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play("nick-left", true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play("nick-right", true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-200);
            this.player.anims.play("nick-up", true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(200);
            this.player.anims.play("nick-down", true);
        } else {
            this.player.setVelocity(0);
            this.player.anims.stop()
        }

        if (this.enemyCollisions >= 3) {
            this.scene.start("gameOver");
        }

    } // end of update // 

    collectBucket(player, bucket1) {

        this.collectSound.play();
        
        console.log("collectBucket");
        bucket1.disableBody(true, true);
        window.bucket++;
        updateInventory.call(this)

        if (window.buckets == 1){
            this.scene.start("lv2");
        }
    }

    lv2(player, tile) {
        console.log("lv2 function");
        this.scene.start("lv2", {
            bucket: this.bucket,
            health: this.health
        })
    }
}

