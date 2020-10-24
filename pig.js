class Pig{
    constructor(x,y)
    {
        var options = {
            restitution:0.5,
            friction:2,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body)
    }

    display()
    {
        var angle = this.body.angle;
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate (angle);
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ()
         
    }
}