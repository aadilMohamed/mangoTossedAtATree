class Mango{
    constructor(x,y,radius){
    var options = {
        friction:-5,
        density:1,
        restitution:1
        }
    this.radius = radius;
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body)
    }
    display(){
      push();
      ellipseMode(RADIUS);
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      this.image = loadImage("sprites/mango.png")
      ellipse(0,0,this.radius,this.radius);
      pop();  
    }
    }