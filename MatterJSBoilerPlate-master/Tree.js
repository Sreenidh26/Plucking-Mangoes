class Tree
{
    constructor(x,y,width,height)
    {
        var options =
        {
            'isStatic': true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.image = loadImage("tree.png");
        

    }
        display()
        {
          imageMode(CENTER);
          image(this.image, 1250, 400, 500, 600);
        }
}