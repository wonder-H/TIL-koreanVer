# TIL 2022-04-18

기존 복습 + 추가 공부

<hr>
<br>

## JS 데이터(자료형, Data Type)

<br>

1. 문자(String)
2. 숫자(Number)
3. 불린(boolean)
4. null
5. undefined
6. 심볼(Symbol) // 크게 중요는 x
7. 큰정수(BigInt) 크기가 큰 정수 // 크게 중요는 x
8. 배열(Array)
9. 객체(Object)
10. 함수(Function)

<br>

- 원시형, 참조형을 구분할 것!
- 데이터의 불변성, 메모리 사용 때문에 개념구분 반드시 필요

<hr>
<br>

## 참조형  

<br>

1. 배열
2. 객체
3. 함수

<hr>
<br>

## 원시형

<br>

1. 문자
2. 숫자
3. 불린
4. 언디파인드
5. 널
6. 심볼

<hr>
<br>

### 문자 데이터

<br>

항상 따옴표로 묶여 있어야 한다

<br>

```js
"text"
'text'
`text` // ${} '보간'처리를 할 때만!

const num = 123;
console.log(`hello ${num}`);
```

<hr>
<br>

### 숫자 데이터

<br>

```js
1
2
3
NaN

//Nan : Not-A-Number 
// 숫자 데이터 / 숫자로 표시가 불가능할 때, 다른 데이터가 연산될 때
```

<hr>
<br>

### 불린(boolean)

<br>

```js
true
false
```

<hr>
<br>

### undefined

<br>

- 빈 값(암시적)
- 해당 변수에 들어가있는 값이 없음
- 값이 지정되진 않았으나 그 변수는 있음

<hr>
<br>

### null

<br>

- 빈 값(명시적)
- 이 변수에는 값이 없다는 것을 사용자가 이미 표현해둔 것

<hr>
<br>

### 심볼

<br>

- 유일한 식별자(ID) 데이터 이름을 만들 때 사용

<br>

```js
const s = Symbol('symbol!') //변수 s를 알아야만 

const user ={
  name: 'won',
  [s]: 81
}
console.log(user.name)
console.log(user.s) //접근 불가
console.log(user[s]) //접근 불가
```

<hr>
<br>

### 큰 정수 BigInt

<br>

```js
console.log(1n+2n) // 3n
console.log(Number(1n + 2n)) // 3 Number로 형변환
```

<hr>
<br>

### 배열

<br>

```js
const a = [1,2,3] // 값은 아이템item / 요소Element이라 함 
console.log(a) // (3) [1,2,3]  -> a배열 안 3개가 있다 

console.log(a[2]) // 2번 인덱스를 조회(인덱싱)한 값 -> 3

//배열은 데이터의 나열
//배열의 생성 방식
const item = new Array('apple', 'banana') 
const item = ['a', 'b' ] // -> 리터럴 방식: 기호를 통해 데이터를 생성하는 것
```

<hr>
<br>

### 객체

<br>

```js
//객체 리터럴 생성
const object = { 키 : '값' }

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

console.log(obj) // {a: '123', b: null, c: 3}
console.log(obj.a) // 점(dot) 표기법
console.log(obj['a']) // 괄호(bracket) 표기법
console.log(obj['d22221#@!']) // 특수기호같은 애들이 있으면 .으로 조회불가


console.log(obj) //실행 결과
//{a: '123', b: null, c: 3, d22221#@!: 112233, 1: ƒ, f: ƒ, …}

//상세값
// 1: ƒ ()
// a: "123"
// arrow: ()=>{ console.log('?') }
// b: null
// c: 3
// d22221#@!: 112233
// f: ƒ f()
// [[Prototype]]: Object

```

<hr>
<br>

### 형변환

<br>

데이터 타입을 변환하는 것

- `==` : 동등한지 비교
- `===` : 일치하는지 비교

- 메모리 주소를 비교한다
- 주소가 다르면 false, 주소가 같으면 true

<br>

```js
const a = 123 //숫자 데이터
const b = '123' //문자 데이터
console.log(a == b) //true -> ==사용하면 자동으로 형변환해서 비교함. 쓰지말자
console.log(a === b) //false


const num = 1
const bool = true

console.log(num == bool) // true 
console.log(num === bool) // false


const a = {}
const b = {}

const c = 1;
const d = 1;

console.log(a === b) // false 객체같은 참조형은 생긴게 같아도 실제 메모리 주소는 다를 수 있음
console.log(c === d )//원시형은 생긴게 실제 똑같으면 100% 같은 메모리주소


if(0){ //값이 참이면 실행
  console.log('yep') 
}
console.log(false === 0) // false. 0은 완전 false는 아닌데 false 비슷한 값...falsy / truthy 개념
// 


if({}){
  console.log('true?')
}
// {} 같은애들은 if안에 들어가지므로 truthy

```

<hr>
<br>

#### falsy인 녀석들

<br>

1. `false`
2. `null`
3. `undefined`
4. `0`
5. `-0`
6. `NaN`
7. `0n`

<br>

- `' '` 따옴표 안에 공백이 있어도 문자로 구분하니 주의할 것

<hr>
<br>

### 자료형 확인하는 방법

<br>

1. `typeof 데이터`
2. `데이터.constructor`
3. `Object.prototype.toString.call(데이터)`

<br>

> 자료형이 필요한 상황(데이터 다룰 때)
서버에서 온 값을 if값으로 타입과 비교해야 하는 경우, 타입이 같으면 데이터 처리하고, 다르면 에러띄우기!

<hr>
<br>

#### `typeof 데이터`

<br>

```js
typeof(1) // number
```

- Null과 배열은 typeof로 알아낼 수 없으니 확인하자

<br>

#### `데이터.constructor`

<br>

```js
console.log([].constructor === Array) //배열같은 경우 요렇게 확인가능
console.log(Array.isArray([])) //요것도 배열 확인법
```

<br>

- Null/undefined는 확인 안됨

<br>

#### `Object.prototype.toString.call(데이터)`

<br>

```js
Object.prototype.toString.call(데이터)
```

<br>

- 콜 메소드로 바인딩을 확인하면 모든 자료형을 확인할 수 있다!

<br>

```js

function checkType(data){
  return Object.prototype.toString.call(data);
}

console.log(checkType([])) // [object Array] 배열이라고 나옴
console.log(checkType(null)) // [object Null] Null이라고 나옴
console.log(checkType(undefined)) // [object Undefined] undefined 나오긴 하는데.. 문자처럼 되는거라 slice메소드를 이용해 값을 얻어야 함

//========================================================================


function checkType(data){
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(undefined)) // undefined데이터형으로 제대로 나온다! 
```

- 결론: 평소에는 typeof를 주로쓰고, 확인이 어렵다면 저 함수를 사용해보자

<br>
<hr>
<br>

### 인수(인자)와 매개변수

<br>

> 인수/인자

- 실제 값이 있는 데이터. argument

> 매개변수 

- 데이터의 매개체 역할을 하는 변수. parameter

<br>

- 인수/인자(어떤 값)가 매개변수 안에 들어가서 함수가 실행됨!!
- 데이터 흐름은 매우매우매우 중요하니 꼭 기억하자

<hr>
<br>


### 변수와 선언

<br>

- 선언하는 키워드(const let var)로 변수를 만들기 시작할 수 있음
- 변수는 어떤 메모리값을 참조하는 그릇(링크같은 것)

<br>


### 변수의 종류

`const(상수)` 
- 유효범위: 블록 레벨
- 재할당: X
    > 다른 프로그램언어와 비교해서 완전한 상수는 아니지만...  
    > 어쨌든 여기선 독보적인 존재
- 중복선언: X
- 호이스팅: X
- 전역등록: X

<br>

`let(변수)` 
- 유효범위: 블록 레벨
- 재할당: O
- 중복선언: X
- 호이스팅: X
- 전역등록: X

<br>

`var` 
- 유효범위: 함수 레벨
- 재할당: O
- 중복선언: O
- 호이스팅: O
- 전역등록: O

<br>

- 기억해야할 것들

<br>

    - 유효범위(scope)
    - 재할당
    - 중복 선언여부
    - 호이스팅(hoisting) var에서만 발생, 안쓰면 되니 문제없음.. 그치만 함수 영역에서 또 나오니 중요한 개념
    - 전역등록 : 전역(global) 선언시 전역 객체(`window`)의 속성으로 등록


<br>

```js
const a = 123
//a라는 주소로 123이라는 값(메모리)을 저장
```

<br>

```js
function abc(){
  if(true){
    console.log(123)
  }
}
abc(); // 123출력!

//===================================================== 

function abc(){
  if(true){
    var a = 123
    console.log(a) //함수 + if안
  }
  console.log(a) //함수안
}
abc(); // 123출력!
//var는 함수레벨이다


function abc(){
  if(true){
    let a = 123
    console.log(a) //함수 + if안 // 123출력
  }
  console.log(a) //함수안 // 출력안됨(에러!)
}
abc(); // 123 나오고 이후는 에러!
//변수가 지정된 가장 가까운 블럭에 있는 곳에서만 유효한 범위

//===================================================== 

function abc(){
  if(true){
    const a = 123
    console.log(a) //함수 + if안 // 123출력
  }
  console.log(a) //함수안 // 출력안됨(에러!)
}
abc(); // 123 나오고 이후는 에러!


//===================================================== 

function abc(a){
  if(true){
    const a = 123
    console.log(a) //함수 + if안 // 123출력
  }
  console.log(a) //함수안 // 출력안됨(에러!)
}
abc(); // 123 나오고 이후는 에러!

//위에서부터 아래로 가면서 진행되어야 하는데..
// var는 undefined로 해줌. 선언은 밑에있고 실행은 위에서 하면, 실행하는 함수쪽의 최상위로 선언값을 끌어올리는 현상. 
```

<br>

- 결론

1. 데이터값이 후에 100퍼 변할 애라면 let 
2. 애매하거나 후에 변할 애가 아니라면 const
3. const썼다가 문제생기면 그때 let으로 바꿔서 쓰면 초보는 선방할 수 있다!

<hr>
<br>

### 함수

<br>

- 함수는 명령들을 감싸는 녀석
- 반복적인 재사용을 하도록 도와주는 것!

```js
//사용법
함수(매개변수){
  명령
}
```

<br>

1. 함수 선언
2. 인수(데이터)를 매개변수로 받는지 설정한다
3. 함수 사용하면 안의 명령을 실행하거나, return이 있으면 값을 반환해줌

<hr>
<br>

#### 함수의 선언과 표현

<br>

- 선언: 호이스팅 O
- 표현: 호이스팅 X

```js
function abc(){ //함수 선언

}
```

<br>

```js
const abc = function (){

} // 익명함수
//익명함수는 무조건 함수 표현이다! 호이스팅 문제가 생길 수 있음
```

<br>

```js
const abc ={
  fn: function(){ //함수 표현. 익명함수임.
    console.log('fn')
  }
}
abc.fn()

//===================================================== 


//위에서 작동됨
hi()

//아래에서 실행
function hi(){
  console.log('hi')
}
```


