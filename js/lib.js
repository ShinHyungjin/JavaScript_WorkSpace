/* a-b의 절대값 */
function getAbs(a,b) {
    return Math.abs(a-b);
}
/* n보다 작거나 같은 정수 */
function getRandom(n) {
    var r = Math.random();
    return Math.floor((n+1)*r);
}
/* 숫자에 0을 붙인 날짜 처리 */
function getZeroDate(n) {
    if(n<10)
      (n = "0"+n);
    return n;
}
function getNonZeroDate(n) {
    if(n>=10)
        n=n;
    return n;
}
/* 랜덤값 지정범위내로 출력하기 : Math.random () * (최대값 - 최소값)  + 최소값 
    Math.ceil 또는 floor에 따라 최대값+1 이나 최소값+1이 됨
*/
function getRandomBetween(n1,n2) {
    return Math.floor((Math.random() * ((n2+1) - n1)) + n1);
}
/* 충돌판단 함수
me : 판단대상1
target : 판단대상2
 

*/
function hitTest(me, target , nextX , nextY) {
    //두물체간 충돌 여부 판단 
    me_x= parseInt(me.div.style.left);
    me_y= parseInt(me.div.style.top);
    me_width=parseInt(me.div.style.width);
    me_height=parseInt(me.div.style.height);
   
    target_x= parseInt(target.div.style.left);
    target_y= parseInt(target.div.style.top);
    target_width=parseInt(target.div.style.width);
    target_height=parseInt(target.div.style.height);
   
    nextX=parseInt(nextX);
    nextY=parseInt(nextY);
   
    var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
    var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
    var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
    var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
    
    return (result1 || result2) && (result3 || result4);
}
    
    /*-----------------------------------------------
아래의 함수는, 두 물체간 충돌여부를 판단해주는 함수이다.
box1 : 판단 대상 요소1 ex) div 
box2 : 판단 대상 요소2 ex) div
-----------------------------------------------*/
function collisionCheck(box1, box2) {
    //두물체간 충돌 여부 판단 
    var x1=parseInt(box1.style.left);
    var width1=parseInt(box1.style.width);
    var y1=parseInt(box1.style.top);
    var height1=parseInt(box1.style.height);
    
    var x2=parseInt(box2.style.left);
    var width2=parseInt(box2.style.width);
    var y2=parseInt(box2.style.top);
    var height2=parseInt(box2.style.height);


    /*
    조건1)x축 충돌: me의 x축+width1를 더한값은 target의 x2축 이상일 경우
    조건2)y축 충돌: me의 y축+height1를 더한 값이  target의 y2축 이상일 경우
    조건3)me의  y1값은 target의  y2에 height2를 더한값보다 같거나 작아야 함
    조건4)me의  x1값은 target의  x2에 width2를 더한값보다 같거나 작아야 함
    */
    var result = (x1+width1 >= parseInt(box2.style.left))
    && (y1+height1)>=parseInt(box2.style.top) 
    && y1 <=(y2+height2) 
    && x1 <=(x2+width2)  

   return result;
}

function getLastDate(yy,mm) {
    var d = new Date();
    d.setFullYear(yy);
    d.setMonth(mm+1);
    d.setDate(0);
    return d.getDate();
}