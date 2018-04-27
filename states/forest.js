// The Forest in the Outskirts of Blurpia
// Home to Emi's Character

var lily;

const forestState = {

    preload: function () {

        game.load.image('backdrop', 'img/forestKingdom.png');
        game.load.image('map', 'img/main.png');
        
        game.load.spritesheet('lily', 'img/Lily.png', 32, 32, 13);
    },
    
    create: function () {
        
        // Set backdrop
        game.add.sprite(0, 0, 'backdrop');
        console.log("Forest!");
        
        // Add lily character
        lily = game.add.sprite(100, 320, 'lily');
        
        // Add button to go to back to Map
        const map = game.add.sprite(50, 50, 'map');
        map.anchor.set(0.5);
        map.inputEnabled = true;
        map.input.useHandCursor = true;  // Change cursor style on mouseover
        
        // Add Lily animations
        const LilyFrames = [];
        
        for (let i = 1; i < 14; i++) {
            LilyFrames.push(i);
        }
        
        lily.animations.add('play', lilyFrames, 10, true);

        // Add a function to the button to be called when the button is clicked
        map.events.onInputDown.add(function () {
            game.state.start('game');
        }, this);

    },

    update: function () {

        // Animate char: Lily
        lily.animations.play('play');
        
    }

};
