$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
    // Might disable this cuz it lowkey kinda lags my laptop....


    // TODO 2 - Create Platforms
    //Walls will be black I think. Platforms red.
    //What i am aiming for this first part is a zig zag type jump.

    //PLATFORMS GROUP #1

    createPlatform(250, 605, 85, 20, "red"); //First starting platform. You will have to do some weird jumps to get up.

    createPlatform(95, 505, 85, 20, "red"); //First starting platform. You will have to do some weird jumps to get up.
      
    createPlatform(250, 405, 85, 20, "red"); //First starting platform. You will have to do some weird jumps to get up.

    //Platform group #2
    //These'll be blue this time.
    createPlatform(1330, 607, 85, 20, "blue"); //First starting platform. You will have to do some weird jumps to get up.

    createPlatform(1200, 505, 85, 20, "blue"); //First starting platform. You will have to do some weird jumps to get up.
      
    createPlatform(1330, 405, 85, 20, "blue"); //First starting platform. You will have to do some weird jumps to get up.
    //top half

    createPlatform(1200, 303, 85, 20, "blue"); //First starting platform. You will have to do some weird jumps to get up.
      

    //WALLS

    createPlatform(300, 305, 50, 500, "black"); //wall test //Wall #1

    createPlatform(500, 0, 50, 550, "black"); //wall test //Wall #2 

    //Next, make a horizontal roof for the second wall. It will go on the side. This will create a mini forced cave.

    createPlatform(550, 500, 550, 50, "black"); //wall test //Wall #2 

    //Moar platforms. This time, they are on top of the cave wall. If you fall in between two pillars, you are already dead.
        
    createPlatform(580, 290, 50, 240, "black"); //First platform, will copy and paste. WILL become smaller. I think.

    createPlatform(690, 290, 130, 240, "black"); //Second platform, will copy and paste.

    createPlatform(890, 290, 130, 240, "black"); //Third platform, will copy and paste.







    // TODO 3 - Create Collectables
    createCollectable("database", 400, 700);
      
    createCollectable("steve", 350, 500);

    createCollectable("diamond", 450, 200);

    //FINAL COLLECTABLE! TO END THE GAME.

    createCollectable("max", 585, 245);







    
    // TODO 4 - Create Cannons

    createCannon("top", 500, 2000); //This cannon lies on top of the screen and shoots down.

    createCannon("bottom", 600, 900); //Shoots from da bottom.

    createCannon("bottom", 800, 800); //Shoots from da bottom.

    createCannon("bottom", 1000, 900); //Shoots from da bottom.

    //The EVIL cannon that is in between the platforms on the rightmost side of the screen that you jump on. It is EVIL because it adds a horrible challenge.
    
    createCannon("bottom", 1250, 2500); //Shoots from da bottom.


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
