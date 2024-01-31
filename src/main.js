// Name: Amber Hsiung
// Rocket Patrol Mods
// Time: 12 hours
//
// Mods:
// new enemy (5) done
// control rocket after its fired (1) done
// new title screen (3) done
// background sprite (1) done
// display time (3) done
// fire (1) done
// high score (1) done
// particle emitter (5) done
//
// resources:


let config ={
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}


let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3