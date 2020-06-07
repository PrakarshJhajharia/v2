class basey{
    constructor(x, y, width, height, angle) {
         var option = {
            
            'restitution':0.0001,
            'friction':10000.0,
            'density':2.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      destroy(){
        World.remove(world, this.body)
      }


}