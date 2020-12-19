class Dustbin {

    constructor(x,y)
    {
        var options={
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
    };
    
    this.body = Bodies.rect(x,y,50,70,options);
    World.add(world, this.body);
    };
    
    display()
    {
        var pos = this.body.position
        pos.x  = 500
        pos.y = 600
    
        push();
        translate(pos.x, pos.y);
        fill("black");
        rectMode(CENTER);
        circle(0,0,this.width, this.height);
        pop();
        };
    };