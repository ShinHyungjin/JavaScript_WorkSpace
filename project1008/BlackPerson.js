/*백인을 정의한다!!
2015 ECMA
*/
class BlackPerson extends Person{
    constructor(){
        super();    //부모 클래스의 생성자를 먼저 호출해야 오류x
        this.color="black";
    }
    walk() {
        console.log("흑인 걷다");
    }
}