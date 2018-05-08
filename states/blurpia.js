// The Magickal Sub-Kingdom Blurpia
// Home to Queen Melynda (a.k.a. Mellie)

var mellie;
var music;

var returned = false;

const blurpiaState = {

    preload: function () {

        game.load.image('backdrop', 'img/blurpiaKingdom.png');
        game.load.image('map', 'img/main.png');
        
        game.load.spritesheet('mellie', 'img/Mellie.png', 250, 250, 13);
        
        game.load.audio('royal', ['music/stormholtsTears.mp3', 'music/stormholtsTears.ogg']);
        
    },

    create: function () {
        
        game.world.setBounds(0, 0, 1042, 666);
        
        // Set backdrop
        game.add.sprite(0, 0, 'backdrop');
        console.log("Blurple!");
	    
		music = game.add.audio('royal');
	   	 music.loop = true;
		music.play();
        
        // TEXT
    game.add.text(
    50, 600, // x, y position
        "My name is Mellie, and I am the Queen",
        { fontSize: "16px", fill: "#fff"}
    );
        
        // TEXT
    game.add.text(
    50, 620, // x, y position
        " of Blurpia!",
        { fontSize: "16px", fill: "#fff"}
    );
        
        // Add Mellie character
        mellie = game.add.sprite(100, 320, 'mellie');
        
        // Add button to go to back to Map
        const map = game.add.sprite(50, 50, 'map');
        map.anchor.set(0.5);
        map.inputEnabled = true;
        map.input.useHandCursor = true;  // Change cursor style on mouseover
        map.fixedToCamera = true;
        
        // Add Mellie animations
        const mellieFrames = [];
        
        for (let i = 1; i < 14; i++) {
            mellieFrames.push(i);
        }
        
        mellie.animations.add('play', mellieFrames, 10, true);

        // Add a function to the button to be called when the button is clicked
        map.events.onInputDown.add(function () {
		music.pause();
            game.state.start('game');
        }, this);
        
        returned = true;

    },

    update: function () {

        // Animate char: Mellie
        mellie.animations.play('play');
        
        var x = game.input.mousePointer.x;
        var y = game.input.mousePointer.y;
        
        if (x <= 0 || x >= 800 || y <= 0 || y >= 600) {
            return;
        }
        
        if ((x <= 100)) {
            // left
            game.camera.x -= 4;
        }
        else if ((x >= 700)) {
            // right
            game.camera.x += 4;
        }

        if ((y <= 100)) {
            // up
            game.camera.y -= 4;
        }
        else if ((y >= 500)) {
            // down
            game.camera.y += 4;
        }
        
    }

};
