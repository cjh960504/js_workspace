class Enemy{
    constructor(src, x, y, width, heigth, velX, velY){
        this.img = document.createElement("img");
        this.x = x;
        this.y= y;
        this.width = width;
        this.heigth = heigth;
        this.velX = velX;
        this.velY = velY;
        this.src=src;

        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left= this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.heigth + "px";

        wrapper.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;
        this.y +=this.velY;
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}