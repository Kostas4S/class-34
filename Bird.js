class Bird {
  constructor(x,y){
  var options ={
    restitution: 1.0,
    

  } 

  this.body=Bodies.circle(x,y,60,options) 
  World.add(world,this.body)
    
    
  }

  display() {
    fill("green")
    ellipse(this.body.position.x,this.body.position.y,60)
  }
}
