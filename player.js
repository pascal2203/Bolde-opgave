class player {
    /*
     To do list player
     Få player til at kunne styres med pil taster eller wasd
     Få player til at kollidere med genstande
     Få player til at have liv og et point system
     Evt give player en karakter istedet for en bold eller firkant

*/

    constructor(position, speed, lenght, height, color) {
        this.position = position;
        this.speed = speed;
        this.lenght = lenght;
        this.height = height;
        this.color = color;
    }

    // draws a circle with correct position, color and radius
    draw() {
        let context = canvas.getContext("2d");
        context.beginPath();
        context.clearRect(
            this.position.x,
            this.position.y,
            this.lenght,
            this.height,
        );
        context.fillStyle = this.color;
        this.Color(context);

    }

    Color(context) {
        context.fillRect(this.position.x, this.position.y, this.lenght, this.height);
    }

    spillercollide(other) {
        let distance = Math.abs(
            Math.sqrt(
                Math.pow(this.position.x - other.position.x, 2)
                + Math.pow(this.position.y - other.position.y, 2)
            )
        );

        let threshold = this.height + other.radius;
        if (distance <= threshold) {
            //alert("COLLISION! " +  distance + " " + threshold);
            other.speed.x = other.speed.x * -1;
            other.speed.y = other.speed.y * -1;
        }
    }

	





}
