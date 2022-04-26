# TIL 2022-04-26


<br>

## TIL 내용 정리


### `Array` 

```js
//reduce()
//콜백 1개 들어감
//2번째 매개변수에 원하는 초기값을 넣어야함
//콜백이 반복 실행되면서 값을 *누적*시킬 수 있다는 것이 핵심!
//꽤나 유용한 녀석

const arr = [1,2,3,4,5,6,10,100]

const sum = arr.reduce((acc,cur)=>{ //acc -> 콜백 반복 후 얻은 아이템 / cur -> 첫 번째 아이템
    return acc + cur // 최종 결과는 return으로 반환 -> sum이 됨
  }, 0) //초기값은 0

console.log(sum) // 131

const sum = arr.reduce((acc,cur,inx)=> acc+cur,0) // sum = 131


//예시
const data = ['a','b','c','d','e']

const res = data.reduce((acc, name)=> Object.assign(acc,{
  [name] (newValue){ //반복될 때마다 name의 이름을 가진 메소드를 만드는 것
      this.setItem(name,newValue) 
    }
  }), {}) //초기값으로 빈 배열을 넣음

console.log(res) // {a: ƒ, b: ƒ, c: ƒ, d: ƒ, e: ƒ}
// a: ƒ [name](newValue)
// b: ƒ [name](newValue)
// c: ƒ [name](newValue)
// d: ƒ [name](newValue)
// e: ƒ [name](newValue)


//==================================================================


//reverse()
//배열 순서를 거꾸로 뒤집는 메소드
//원본 자체도 바꾸는 파괴적 방식



//slice()
//문자 객체의 메소드와 같음
//2번째 인수는 그 값의 전까지 자른다는 의미!
//원하는 부분을 잘라서 값으로 얻을 수 있음
//원본 배열은 바꾸지 않는 비파괴적 유형



//some()
//콜백 1개 받음
//콜백함수 안의 조건을 1개라도 통과하는 것이 있으면 true, 모두 통과하지 못하면 false
//조건을 모두 통과해야 true해주는 every()메소드와 차이가 있다



//splice()
//배열의 값을 추가/삭제/수정 가능
//원본 자체도 바꾸는 파괴적 방식
//제거된 값을 배열로 반환해준다

const arr = ['a','b','c','d']
//.splice(인덱스, 삭제개수, 추가할값)
console.log(arr.splice(2, 1)) //2번 인덱스(c)를 1개 제거 후, 제거된 값을 배열로 반환
console.log(arr.splice(2, 2, 'x')) //2번 인덱스(c)부터 2개 제거 후, 제거된 값 + 추가할값('x')을 배열로 반환
console.log(arr.splice(2,0,'x'))//2번 인덱스(c)부터, 제거X , c뒤에 'x' 넣어주기 (제거값이 없으면 반환배열 없고 원본배열에 추가만!)

```


### `Object` 

- 객체 정의 방법

1. new 키워드를 이용해 생성자 함수로 객체 생성하기 
2. 객체 리터럴 `{}`로 직접 객체의 속성과 값을 명시해 생성하기


> * 객체를 리터럴 방식으로 생성 시, 리터럴이 있는 곳에서 그 객체가 생성된다
> * 객체를 정의함과 동시에 인스턴스를 자동으로 만드는 것
> * 때문에 인스턴스를 만드는 구문을 따로 작성하지 않아도 된다는 장점이 있음

<br>

- 객체 안의 속성이 함수면 __메소드__

<br>

```js
//assign(복사할객체, 붙여넣기할객체)
//정적 메소드
//객체안 녀석들을 복사 후, 다른 객체에 붙여넣고 합쳐진객체를 반환

//1
const userA={
  name: 'won',
  age: 11
}
userA.name // get 
const userB={}

Object.assign(userB, userA) // {name: 'won', age: 11}
userA.assign() // 이렇게 사용할 수 없음. 


//2
const userC = {
  name: 'joe',
  isValid: true
}
const userD = {}

Object.assign(userD, userA, userC) // userD에 userA, userC값을 넣기


//3
const userB={
  name: 'ko'
}
const userA={
  name: 'won',
  age: 11
  }
const userC={
  name: 'joe',
  isValid: true
}
const res = Object.assign({}, userB, userA, userC) //userB, userA, userC의 값을 {}에 넣고 res가 됨
console.log(res) // {name: 'joe', age: 11, isValid: true}
//리터럴방식으로 객체생성해서 바로 그 값을 res에 얻을 수 있다

// const res = Object.assign({}, userB, userA, userC) 
Object.assign(res, userB, userA, userC) // 같은 값을 다른 방식으로 얻는 것
```

<br/>


```js
//entries()
//객체 데이터를 배열로 바꿀 때 좋음
//2차원 배열

const userA={
  name: 'won',
  age: 11
  }

const res = Object.entries(userA)
console.log(res)
// [Array(2), Array(2)]


for (const item of Object.entries(userA)){
  console.log(item[0]) //key
  console.log(item[1]) //value
}



//================================


//keys()
//배열안의 key를 얻고 싶을 때 사용하는 메소드
//요녀석을 활용하면 value도 얻을 수 있음!

const userA={
  name: 'won',
  age: 11,
  isValid: true
  }

const res =Object.keys(userA)
console.log(res) // ['name', 'age', 'isValid']

//keys()사용 후 forEach()를 이용해 원하는 값 얻기
res.forEach(item=>{
  console.log(userA[item])
})
// won
// 11
// true


//메소드 체이닝!! key()사용 후 forEach()로 value 1개씩 가져오기
Object.keys(userA).forEach(item=>{ console.log(userA[item]) })


const state = {
  name: '',
  age: '',
  isValid: false
}
const mutations = {
  setState(payload){ //{ name: joe }
    Object.keys(payload).forEach(key => { //Object.keys({name:joe}) -> ['name'].forEach(name=> {state[name] = 'joe' })
      state[key] = payload[key]   // state[name] = 'joe'
    })
  }
}
//vuex 사용 예시
//mutarions라는 녀석이 가진 setState라는 메소드를 사용해서 state라는 데이터의 값을 바꾸자
mutations.setState({
  name: 'joe'
})
console.log(state) // {name: 'joe', age: '', isValid: false}

```

<br>

### `Date`

- 날짜 관련 객체
- getMonth()는 0부터 값을 주니 주의할 것
- getDay()도 0-6까지 값을 주니 알아서 해석..... 0 = 일요일, 6 = 토요일

<br>

```js
//프로토타입 메소드 === new로 인스턴스 생성해서 사용
//정적 메소드 === 인스턴스로 사용 불가, 원본 객체 자체에서 사용해야 함 
const res = new Date()
console.log(res) //요일 월 일 년도 시:분:초 GTM+지역시간 
console.log(res.getDate())
//핵심은 Date를 변수 res에 담아서 사용하면, date가 사용됐을 때를 기준으로 한다는 것!

//정적 메소드 Date.now()
console.log(Date.now()) //1970년 1월 1일 00:00:00 UTC로부터 지난 시간을 밀리초 단위의 숫자 값으로 반환

```

<br>

- 날짜 관련 라이브러리는 momentjs와 dayjs
- moment는 연산도 되지만 그만큼 무거움
- dayjs는 가볍게 사용가능하지만, 추가기능을 사용하려면 플러그인이 필요하다

<br>

### 전개연산자

- `...`

<br>

```js
const a = [1,2,3]
const b = [4,5,6]

const c = a.concat(b)
console.log(c) //  [1, 2, 3, 4, 5, 6]

// ... -> 일종의 [,]를 없애주는 녀석(?)
const d = [...a, ...b] // ->  ...a === 1 2 3 , ...b === 4 5 6
console.log(d) // [1, 2, 3, 4, 5, 6]


const xy = {
  x: 1,
  y: 2
}
const yz = {
  y: 3,
  z: 4
}

const xyz = Object.assign({}, xy,yz) 
console.log(c) // {x: 1, y: 3, z: 4} y는 key가 같으므로 덮어씌워짐



const a = [1,2,3]
const b = [4,5,6]

const d = {
  ...a,
  ...b
}
console.log(d) // {0: 4, 1: 5, 2: 6}


function fn(x){
  console.log(x)
}
fn(a) //-> fn([1,2,3]) 
// [1, 2, 3]


function fn(x,y,z){
  console.log(x,y,z)
}
fn(...a) //-> fn(1,2,3)
// 1 2 3

//첫번째 데이터만 x로 사용, 나머지는 rest라는 배열에 다 넣어 사용하겠다!
function fn(x, ...rest){
  console.log(x, rest)
}
fn(...a) // 1  [2, 3]

```

<br>

### 구조 분해 할당

- 배열 & 객체 데이터에서 사용
- 어떤 구조를 분해 후 할당하는 것

<br>

```js
//객체 구조 분해 할당

const user ={
  name: 'won',
  age: 10,
  isValid: true
}
//어떤 객체에서 내가 원하는 key만 얻어서 쓰고싶을 때!
const {isValid} = user // const isValid = user.isValid
console.log(isValid) // true

const {email} = user
console.log(email) //undefined

const {email = 'abc@d.com'} = user
console.log(email) // abc@d.com

const {email: e = 'abc@d.com'} = user
console.log(e) // abc@d.com


const {name:e, age:a, isValid: i} = user
console.log(e,a,i) // won 10 true

const {name:e, age:a, isValid:i, email: x = 'the' } = user
console.log(e,a,i,x) // won 10 true the

//구조 분해 할당은
//전개 연산자와 함께 쓸 수 있다!
const {
  name: e,
  ...rest
} = user 
console.log(e,rest) // won {age: 10, isValid: true}

```

<br/>

```js
//배열 구조 분해 할당
//배열은 객체와 다르게 value값만 나열되어 있음

//배열 === value의 나열
//객체 === key : value형태

const arr = [1,2,3]
const [x,y,z] = arr
console.log(x,y,z) // 1  2  3

//원하는 값만 원한다면 앞에는 ,로 빈값을 표시해서 index의 순서를 맞춰야한다!
const arr = [1,2,3]
const [,,z] = arr
console.log(z) // 3



const user ={
  name: 'won',
  age: 10,
}

for (const [k,v] of Object.entries(user)){ //배열이 들어오므로 for of
  console.log(k,v)
} 
// name won
// age 10


const arr = [1,2,3]
const [,x,,a = 10] = arr //a가 없다면 기본값으로 10
console.log(a) // 10

const arr = [1,2,3,4]
const [,x,,a = 10] = arr
console.log(a) // 4

//a,b값을 바꾸고 싶으면?
let a = 1
let b = 3
const backup = a //backup이라는 변수에 일단 a값을 저장
a = b
b= backup

//구조분해 할당으로 a,b를 바꾸고 싶으면?
let a = 1
let b = 3

;[b,a] =[a,b]

console.log(a) //3
console.log(b) //1


const arr = [1,2,3,4,5,6,7,8]
const [x,y, ...rest] = arr
console.log(x,y,rest) //  1  2  [3, 4, 5, 6, 7, 8]

```

<br>

### 데이터의 불변성과 가변성

- 원시형 데이터는 값이 같을 때 다른 메모리를 사용하지 않는다
- 실제 const, let은 메모리 주소를 담고 있는 것
- 변수를 비교하는 것은 메모리 주소를 비교하는 것
- javascript의 메모리관리 방식을 알아야한다
- garbage collection
- 메모리 누수를 확인하면서 코드를 작성해야한다
- 불변: 원시형(실제 메모리 값)
- 가변: 참조형(참조하는 메모리 주소)

<hr>
<br>

> 참고

[자바스크립트의 메모리관리]('https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management')