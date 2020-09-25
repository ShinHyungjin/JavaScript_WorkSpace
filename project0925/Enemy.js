class Enemy {
    constructor(container,width,height,x,y,num) {
        this.img = document.createElement("img");
        this.img.src = "../shooting/e"+(num)+".png";
        this.img.style.width = width + "px";
        this.img.style.height = height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = x + "px";
        this.img.style.top = y + "px";

        container.appendChild(this.img);
    }
    move() {
        this.img.style.left = parseFloat(this.img.style.left) + 0.02 * (0 - parseFloat(this.img.style.left)) + "px";
    }
}