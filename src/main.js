// Name: Amber Hsiung
// Rocket Patrol Mods
// Time: 12 hours
//
// Mods:
// new enemy (5) done
// alternating players (5) wip
// new scoring mechanism (5)
// background sprite (1) done
// display time (3) set up complete, can't get numbers to update
// 
// resources:
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