class Dustbin
{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)

        this.x = x
        this.y = y
        this.height = h
        this.width = w

        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position

        fill("white")

        rectMode(CENTER)

        rect(pos.x, pos.y, this.width, this.height);


    }
}