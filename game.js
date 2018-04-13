var map;
var cursors;

// Create the main game state class
const gameState = {

    preload: function () {

        game.load.image('backdrop', 'img/space.jpg');
        game.load.image('blurpia', 'img/blurpia.png');
        game.load.image('oceana', 'img/oceana.png');
        game.load.image('forest', 'img/forest.png');
        game.load.image('sky', 'img/sky.png');
        
    },

    create: function () {

        // todo: set to backdrop dimensions
        // game.world.setBounds(0, 0, , 1200);

        game.add.sprite(0, 0, 'backdrop');

        // game.camera.follow(card);
        
        
        
        
        
/*********************/
        
        // Add button to go to Blurpia game state
        
        
        const blurpia = game.add.sprite(game.world.centerX, game.world.centerY, 'blurpia');
        blurpia.anchor.set(0.5);
        blurpia.inputEnabled = true;
        blurpia.input.useHandCursor = true;  // Change cursor style on mouseover

        // Add a function to the button to be called when the button is clicked
        blurpia.events.onInputDown.add(function () {
            game.state.start('blurpia');
        }, this);
        
        
        
/*********************/
        
        
        
        
        
/*********************/
        
        // Add button to go to Oceana game state
        
        
        const oceana = game.add.sprite(100, 100, 'oceana');
        oceana.anchor.set(0.5);
        oceana.inputEnabled = true;
        oceana.input.useHandCursor = true;  // Change cursor style on mouseover

        // Add a function to the button to be called when the button is clicked
        oceana.events.onInputDown.add(function () {
            game.state.start('oceana');
        }, this);
        
        
        
/*********************/
        

        
        

/*********************/
        
        // Add button to go to Forest game state
        
        
        const forest = game.add.sprite(100, 400, 'forest');
        forest.anchor.set(0.5);
        forest.inputEnabled = true;
        forest.input.useHandCursor = true;  // Change cursor style on mouseover

        // Add a function to the button to be called when the button is clicked
        forest.events.onInputDown.add(function () {
            game.state.start('forest');
        }, this);
        
        
        
/*********************/





/*********************/
        
        // Add button to go to Sky game state
        
        
        const sky = game.add.sprite(600, 100, 'sky');
        sky.anchor.set(0.5);
        sky.inputEnabled = true;
        sky.input.useHandCursor = true;  // Change cursor style on mouseover

        // Add a function to the button to be called when the button is clicked
        sky.events.onInputDown.add(function () {
            game.state.start('sky');
        }, this);
        
        
        
/*********************/
        
        
        
        
        
        cursors = game.input.keyboard.createCursorKeys();
        
        console.log({
            cursors: cursors
        });
        
    },

    update: function () {

        /* if (cursors.left.isDown)
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

        game.world.wrap(card, 0, true); */
        
    }

};