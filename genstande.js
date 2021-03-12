class genstande {



  constructor (position, speed, radius, color) {
    this.position = position;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
  }

  draw () {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0, 2 * Math.PI
    );
    context.fillStyle = this.color;
    context.fill();

  }

    movement() {
        console.log(this.position);


            this.position.x += this.speed.x;
            
        if (
            this.position.x + this.radius > 800 ||this.position.x - this.radius < 0){
            this.speed.x *= -1;
        } 

            this.position.y += this.speed.y;

        if (
            this.position.y - this.radius < 0){
            this.speed.y *= -1;
        }

    }

    collide(other) {
        let distance = Math.abs(
            Math.sqrt(
                Math.pow(this.position.x - other.position.x, 2)
                + Math.pow(this.position.y - other.position.y, 2)
            )
        );

        let threshold = this.radius + other.radius;
        if (distance <= threshold) {
            //alert("COLLISION! " +  distance + " " + threshold);
            this.speed.x = this.speed.x * -1;
            this.speed.y = this.speed.y * -1;
            other.speed.x = other.speed.x * -1;
            other.speed.y = other.speed.y * -1;
        }
    }

}
