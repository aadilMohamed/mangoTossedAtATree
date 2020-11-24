class Boy{
constructor(x,y,width,height) {
    var options = {
      isStatic : true
    }
    this.image = loadImage("sprites/boy.png")
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
display(){
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
    }
  };