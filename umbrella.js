class umbrella {
    constructor() {
        var options = {
            "isStatic":true
        }
        this.r = 300;
        this.body = Bodies.circle(255,440,this.r/2,options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}