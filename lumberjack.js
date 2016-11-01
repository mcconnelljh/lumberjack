/*jslint node: true */
'use strict';

// setup some initial values we'll use for the lumberjack
var   STARTING_HEALTH = 3;
var   CURRENT_HEALTH = 3;
var   MAX_HEALTH = 10;
var   PLAYER_SPEED = 5;
var   INITIAL_LADDERS = 0;
var   INITIAL_BOMBS = 0;
var   INITIAL_DIRECTION = "right";


// defines the properties of the player object
var Lumberjack = {
    //****** HEALTH STATS **********//
    health_starting: STARTING_HEALTH, // health at game start
    health_current: CURRENT_HEALTH, // current health level
    health_max: MAX_HEALTH, // maximum health attainable
    alive: true, // is the player alive or dead?
    
    //****** MOVEMENT STATS *********//
    move_speed: PLAYER_SPEED, // the speed at which the player moves
    facing_direction: INITIAL_DIRECTION, // direction player is facing
    
    //****** LOOT COUNTS **********//
    count_ladders: INITIAL_LADDERS, // how many ladders the player is carrying
    count_bombs: INITIAL_BOMBS // how many bombs the player is carrying
};

// keeps players from redefining some of their initial values
Object.defineProperty(Lumberjack, 'health_max', {writable: false});
Object.defineProperty(Lumberjack, 'health_starting', {writable: false});
Object.defineProperty(Lumberjack, 'move_speed', {writable: false});

// defines the 'fire' function for a player
Lumberjack.fire = function () {
      
};

// defines what happens to the player when he takes a hit
Lumberjack.takesHit = function () {
    this.health_current -= 1;
    if (this.health_current <= 0) { this.alive = false; }
};

// a player finds health
Lumberjack.addHealth = function () {
    if (this.health_current < this.health_max) { this.health_current += 1; }
};

// a player finds a bomb
Lumberjack.addBomb = function () {
    this.count_bombs += 1;
};

// a player places a bomb
Lumberjack.dropBomb = function () {
    this.count_bombs -= 1;
};

// a player finds a ladder
Lumberjack.addLadder = function () {
    this.count_ladders += 1;
};

Lumberjack.placeLadder = function () {
    this.count_ladders -= 1;
};