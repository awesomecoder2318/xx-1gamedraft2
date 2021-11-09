const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player, bullet,bullet2, gungroup
var alien1, alien2, alien3, alien4
var ground, plasma1,plasma2,plasma3,plasma4
var hp1 = 10, hp2 = 10, hp3 = 10,hp4 = 10, hpp = 15
var gameover, dead, restart, winner
var platform1
var platform2
var platform3
var width = width
var platform4
var platform5
var space, easterEgg
var mouse1
var healthBar
var winnerS
var box1 
var bulletS, deathS, plasmaS
var alienDeathS
var box2
var hbimg15,hbimg14,hbimg13,hbimg12,hbimg11,hbimg10,hbimg9,hbimg8,hbimg7,hbimg6,hbimg5,hbimg4,hbimg3,hbimg2,hbimg1
var pimg, plasmaGroup1,plasmaGroup2,plasmaGroup3,plasmaGroup4
var gameState = 2, score = 0
var spawner
var characteranimation1
var characteranimation2
var floor, platform1x, platform2x, box, revimg
var enemyGroup, alienimg1, alienimg2, backgroundimg, idle, bulletimg, bulletGroup, bulletGroup2
function preload() {
characteranimation1 = loadAnimation("images/Player1 - Copy.png", "images/Player2 - Copy.png", "images/Player3 - Copy.png", "images/Player4 - Copy.png", "images/Player5 - Copy.png")
characteranimation2 = loadAnimation("images/Player1.png", "images/Player2.png", "images/Player3.png", "images/Player4.png", "images/Player5.png")
floor = loadImage("images/floor.png")
platform1x = loadImage("images/stand1.png")
platform2x = loadImage("images/stand2.png")
box = loadImage("images/box2.png")
revimg = loadImage("images/playerspawner.png")
alienimg1 = loadAnimation("images/Alien1.png", "images/Alien2.png", "images/Alien3.png")
alienimg2 = loadAnimation("images/Alien1 - Copy.png", "images/Alien2 - Copy.png", "images/Alien3 - Copy.png")
backgroundimg = loadImage("images/alien-worlds-3.jpg")
idle = loadImage("images/idleanimation.png")
bulletimg = loadImage("images/bullet.png")
gameover = loadImage("images/game over.jpg")
dead = loadImage("images/player_death.png")
pimg = loadImage("images/plasma_bullet.png")
winner = loadImage("images/victory.jpg")
hbimg15 = loadImage("images/health15.png")
hbimg14 = loadImage("images/health14.png")
hbimg13 = loadImage("images/health13.png")
hbimg12 = loadImage("images/health12.png")
hbimg11 = loadImage("images/health11.png")
hbimg10 = loadImage("images/health10.png")
hbimg9 = loadImage("images/health9.png")
hbimg8 = loadImage("images/health8.png")
hbimg7 = loadImage("images/health7.png")
hbimg6 = loadImage("images/health6.png")
hbimg5 = loadImage("images/health5.png")
hbimg4 = loadImage("images/health4.png")
hbimg3 = loadImage("images/health3.png")
hbimg2= loadImage("images/health2.png")
hbimg1 = loadImage("images/health1.png")
alienDeathS = loadSound("sounds/alien death.wav")
bulletS = loadSound("sounds/bullet.mp3")
deathS = loadSound("sounds/death.wav")
plasmaS = loadSound("sounds/laser bullet.wav")
winnerS = loadSound("sounds/winner.wav")
space = loadImage("images/space.jpg")
easterEgg = loadImage("images/xx1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine= Engine.create()
  world = engine.world


  ground=createSprite(1000,599,3000,50)
 
  platform1=createSprite(750,300,200,30)
  platform1.addImage("surface",platform1x)
  platform1.scale = 0.7

  platform2=createSprite(500,400,200,30)
  platform2.addImage("surface",platform1x)
  platform2.scale = 0.7

  platform3=createSprite(1500,500,400,30)
  platform3.addImage("surface", platform1x)
  platform3.scale = 0.7

  platform4=createSprite(1000,350,400,30)
  platform4.addImage("surface",platform1x)
  platform4.scale = 0.7

  platform5=createSprite(1500,300,200,30)
  platform5.addImage("surface",platform1x)
  platform5.scale = 0.7

  platform6=createSprite(1750,400,200,30)
  platform6.addImage("surface",platform1x)
  platform6.scale = 0.7

  platform7=createSprite(910,100,200,30)
  platform7.addImage("surface",platform1x)
  platform7.scale = 0.7

  platform8=createSprite(1347,500,200,30)
  platform8.addImage("surface",platform1x)
  platform8.scale = 0.7

  platform9=createSprite(750,500,200,30)
  platform9.addImage("surface",platform1x)
  platform9.scale = 0.7

  platform10=createSprite(1000,100,200,30)
  platform10.addImage("surface",platform1x)
  platform10.scale = 0.7

  platform11=createSprite(500,400,200,30)
  platform11.addImage("surface",platform1x)
  platform11.scale = 0.7

  platform12=createSprite(1500,300,200,30)
  platform12.addImage("surface",platform1x)
  platform12.scale = 0.7

  box1=createSprite(500,525,125,100)
  box1.addImage("boxes",box)
  box1.scale = 0.4

  box2=createSprite(1250,525,125,100)
  box2.addImage("boxes",box)
  box2.scale = 0.4

  spawner=createSprite(200,475,400,200)
  spawner.addImage("reviver",revimg)
  spawner.scale = 0.5

  player=createSprite(250,500,100,100)
  player.scale = 0.30000
  player.setCollider("circle",10,10)
  

  healthBar = createSprite(player.x +100, player.y -100, 150,10)
  healthBar.addImage("bar", hbimg15)
  healthBar.scale = 0.1

   alien1 = createSprite(2000,550,100,100)
     alien1.scale = 0.4
     alien1.addAnimation("running", alienimg1)
     alien1.collide(platform1)
     alien1.collide(platform2)
     alien1.collide(platform3)
     alien1.collide(platform4)
     alien1.collide(platform5)
     alien1.collide(platform6)
     alien1.collide(platform7)
     alien1.collide(platform8)
     alien1.collide(platform9)
     alien1.collide(platform10)
     alien1.collide(platform11)
     alien1.collide(platform12)
     
      alien2 = createSprite(1500,230,100,100)
     alien2.scale = 0.4
     alien2.addAnimation("running", alienimg1)
     alien2.collide(platform1)
     alien2.collide(platform2)
     alien2.collide(platform3)
     alien2.collide(platform4)
     alien2.collide(platform5)
     alien2.collide(platform6)
     alien2.collide(platform7)
     alien2.collide(platform8)
     alien2.collide(platform9)
     alien2.collide(platform10)
     alien2.collide(platform11)
     alien2.collide(platform12)
     
      alien3 = createSprite(910,40,100,100)
     alien3.scale = 0.4
     alien3.addAnimation("running", alienimg2)
     alien3.collide(ground)
     alien3.collide(platform1)
     alien3.collide(platform2)
     alien3.collide(platform3)
     alien3.collide(platform4)
     alien3.collide(platform5)
     alien3.collide(platform6)
     alien3.collide(platform7)
     alien3.collide(platform8)
     alien3.collide(platform9)
     alien3.collide(platform10)
     alien3.collide(platform11)
     alien3.collide(platform12)


   alien4 = createSprite(500,400,100,100)
  alien4.scale = 0.4
  alien4.addAnimation("running", alienimg2)
  alien4.collide(ground)
     alien4.collide(platform1)
     alien4.collide(platform2)
     alien4.collide(platform3)
     alien4.collide(platform4)
     alien4.collide(platform5)
     alien4.collide(platform6)
     alien4.collide(platform7)
     alien4.collide(platform8)
     alien4.collide(platform9)
     alien4.collide(platform10)
     alien4.collide(platform11)
     alien4.collide(platform12)

  enemyGroup = new Group()
  gungroup = new Group()
  bulletGroup = new Group()
  bulletGroup2 = new Group()
  plasmaGroup1 = new Group()
  plasmaGroup2 = new Group()
  plasmaGroup3 = new Group()
  plasmaGroup4 = new Group()


  Engine.run(engine)
}

function draw(width) {
  Engine.update(engine)
  background(backgroundimg); 
  text("SCORE:" + score,camera.x-100, camera.y-100)
if(keyDown("j")){
  gameState =4
}
if(gameState ===4 ){
  background(easterEgg)
  text("HOW DID YOU FIND THIS", 650, 350)
}
  if(gameState === 2){
    background(space)
    text("PRESS SPACE KEY TO START THE MISSION",650,350)

  }
  if(keyDown("space")){
    gameState = 1
  }
if(gameState===1){
  camera.x=player.x
  camera.y=player.y
healthBar.x = camera.x+100
healthBar.y = camera.y-100
  healthBar.display()
 


  player.velocityY = player.velocityY +1

 player.collide(ground)
player.collide(platform1)
 player.collide(platform2)
 player.collide(platform3)
 player.collide(platform4)
 player.collide(platform5)
 player.collide(platform6)
 player.collide(platform7)
 player.collide(platform8)
 player.collide(platform9)
 player.collide(platform10)
 player.collide(platform11)
 player.collide(platform12)


spawnAliens()



  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 10
    player.addAnimation("playerright", characteranimation2)

  }
  if(keyDown(LEFT_ARROW)){
    player.velocityX = -10
    player.addAnimation("playerright", characteranimation1)

  } 
  if(keyWentDown(UP_ARROW)){
    player.velocityY = -20

  } 



  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0

  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0
  } 
  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0
  } 

   if(gameState === 1){
     platform1.velocityX = 10
   }
   if(platform1.x > 800){
     platform1.velocityX = -10
   }else if(platform1.x < 700){
    platform1.velocityX = 10
  }


  
    if(player.collide(alien1)){
      gameState = 0
      player.addImage(dead)

     }
     if(player.collide(alien2)){
      gameState = 0
      player.addImage(dead)

    }
      if(player.collide(alien3)){
        gameState = 0
        player.addImage(dead)

      }
      
      if(player.collide(alien4)){
       gameState = 0
       player.addImage(dead)
      }

    if(alien1.isTouching(bulletGroup)){
      hp1=hp1 -1
    }
    if(alien2.isTouching(bulletGroup)){
      hp2=hp2 -1

    }
    if(alien3.isTouching(bulletGroup)){
      hp3=hp3 -1

    }
    if(alien4.isTouching(bulletGroup)){
      hp4=hp4 -1

    
    }
    if(alien1.isTouching(bulletGroup2)){
      hp1=hp1 -1

    }
    if(alien2.isTouching(bulletGroup2)){
      hp2=hp2 -1

    }
    if(alien3.isTouching(bulletGroup2)){
      hp3=hp3 -1

    }
    if(alien4.isTouching(bulletGroup2)){
      hp4=hp4 -1

    
    }




    
    if(keyDown("a")){
      bulletGroup.setVelocityXEach(-40)
      Bulletshoot1()

     }
     else if(keyDown("d")){
      bulletGroup2.setVelocityXEach(40)
      Bulletshoot2()

     }
     enemyShoot1()
    enemyShoot2()
     enemyShoot3()
     enemyShoot4()

   
    if(hpp === 14){
      healthBar.addImage("bar", hbimg14)
    }
    if(hpp === 13){
      healthBar.addImage("bar", hbimg13)

    }
    if(hpp === 12){
      healthBar.addImage("bar", hbimg12)

    }
    if(hpp === 11){
      healthBar.addImage("bar",hbimg11)

    }
    if(hpp === 10){
      healthBar.addImage("bar", hbimg10)

    }
    if(hpp === 9){
      healthBar.addImage("bar", hbimg9)

    }
    if(hpp === 8){
      healthBar.addImage("bar", hbimg8)

    }
    if(hpp === 7){
      healthBar.addImage("bar",hbimg7)

    }
    if(hpp === 6){
      healthBar.addImage("bar",hbimg6)

    }
    if(hpp === 5){
      healthBar.addImage("bar",hbimg5)

    }
    if(hpp === 4){
      healthBar.addImage("bar",hbimg4)

    }
    if(hpp === 3){
      healthBar.addImage("bar",hbimg3)

    }
    if(hpp === 2){
      healthBar.addImage("bar",hbimg2)

    }
    if(hpp === 1){
      healthBar.addImage("bar",hbimg1)
    }
    if(hpp === 0){
      healthBar.destroy()
    gameState = 0
    }
   
    
    if(player.isTouching(plasmaGroup1)){
      hpp=hpp -1
    }
    if(player.isTouching(plasmaGroup2)){
      hpp=hpp -1
    }
    if(player.isTouching(plasmaGroup3)){
      hpp=hpp -1
    }
    if(player.isTouching(plasmaGroup4)){
      hpp=hpp -1
    }
  ground.display()
  platform1.display()
  platform2.display()
  platform3.display()
  platform4.display()
  platform5.display()
  platform6.display()
  platform7.display()
  platform8.display()
  platform9.display()
  platform10.display()
  platform11.display()
  platform12.display()

  box1.display()
  box2.display()
  spawner.display()
  player.display()
  drawSprites();
}
if(gameState ===0){
  background(gameover)
  score = 0
  alien1.destroy()
  alien3.destroy()
  alien4.destroy()
  ground.destroy()
  platform1.destroy()
  platform2.destroy()
  platform3.destroy()
  platform4.destroy()
  platform5.destroy()
  platform6.destroy()
  platform7.destroy()
  platform8.destroy()
  platform9.destroy()
  platform10.destroy()
  platform11.destroy()
  platform12.destroy()
  box1.destroy()
  box2.destroy()
  spawner.destroy()
  player.destroy()

  
 
  deathS.play()

}

if(gameState ===3){
  player.destroy()
  background(winner)
  winnerS.play()
}
}

  
  function Bulletshoot1(){
    bullet = createSprite(player.x, player.y - 15, 7,3 )
    bullet.addImage("pew pew", bulletimg)
     
    bullet.scale = 0.05
    bullet.lifetime = 30
    bulletGroup.add(bullet)
   
    bulletS.play()

     
     

     /* if(player.collide(alien1)){
        alien1.velocityX=-10
     
       }
       if(player.collide(alien2)){
         alien2.velocityX=-10
      
        }
        if(player.collide(alien3)){
         alien3.velocityX=+10
      
        }
        if(player.collide(alien4)){
         alien4.velocityX=+10
      
        }*/
        
   
    
   
  }
  function Bulletshoot2(){
    bullet2 = createSprite(player.x, player.y - 15, 7,3 )
    bullet2.addImage("pew pew", bulletimg)
     
    bullet2.scale = 0.05
    bullet2.lifetime = 30
    bulletGroup2.add(bullet2)
   
    bulletS.play()

    

        
   
        
  
    
   
  }
  
  
function spawnAliens(){


   
      if(score===4 ){
     gameState = 3
    }
   
  if(hp1===0){
    alien1.destroy()
    score=score+1
    hp1=hp1-1
    alienDeathS.play()

  }
  if(hp2===0){
    alien2.destroy()
    score=score+1
    hp2=hp2-1
    alienDeathS.play()

  }
  if(hp3===0){
    alien3.destroy()
    score=score+1
    hp3=hp3-1
    alienDeathS.play()

  }
  if(hp4===0){
    alien4.destroy()
    score=score+1
    hp4=hp4-1
    alienDeathS.play()

  }
  
  
    
  
     enemyGroup.add(alien1,alien2,alien3,alien4)
    
    }

    function enemyShoot1(){
       
      if(frameCount%60===0){
      
         plasma1 = createSprite(alien1.x,alien1.y,10,10);
        plasma1.addImage("laser", pimg)
      
        plasma1.scale = 0.1
        plasma1.velocityX=-30
        plasma1.lifetime=150
         plasmaGroup1.add(plasma1)
         plasmaS.play()
      }
     }

     function enemyShoot2(){
       
      if(frameCount%80===0){
      
         plasma2 = createSprite(alien2.x,alien2.y,10,10);
        plasma2.addImage("laser", pimg)
      
        plasma2.scale = 0.1
        plasma2.velocityX=-30
        plasma2.lifetime=100
        plasmaGroup2.add(plasma2)
        plasmaS.play()

      }
 

     }

     function enemyShoot3(){
       
      if(frameCount%60===0){
      
         plasma3 = createSprite(alien3.x,alien3.y,10,10);
        plasma3.addImage("laser", pimg)
      
        plasma3.scale = 0.1
        plasma3.velocityX= 30
        plasma3.lifetime=100
        plasmaGroup3.add(plasma3)
        plasmaS.play()

      }
   


     }

     function enemyShoot4(){
       
      if(frameCount%100===0){
      
         plasma4 = createSprite(alien4.x,alien4.y,10,10);
        plasma4.addImage("laser", pimg)
      
        plasma4.scale = 0.1
        plasma4.velocityX= 30
        plasma4.lifetime=200
        plasmaGroup4.add(plasma4)
        plasmaS.play()

      }
     

      
     }
     