// The Magickal Sub-Kingdom Blurpia
// Home to Queen Melynda (a.k.a. Mellie)

var logo;
var mellie;

const blurpiaState = {

    preload: function () {

        game.load.image('backdrop', 'img/blurpiaKingdom.png');
        game.load.image('map', 'img/main.png');
        
        game.load.spritesheet('mellie', 'img/Mellie.png', 250, 250, 13);
        
    },

    create: function () {
        
        // Set backdrop
        game.add.sprite(0, 0, 'backdrop');
        console.log("Blurple!");
        
        // Add Mellie character
        mellie = game.add.sprite(100, 320, 'mellie');
        
        // Add button to go to back to Map
        const map = game.add.sprite(50, 50, 'map');
        map.anchor.set(0.5);
        map.inputEnabled = true;
        map.input.useHandCursor = true;  // Change cursor style on mouseover
        
        
        
        const mellieFrames = [];
        
        for (let i = 1; i < 29; i++) {
            mellieFrames.push(i);
        }
        
        mellie.animations.add('play', mellieFrames, 10, true);
        
        
        
        
/********************* Test Logo Animation */
        
        // logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        
        /* const logoFrames = [];
        
        for (let i = 1; i < 29; i++) {
            logoFrames.push(i);
        }
        
        logo.animations.add('play', logoFrames, 10, true);
        
        logo.animations.play('play'); */
        
        
/*********************/
        
        
        
        

        // Add a function to the button to be called when the button is clicked
        map.events.onInputDown.add(function () {
            game.state.start('game');
        }, this);

    },

    update: function () {

        mellie.animations.play('play');
        
    }

};