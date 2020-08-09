class Boy
{
    constructor(x,y)
    {
        var options =
        {
            'isStatic': true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.image = loadImage("boy.png")
    }

        display()
        {
          imageMode(CENTER);
          image(this.image, 300, 630, 200, 300);
        }
}