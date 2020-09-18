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
    return console.log(Math.floor((Math.random() * ((n2+1) - n1)) + n1));
}