/*
    충돌체크를 학습하기 위한 박스 객체 정의
*/ 
class Box{
    constructor(bg, x, y){
        //객체가 보유한 변수------------------------- 
        this.bg = bg;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.div = document.createElement("div");
        //-----------------------------------------------
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        
        this.div.style.background=this.bg;
        
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.color="white"; //글씨 색상은 흰색
        document.body.appendChild(this.div);

    }
}