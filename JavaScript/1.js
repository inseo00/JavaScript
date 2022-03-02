// Java에서는 Json을 Map이라고 함
//Json : 데이터 형식(단순히 데이터를 표시하는 표현 방법)
var information = {
"name" : "in seo",
"age" : 20,
"address" : "대전 충청로 136",
"ismarri" : false
} 
//json은 key와 value로 구성
//주의형 !!
  // 1. key는 중복 불가능 , value는 중복 가능
  // 2. value는 정수형(int, double), 문자형(string) 
  //    boolean형, 배열형(erray), null
  // 3. 중괄호로 감싼다.

  console.log(information)
  console.log(information.age)

  var age = information.age
  if(age >= 30){
      console.log("계란 한 판")
  }else{
      console.log("20대")
  };


  // 상수
  const PI = 3.14
  //짝수 배열 호출
  var array = [1,2,3,4,5,10]
  //배열 0번째 값 호출
  console.log(array[0])
  //배열 길이
  var len = array.length 

const EVEN =2;
  for(var i=0; i<len; i++){
var value = array[i];
if((value%EVEN) == 0){
    console.log(value);
}
}

//최댓값 
var max = 0;
for(var i=0; i<len; i++){
    if(max < array[i]){
        max = array[i];
    }
}
console.log("최댓값은 ===> " +max);


