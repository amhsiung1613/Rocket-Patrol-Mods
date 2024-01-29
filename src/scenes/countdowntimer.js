var text, timer;

var cssColors = colors.cssColors;

var config = {
  width: 240,
  height: 160,
  fps: {
    panicMax: 0
  },
  scene: {
    create,
    update
  },
  loader: {
    baseURL: 'https://labs.phaser.io',
    crossOrigin: 'anonymous'
  }
};

function create() {
  timer = this.time.addEvent({
    delay: 10000,
    paused: false
  });
  
  this.input.on('pointerdown', function () {
    timer.paused = !timer.paused;
  });
    
  text = this.add.text(20, 30, '', { fill: cssColors.aqua, font: 'bold 72px system-ui' })
    .setShadow(2, 2, cssColors.navy, 8);
}

function update() {
  text
    .setFill(timer.paused ? cssColors.yellow : cssColors.aqua)
    .setText(timer.getRemainingSeconds().toFixed(1));
}

document.getElementById('version').textContent = 'Phaser v' + Phaser.VERSION;

var game = new Phaser.Game(config);