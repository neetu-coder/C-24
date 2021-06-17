class Bird{

    constructor(x,y){
var birdOption = {
    'restitution':0.4,
    'friction':1.0,
    'density':1.5
}
  this.body = Bodies.rectangle(x,y,20,20,birdOption)
  this.width = 20
  this.height = 20       
 World.add(world,this.body)
 
    }

    display(){
        var pos =this.body.position;
        pos.x = mouseX
        pos.y = mouseY
        var angle= this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER);
        fill("red");
        strokeWeight(1)
        stroke ("yellow")
        rect(0, 0, this.width, this.height);
        pop();   
    }

}