const abc = 'ABC'
// 메모리 참조하는 그릇(변수)

console.log(`Hello ${abc}`); // ${} 보간


const a =0.1;
const b =0.2;
console.log(a+b); //부동소수점 오류


console.log(typeof(a+b).toFixed(1))

if(false){
  console.log('show?') // if조건문에서 ()가 항상 true여야만 안의 내용 실행
}


let ab;

console.log(ab); // undefined 값이 지정되어있지 않음

ab = '?' // = 할당 연산자

console.log(ab);


const user = {
  name: 'won'
}

console.log(user.name);
console.log(user.age);


const arr = [1,2,'2']
arr.forEach(item=>{
  if(item === 2){
    console.log(item) //undefined!, 2
  }
})

const obj = {
  a: '1',
  b: null,
  c: 3,
  a: '123', // 키는 중복될 수 없음. 새로운 값을 넣으면 원래 있던 값은 사라짐
  'd22221#@!': 112233, 
  1: function(){
    console.log('hello')
  },

  f(){
    console.log('hi, f')
  },

  arrow: ()=>{
    console.log('?')
  }
}

console.log(obj)


const aaa = 123
const bbb = '123'
console.log(aaa == bbb) //true
console.log(aaa === bbb) //false

