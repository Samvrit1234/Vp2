//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var fedTime, lastFed;
var food;
var feed, addFood;

function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg.png");
  happyDogimage = loadImage("images/dogImg1.png");  

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  
  dog = createSprite(200,400,50,50);
  dog.addImage(dogimage);
  dog.scale = 0.2;

  foodObj = new Food(400,400,50,60);

  feed = craeteButton("Feed the Dog");
  feed.position(750,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);


fedTime = databse.ref("FeedTime");
fedTime.on("value",function(data){
   lastFed = data.val();
})




foodObj.display();


  drawSprites();



  //add styles here
  text("Note;Press the Up arrow to feed the dog milk",100,200);


}

function readStock(data){

    foodS = data.val();

}

function writeStock(){

    database.ref('/').update({

      Food:x

    })

}
function addFood(){

  database = databse + 1;
  
}

function feedDog(){

  var hour = datetime.slice(11,13);
  dog = addImage(happyDogimage);
  food = food - 1;

}




