
// Patrick's front end javascript project from Udacity.
// See https://github.com/udacity/frontend-nanodegree-arcade-game
// for original files.

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.x = x;
    this.y = y;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x < 505) {
        this.x = this.x + (this.speed * dt)
    } else {
        this.x = -100
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-horn-girl.png';
    this.x = 200;
    this.y = 400;
    this.speed = 20;
}

// Required method that updateEntities from the engine file
// runs.
Player.prototype.update = function (dt) {
    this.x*dt;
    this.y*dt;
}


// Method that renderEntities from engine.js runs to render
// the player.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Takes input from the keyup document listener and runs a
// simple if else function to determine movment direction.
Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x > 0) {
        this.x -= 101;
    } else if (key === 'right' && this.x < 395) {
        this.x += 101;
    } else if (key === 'up' && this.y > 0) {
        this.y -= 83;
    } else if (key === 'down' && this.y < 400) {
        this.y += 83;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var player = new Player();
var enemy10 = new Enemy(-100,60,400)
var enemy11 = new Enemy(200,60,400)
var enemy2 = new Enemy(50,140,350)
var enemy30 = new Enemy(100,220,300)
var enemy31 = new Enemy(400,220,300)
var allEnemies = [enemy10,enemy11,enemy2,enemy30,enemy31]

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
