class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    var a = random(0,4)
    
   console.log(a)
    if(a <= 1){
    this.image = loadImage("sprites/pig1.png");
    }
    else if(a <= 2){
      this.image = loadImage("sprites/pig2.png");
      }
      else if(a <= 3){
        this.image = loadImage("sprites/pig3.png");
        }
        else if(a <= 4){
          this.image = loadImage("sprites/pig4.png");
          }
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
    
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     World.remove(world, this.body);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};