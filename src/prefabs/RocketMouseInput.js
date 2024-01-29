
class RocketMouseInput extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // add object to existing scene
        scene.add.existing(this)    // add to existing, displayList, updateList
        this.isFiring = false       // track rocket's firing status
        this.moveSpeed = 2          // rocket speed in pixels/frame
        this.sfxShot = scene.sound.add('sfx-shot')
    }



    //lockText;
    //sprite;

    //preload ()
    //{
    //    this.load.image('ship', 'assets/sprites/ship.png');
    //}

    //create () {
        //this.sprite = this.add.sprite(400, 300, 'ship');

        // Pointer lock will only work after an 'engagement gesture', e.g. mousedown, keypress, etc.
    //    this.input.on('pointerdown', function (pointer)
    //    {

    //        this.input.mouse.requestPointerLock();

    //    }, this);

        // When locked, you will have to use the movementX and movementY properties of the pointer
        // (since a locked cursor's xy position does not update)
    //    this.input.on('pointermove', function (pointer)
    //    {

    //        if (this.input.mouse.locked)
    //        {
    //            this.sprite.x += pointer.movementX;
    //            this.sprite.y += pointer.movementY;


                // Force the sprite to stay on screen
    //            this.sprite.x = Phaser.Math.Wrap(this.sprite.x, 0, game.renderer.width);
    //            this.sprite.y = Phaser.Math.Wrap(this.sprite.y, 0, game.renderer.height);

    //            if (pointer.movementX > 0) { this.sprite.setRotation(0.1); }
    //            else if (pointer.movementX < 0) { this.sprite.setRotation(-0.1); }
    //            else { this.sprite.setRotation(0); }

    //            this.updateLockText(true);
    //        }
    //    }, this);

    //    this.input.on('pointerdown', function(pointer){ 
    //        console.log('down');
    //        this
    //    })
        // Exit pointer lock when Q is pressed. Browsers will also exit pointer lock when escape is
        // pressed.
        //this.input.keyboard.on('keydown-Q', function (event)
        //{
        //    if (this.input.mouse.locked)
        //    {
        //        this.input.mouse.releasePointerLock();
        //    }
        //}, this);

        // Optionally, you can subscribe to the game's pointer lock change event to know when the player
        // enters/exits pointer lock. This is useful if you need to update the UI, change to a custom
        // mouse cursor, etc.
        //this.input.manager.events.on('pointerlockchange', event =>
        //{
        //    this.updateLockText(event.isPointerLocked, this.sprite.x, this.sprite.y);

        //});

    //    this.lockText = this.add.text(16, 16, '', {
    //        fontSize: '20px',
    //        fill: '#ffffff'
    //    });

    //    this.updateLockText(false);
    //}

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }
        
        // fire button
        if(Phaser.Input.Mouse.JustDown(keyFIRE) && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
        }
    }

    updateLockText (isLocked) {
        this.lockText.setText([
            isLocked ? 'The pointer is now locked!' : 'The pointer is now unlocked.',
    //        `Sprite is at: (${this.sprite.x},${this.sprite.y})`,
            'Press Q to release pointer lock.'
        ]);
    }
}

//const config = {
//    type: Phaser.AUTO,
//    parent: 'phaser-example',
//    width: 800,
//    height: 600,
//    scene: Example
//};

//const game = new Phaser.Game(config);
