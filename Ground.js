class Ground {

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
push();
translate(num.x, num.y);
    rectMode (CENTER);
    fill("blue");
    rect(0,0,this.width,this.height);
    pop();
}
}