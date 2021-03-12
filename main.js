console.log("Hello from main");
/*
To do list main
Give spillet lidt grafik
Sætte noget bagrundsmusik på

*/


// set up game window
canvas = document.createElement("canvas");
canvas.height = 800;
canvas.width = 800;
canvas.style.background="Black"
canvas.style.border = "5px solid gray";
canvas = document.body.appendChild(canvas);

let objects = [];
objects.push(new genstande({x: 300, y: 200}, {x: 6, y: 4}, 10, "red") );
objects.push(new genstande({ x: 50, y: 200 }, { x: 4, y: 2 }, 20, "blue"));
objects.push(new genstande({ x: 150, y: 50 }, { x: 2, y: 1 }, 40, "green"));
let spiller = new player({ x: 400, y: 760 }, { x: 2, y: 1 }, 80, 20, "blue");

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;

        case 39: //right arrow key
            moveRight();
            break;
    }
}
function moveLeft() {
    spiller.position.x -= 15;
}
function moveRight() {
    spiller.position.x += 15;
}


// refresh game 144 times each second
function gameloop () {
  //clear the canvas
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
 
    spiller.draw();

    for (i = 0; i < objects.length; i++) {
        if (objects[i].position.y < 800) {
            objects[i].movement();
            objects[i].draw();
        }
    }


    for (iii = 0; iii < objects.length; iii++) {
        spiller.spillercollide(objects[iii]);

        for (jjj = iii + 1; jjj < objects.length; jjj++) {
            objects[iii].collide(objects[jjj]);
        }
    }
}
setInterval(gameloop, 1000/144)
