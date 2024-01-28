// Name: Amber Hsiung
// Rocket Patrol Mods
// Time: 12 hours
//
// Mods:
// new enemy (5) working on placement of ship and speed of ship
// alternating players (5)
// mouse control (5)
// background sprite (1) done
// display time (3)
// 

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