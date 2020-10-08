/*
모든~~인종을 아우를 수 있는 최상위 객체인 사람을 정의한다.
상위객체일수록 보편적인 특징을 갖고 있다..(우리의 현실과 동일)
*/ 
class Person{
    constructor(eyes, arm){
        this.eyes=eyes;
        this.arm=arm;
        console.log("I am a super class(Person)");
        console.log("my eye %d, arm %d",this.eyes, this.arm);
    }

    // 행동은 함수로 표현한다. (즉, 메서드)
    walk(){
        console.log("걷는 중 ..");
    }

    speak(){
        console.log("말하는 중 ..");
    }
}