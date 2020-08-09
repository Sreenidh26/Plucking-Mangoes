class Stone
{
   constructor(x,y)
   {
      var options =
      {
        'isStatic': false,
        'restitution':0,
        'friction':1.0,
        'density':2
      }
       
      this.body = Bodies.circle(x, y, 10, options);
      this.width = 10;
      this.height = 10;
      this.image = loadImage("stone.png")
      World.add(world,this.body);
   }

   display()
   {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, 60, 60);
    pop();
   }
}