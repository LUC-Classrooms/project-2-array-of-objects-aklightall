/*
 Project 2 - Array of Objects
 Name: Ariana Lighthall
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var sprites = new Array(10);
var sprite1, sprite2

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  sprite1 = new Sprite(100, 100);
  console.log ("sprite 1");
  console.log (Sprite1)
  sprite2 = new Sprite(100, 200);
  console.log("sprite 2")
  console.log(sprite2);

  for(let i = 0; i < sprites.length; i++){
    sprites[i]=new Sprite(random(width), random(height));
    console.log(sprites[i]);
  }

}

function draw(){
  background(200); //light gray background
  for(let i = 0; i < sprites.length; i++){
    sprites[i].display()
    sprites[i].move();
  }
  function Blob(){
    this.x = random(width)
    this.y = random (height)
    this.xSpeed = random (-2, 2);
    thiys,ySpeed= random (-2, 2)

    this.move = function (){

    }
  }
  
}

