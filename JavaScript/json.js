
var name = "홍길동"
var age = "23"

// json
var information = {
    name: '홍길동',
    age: 23 
}

//json 출력
// json 포멧 {} 묶은거
// Key : 중복 X
//value : 값(중복 가능, 데이터 타입)
console.log(information.age);



//json을 호출할 때는 key 값을 사용
//json 값 호출
console.log(dwAcademy.students_count);
//json 배열 호출
console.log(dwAcademy.students[1]);

//영화 종류에 따른 출연진
var 영화 = {
    배급사 : "CJ",
    영화이름 : [ {
    name : "스파이더맨 노 웨이 홈",
    actor : ["톰홀랜드", "젠데이아"],
    time : 148
    },
    {
        name : '인터스텔라',
        actor : ['앤 해서웨이','매슈 매커너히'],
        time : 169
    }
 ]
}

var emp = {
empno : 3450,
ename : 'SMITH',
sal : 3400,
dname : [
{
    부서이름 : '개발',
    부서인원수 : 5,
    부서장 : '홍길동'
}
,{
부서이름 : '영업',
부서인원수 : 13,
부서장 : '박길동'
}],
hiredate : '21-12-31',
상사이름 : ['BRIAN','KING'],
}