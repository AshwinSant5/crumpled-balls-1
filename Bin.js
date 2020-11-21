class Bin {

    constructor(x,y,width,height) {
      
        var option = {
           isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height, option);
        World.add (world, this.body);
        this.width = width;
        this.height = height;
    }

display() {
    var num = this.body.position;
    rectMode (CENTER);
    fill("red");
    rect(num.x,num.y,this.width,this.height);
}
}