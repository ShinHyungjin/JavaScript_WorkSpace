class Bullet {
    constructor(container,width,height,x,y, velX) {
        this.velX = velX; //속도
        this.y = y;
        this.x = x; //총알 left
        this.img = document.createElement("img");
        this.img.src = "../shooting/ball.png";
        this.img.style.width = width + "px";
        this.img.style.height = height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        container.appendChild(this.img);

    }
    move() {
        this.x += this.velX;
        this.img.style.left = this.x + "px";
    }
}

