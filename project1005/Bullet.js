/*총알을 정의한다.*/
class Bullet{

    // 총알이 태어날 때 부여할 속성들을 생성자에서 처리..
    constructor(src, x, y, width, height, velX, velY ){
        this.img;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.src = src;

        this.img = document.createElement("img");
        this.img.src=this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x  + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height+ "px";

         // 화면에 부착
        wrapper.appendChild(this.img);
    }
    tick(){
        // 물리량 조정
        this.y += this.velY;

        // 총알이 한걸음, 한걸음 진행할 때마다 배열에 존재하는 모든 적군을 대상으로
        // 충돌했는지 여부를 판단할꺼임..
        for(var i=0; i<enemyArray.length;i++){
            if(collisionCheck(this.img, enemyArray[i].img)){
                // 너죽(적군배열에서 요소 삭제 splice(index, 갯수), 화면에서도 삭제 removeChild)
                wrapper.removeChild(enemyArray[i].img);
                enemyArray.splice(i, 1);
                
                // 나죽(총알배열에서 요소 삭제 splice(index, 갯수), 화면에서도 삭제 removeChild)
                wrapper.removeChild(this.img);
                // 총알은 자기 자신에 대해서 몇 번쨰인지 알수없음
                // 따라서, indexOf를 사용하여 현재 총알의 인스턴스가
                // 배열의 몇번째에 존재하는지 알아냄
                bulletArray.splice(bulletArray.indexOf(this), 1); 
                
            }
        }
    }
    render(){
        // 변화된 물리량을 화면에 표시한다.(그래픽 처리)
        this.img.style.top = this.y + "px";
    }
} 