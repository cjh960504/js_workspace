class Enemy extends GameObject{
    constructor(container,src, width, height, x, y, velX, velY){
        super(container,src, width, height, x, y, velX, velY);// 부모를 먼저 초기화..
        
    }

    // 아래의 메서드는 주인공만의 행동방법이므로,,, 이 클래스 안에서 정의하면 됨
    tick(){
        this.x=this.x -  this.velX; //기존 x위치값에 속도를 더해나간다.
    }
    
    render(){
        this.img.style.left = this.x+"px";
    }
}