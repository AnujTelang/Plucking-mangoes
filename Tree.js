class tree{
	constructor(x,y,width, height)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.image=loadImage("tree.png")
		this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
		World.add(world, this.body);
	}

	display()
	{
		var TreePos=this.body.position;	
		push()
		translate(TreePos.x, TreePos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		rectMode(CENTER);
		image(this.image, 0,0 ,this.width, this.height)
		pop()
 }
}