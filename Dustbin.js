class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png");
        World.add(world, this.body);
    }

    display() {
        
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 100, 100, this.width, this.height);
        pop();
    }
}