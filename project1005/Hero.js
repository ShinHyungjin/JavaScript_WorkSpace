class Hero {
    constructor(x, y, width, height, velx, vely) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velx = velx;
        this.vely = vely

        this.img = document.createElement("img");
        this.img.src = "../shooting/hero.png";
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        wrapper.appendChild(this.img);
    }

    tick() {
        this.x += this.velx;
        this.y += this.vely;
    }
    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }

}