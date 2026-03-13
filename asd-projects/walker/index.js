/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  //Global walker var.

  var walker = {
    X: 0,
    Y: 0,
    speedX: 0,
    speedY: 0,
  };

  //Key stuf

  const KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  };
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
$(document).on('keydown', handleKeyDown);          
$(document).on('keyup', handleKeyUp);                        

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    wallCollision();

  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    console.log(event.which);

    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
      return;
      // console.log("left key pressed");
    }

     if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
      // console.log("right key pressed");
    }

     if (event.which === KEY.UP) {
      walker.speedY = -5;
      // console.log("up key pressed");
    }

     if (event.which === KEY.DOWN) {
      walker.speedY = 5;
      // console.log("down key pressed");
    }

  }

  function handleKeyUp(event) {

    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
      // console.log("left key pressed");
    }

     if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
      // console.log("right key pressed");
    }

     if (event.which === KEY.UP) {
      walker.speedY = 0;
      // console.log("up key pressed");
    }

     if (event.which === KEY.DOWN) {
      walker.speedY = 0;
      // console.log("down key pressed");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  //Updating the walker POS.

  function repositionGameItem() {
    walker.X = walker.speedX + walker.X;
    walker.Y = walker.speedY + walker.Y;
  }

  //Drawing the walker to the correct location.

  function redrawGameItem() {
    $("#walker").css("left", walker.X);
  $("#walker").css("top", walker.Y);
  }

  //Wall collision.

  function wallCollision() {
    if (walker.X < 0) {
      walker.X -= walker.speedX;
    }

     if (walker.X > $("#board").width() - 55) {
      walker.X -= walker.speedX;
    }

     if (walker.Y < 0) {
      walker.Y -= walker.speedY;
    }

    if (walker.Y > $("#board").height() - 55) {
      walker.Y -= walker.speedY;
    }
  }
  
}
