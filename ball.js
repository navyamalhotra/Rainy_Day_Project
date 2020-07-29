class inviBall {
    constructor() {
       var options = {
         "restitution":0.3,
         "friction":1,
         "density":0.1
         
       } 
       this.r = 5;
       this.body = Bodies.circle(random(20,500),-50,this.r,options);
       this.x = 200;
       this.y = 200;
       World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}