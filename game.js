var map;
var card;
var cursors;

// Create the main game state class
const gameState = {

    preload: function () {

        game.load.image('backdrop', 'img/space.jpg');
        game.load.image('button', 'img/villager.png');
        
    },

    create: function () {

        // todo: set to backdrop dimensions
        // game.world.setBounds(0, 0, , 1200);

        game.add.sprite(0, 0, 'backdrop');

        card = game.add.sprite(50, 50, 'card');
        
        card.scale.setTo(0.1, 0.1);

        // game.camera.follow();
        
        // Add the button image to the middle of the screen and enable input
        const button = game.add.sprite(game.world.centerX, game.world.centerY, 'button');
        button.anchor.set(0.5);
        button.inputEnabled = true;
        button.input.useHandCursor = true;  // Change cursor style on mouseover

        // Add a function to the button to be called when the button is clicked
        button.events.onInputDown.add(function () {
            game.state.start('test');
        }, this);

        cursors = game.input.keyboard.createCursorKeys();
        
        console.log({
            cursors: cursors
        });

    },

    update: function () {

        if (cursors.left.isDown)
        {
            card.x -= 4;
            console.log("down");
        }
        else if (cursors.right.isDown)
        {
            card.x += 4;
        }

        if (cursors.up.isDown)
        {
            card.y -= 4;
        }
        else if (cursors.down.isDown)
        {
            card.y += 4;
        }

        game.world.wrap(card, 0, true);
        
    },

    render: function () {

        game.debug.cameraInfo(game.camera, 500, 32);
        game.debug.spriteCoords(card, 32, 32);

    }

};