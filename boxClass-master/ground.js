class Ground{
constructor(x,y,width,height){
    var Groundpro={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,Groundpro);
    this.width=width;
    this.height=height;

   World.add(world,this.body);
}

display(){
 
    var pos=this.body.position;
    push();
    rectMode(CENTER);
    fill("green")
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    
}





}
