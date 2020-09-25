class User {
    constructor(container,width,height,x,y) {
        this.img = document.createElement("img");
        this.img.src = "../shooting/plane.png";
        this.img.style.width = width + "px";
        this.img.style.height = height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = x + "px";
        this.img.style.top = y + "px";

        container.appendChild(this.img);
    }

    move() {

    }
}