class Polygon{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(50, 200, 20,20);
        this.image=loadImage("polygon.png");
        this.width=width;
        this.height=height;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
			  image(this.image,0,0,30,30);
        pop();
      }
}
