
var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)
  
  monkey=createSprite(50,400,20,20)
  monkey.addAnimation('running',monkey_running)
  monkey.scale=0.1
  
  FoodGroup=createGroup()
 obstacleGroup=createGroup()
}

               
function draw() {
background('lightBlue')
  
  fill('black')
  ground=createSprite(300,400,600,20)
  ground.velocityX=-10
  ground.x=ground.width/2
 
  
  if (keyDown("space")&&monkey.y>=350){
    monkey.velocityY=-16
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
   
//  monkey.depth=obstacleGroup.depth+1
 // console.log(monkey.depth)
         
  food()
  obstacles()
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    score=score+1
  }
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0
    obstacle.velocityX=0
    
  }

    
  
  drawSprites()
  
  fill('darkBlue')                                                     
  textSize(20)
  text('Score : '+ score,450,50)
  
  fill('black')
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text('Survival Time ='+survivalTime,100,50)
}

function food(){
  if(frameCount%100===0){
    banana=createSprite(590,200,20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.y=Math.round(random(150,250))
    banana.velocityX=-6
    banana.Lifetime=100
    FoodGroup.add(banana)
  }
  
    
}

function obstacles(){
  if(frameCount%200===0){
    obstacle=createSprite(590,355,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-12
    obstacle.Lifetime=100
    obstacleGroup.add(obstacle)
  }
  
  
  
}




