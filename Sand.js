class Sand {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.5,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('green')
      fill('white')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
