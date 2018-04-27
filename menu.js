// This is the menu state

var logo;

const menuState = {

  /**
   * Loads game assets (images, sounds, tilemaps, etc)
   */
  preload : function () {
  },

  /**
   * Initializes variables and instantiates objects
   */
  create: function () {

    // Enable mouse
    game.input.mouse.capture = true;

    // Add some text
    game.add.text(
      80, 260,  // x, y position
      "Welcome to the Magickal Kingdom of Flosina!\nPress space to enter.", 
      { fontSize: "32px", fill: "#fff" }
    );
      
    // Add Mellie character
        logo = game.add.sprite(200, 200, 'logo');
      
  },

  /** 
   * Updates the screen each frame
   */
  update: function () {

    // Check for mouse click and switch state to the game state when
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start("game");
    }
  }
}; // end menuState