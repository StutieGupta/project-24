class Ground {

    constructor(x,y)
    {
        var options={
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
    };
    
    this.body = Bodies.rect(x,y,800,30,options);
    World.add(world, this.body);
    };
    
    display()
    {
        var pos = this.body.position
        pos.x  = 400
        pos.y = 650
    
        push();
        translate(pos.x, pos.y);
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        };
    };