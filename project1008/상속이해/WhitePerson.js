// 백인을 정의한다!
// WhitePerson 클래스는 Person 클래스의 코드까지 사용할 수 있도록 확장하겠다..
// = 상속
class WhitePerson extends Person{
    // this : 나를 가리키는 예약어
    // super : 부모를 가리키는 예약어
    constructor(eyes, arm){
        // this.name="nigro"; 
        // 에러 발생이유? 부모보다 시급한 초기화는 없기 때문에
        // 부모의 탄생이 최우선시 된다.. 당연) 부모가 존재해야 자식이 존재하니까..
        super(eyes, arm); //부모의 constructor()
        this.name="nigro"; //정상수행
        // 부모 생성자 호출 이유? 생물학적으로도 당연하다. 
        // 자식의 초기화보다 최우선 시 해야하는 
        // 작업은 부모의 존재 즉, 초기화이므로....
        
        // 상태는 변수로 표현한다. (즉, 속성property)
        this.color="white";
        console.log("I am a super subClass(WhitePerson)");
    }
}