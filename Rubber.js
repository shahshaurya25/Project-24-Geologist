class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		restitution:0.8,
		friction:5,
		density:1,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			var angle = this.body.angle;
			push();
			translate(rubberpos.x, rubberpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS);
			ellipse(0,0, (this.r-20)/2, (this.r-20)/2);
			pop();
	}

}