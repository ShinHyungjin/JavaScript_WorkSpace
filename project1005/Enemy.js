class Enemy {
    constructor(src, x, y, width, height, velx, vely) {
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velx = velx;
        this.vely = vely


        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        wrapper.appendChild(this.img);

    }
    tick() {
        this.y += this.vely;
    }
    render() {
        this.img.style.top = this.y+"px";
    }
}