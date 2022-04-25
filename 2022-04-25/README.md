# TIL 2022-04-25



<br>

## TIL 내용 정리


### `for` 

- 반복문
- 반복이 비교적 명시적일 때 사용

```js
// 시작기준 / 종료기준 / 변화방식
for(let i = 0; i < 10; i +=1) {
  
}
```

### `for of`

- 배열의 반복을 이용할 때 사용하면 좋다

```js
// 배열 안 아이템들은 보통 키/값의 구조가 동일하다

const users = [
  { name: 'sun', age: 20 },
  { name: 'cloud', age: 80 },
  { name: 'star', age: 5 },  
]
// 블록 내부의 변수가 변경되지 않으면 const 사용
for (const user of users){
  console.log(user) 
  // 결과:
  // {name: 'sun', age: 20}
  // {name: 'cloud', age: 80}
  // {name: 'star', age: 5}
}

//위 for of를 기본 for로 할 경우
for (let i = 0; i < users.length; i += 1){
  console.log(users[i]) //위와 같은 결과
}
```


### `for in`

- 객체의 반복을 이용할 때 사용하면 좋다
- 값을 찾을 수 있다

```js
const person = {
  name: 'joe',
  age: 52,
  isValide: true
}

for (const key in person){
  console.log(person[key])

//key로 값을 찾을 수 있다
  //결과: 
  // joe
  // 52
  // true
}
```

### `while`, `do while`

- 주로 무한루프에서 멈출 상황이 필요한 경우 사용
- while은 조건이 falsy라면 시작도 안함
- do while은 조건이 falsy여도 무조건 1번은 적용

```js
//시작조건
let i = 0

//종료조건
while (i < 3){
  //명령 실행
  console.log(i)
  
  //변화
  i += 1
}

//위 while을 do while로 할 경우
let j = 0
do {
  j += 1
} while (j < 3)

//=============================================


```


### 표준 내장객체

- javascript가 기본적으로 가지고 있는 객체들을 의미
- 주로 메소드
- `Object`, `Array`, `String`, `Function`, `Number` 등


#### prototype

- 메소드를 잠깐 내장객체에 등록해놓고 사용하는 것
- 객체를 상속하기 위해 사용하는 javascript의 독특한 방식

> 1. `String`

- 문자 내장객체
- String 객체를 호출
- String 관련 속성/메소드
- 정적메소드는 사용할 수 없음


```js
//split()
const str = 'hi and hello hi?'
const arr = str.split(' ') //공백을 기준으로 자르기 / '메소드' 사용
console.log(arr)
//결과: ['hi', 'and', 'hello?', 'hi']


//length
console.log(str.length) //글자의 개수(길이)를 확인 / '속성' 사용
//결과: 16


//includes()
console.log(str.includes('hi')) //원하는 문자가 안에 있는지 확인하는 메소드
//결과: true


//indexOf()
console.log(str.indexOf('hi')) //원하는 문자가 있으면 index를 반환
//결과: 0
console.log(str.indexOf('Hi')) //원하는 문자가 없으면 -1 반환
//결과: -1


//match()
const say = 'say Hello!'
say.match(/^.*(?=\s)/gi)[0] //정규 표현식으로 결과를 얻는 메소드
//결과: ['say']

// . -> 임의의 한 문자 일치
// * 
// ?= -> 이후 값 이전까지
// \s -> 공백문자


//replace()
const string = 'hello world?'
console.log(string.replace(/.\w/, '')) //문자 변환
//찾은 값을 바꿀수도 있음!, replaceAll()도 좋다!
//결과: llo world?


//slice()
const hello = 'Hello everybody'
//index 그 직전까지의 값을 추출(명시한 마지막 index 전까지만!)
console.log(hello.slice(0,-1)) // index 0부터 마지막까지
//결과: Hello everybod


//split()
const fruits = 'apple, banana, orange, grape'
//배열에서 특정 값을 기준으로 배열을 자른 후 값을 배열로 얻는 메소드
console.log(fruits.split(', ')) // ,과 공백 잘라내기
//결과: ['apple', 'banana', 'orange', 'grape']


//toLowerCase() , toUpperCase() 
//대소문자를 바꿔주는 메소드


//trim()
//양끝의 공백을 제거해주는 메소드
const word = '   foo  ';
console.log(word.trim());
//결과: foo

```

> 2. `Number`

- 문자 내장객체
- String 객체를 호출
- String 관련 속성/메소드
- 정적메소드는 사용할 수 없음


```js

//toFixed()
const number = 3.14515676135546

number.toFixed(2)
//결과: 3.15
//이녀석은 문자데이터로 돌려주니까 숫자로 쓰려면 추가로 형변환 해야함



// isNaN() , Number.isNaN()
//값이 NaN인지 boolean으로 알려주는 메소드
//전역객체로 쓰는 isNaN보다 Number.isNaN()을 더 권장함



// parseInt() , Number.parseInt()
// parseFloat() , Number.parseFloat()
// 숫자나 문자데이터를 숫자데이터로 만들어주는 메소드

const string = '1112.12312312466'
parseInt(string)
//결과: 1112

parseFloat(string)
//결과: 1112.12312312466
```


> 3. `Math`

- 수학 관련 속성, 메소드를 가진 내장객체
- 함수 객체가 아니다!
- 숫자자료형에만 사용가능

```js
const num = 1.54
Math.abs(num) //절대값
// 1.54
Math.ceil(num) //올림
// 2

Math.min(0,1,99,102,5,7,-1) //숫자들 중 가장 작은 값
// -1
Math.max(0,1,99,102,5,7,-1) //숫자들 중 가장 큰 값
// 102

Math.random() //0 ~ 1 미만의 구간에서 임의의 값(난수)을 주는 메소드
//보통 아래처럼 원하는 값을 구하기 위해 추가 계산이 필요
function getRandom(min, max){
  return Math.floor(Math.random()*(max-min)+min)
}
console.log(getRandom(0,99))

```


> 4. `Array`

- 인덱스로 무조건 정수만 사용


```js
//length
const arr = [1,2,3,4]
console.log(arr.length) //배열 길이를 알려주는 속성
//4

//=======================================================================================

//concat()
//기존배열 + 주어진배열 = 새 배열로 만들어 주는 메소드
//비파괴성 처리
console.log(arr.concat([4,5,6]))
// [1, 2, 3, 4, 4, 5, 6]  -> 기존 배열, 주어진배열은 그대로 존재함!
//기존배열.concat(새배열1, 새배열2, 새배열3, ...) 


//=======================================================================================


//every(콜백)
//주는 값이 모두 조건에 맞는지 판단해주는 메소드
//콜백함수 1개 받음
console.log(arr.every(item => item < 5 /*item들이 모두 5보다 작은가?*/ )) 
//4번 반복 후 truthy면 true 반환
//1개라도 통과 못하면 false 반환
//결과: true

console.log(arr.every(item => item < 4 /*item들이 모두 4보다 작은가?*/ ))
//마지막 4는 조건의 4와 값이 같으므로 작지 않다고 판단
//결과: false 


//filter(콜백)
//콜백함수 1개 받음
//콜백 함수의 조건을 통과한 것들만 모아서 새 배열로 반환
//비파괴적 처리

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
console.log(words.filter(word => word.length > 6))
//결과: ['exuberant', 'destruction', 'present']

const array = [1,2,3,4,5,6]
console.log(array.filter(item=>item<3)) //3보다 작은 녀석들만 모아서 줘!
//결과: [1, 2]
//결과로 주는 배열은 원본 배열보다 index개수를 줄여서 준다는 것이 핵심!


//=======================================================================================


//find()
//콜백함수 1개 받음
//콜백함수의 조건을 통과한 첫 번째 값을 반환
//찾은게 없으면 undefiend

const nums = [1,2,3,4,5,6]
console.log(nums.find(item=>item<3)) 
//결과: 1
//가장 먼저 찾은 1을 주고 뒤도 안돌아봄....

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
function findCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(findCherries));
//결과: {name: 'cherries', quantity: 5}



//findIndex()
//콜백함수 1개 받음
//콜백함수의 조건을 통과한 첫 번째 값의 인덱스를 반환
const items = [1,2,3,4,5,6]
console.log(findIndex(item=>item<3)) 
//결과: 0
//3보다 작은 1의 인덱스를 주고 뒤도 안돌아본다..



//==================================================
const arr= [1,3,2,4]

//배열의 값을 확인하는 3가지 방법!
//1. for
for(let i=0; i<arr.length; i+=1){
  console.log(arr[i])
}
//2. for of 
for(const item of arr){
  console.log(item)
}
//3. forEach()
arr.forEach(item=>console.log(item))

//for문 안에서 if로 break를 사용하면 중간에 멈출 수 있다
//forEach는 멈출 수 없다

for(let i=0; i<arr.length; i+=1){
  if(i===arr.length -1){
    break
  }
  console.log(arr[i])
}
//결과: 
// 1
// 3
// 2


//=======================================================================================


//join()
//특정 기호를 기준으로 배열을 구분해서 문자데이터로 주는 메소드
//구분하는 기호가 생략되면 쉼표가 기본. 빈 문자열을 넣으면 공백 없이 연결



//map()
//콜백함수 1개 받음
//콜백 안에서 반환 데이터로 새로운 배열을 만들어주는 메소드

const array1 = [1, 4, 9, 16];
array1.map((item, index) => {
  console.log(index)
  return { name: item }
});
// 결과:
// (4) [{…}, {…}, {…}, {…}]
//  0: {name: 1}
//  1: {name: 4}
//  2: {name: 9}
//  3: {name: 16}

//모든 콜백 배열함수는 인덱스가 매개변수로 들어간다!


//=======================================================================================

//pop()
// 배열의 마지막 녀석을 제거해주고 그걸 return으로 알려준다
// 배열의 원본을 수정
// 파괴적 처리


//shift()
// 배열의 첫 번째 녀석을 제거해주고 그걸 return으로 알려준다
// 배열의 원본을 수정
// 파괴적 처리


//push()
//배열의 끝에 1개 이상의 요소를 추가 후, 배열의 새로운 길이값(length)을 반환해주는 메소드
//배열의 원본을 수정
//파괴적 처리

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// 결과: 4
console.log(animals);
// 결과: ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// 결과: ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//원본을 수정하기 위해 사용
const ar = [1,3,2,4]
console.log(ar.push(99,7,1675)) //결과: 7
console.log(ar) //결과: [1, 3, 2, 4, 99, 7, 1675]

```



<hr>
<br>

> 참고

[정규 표현식]('https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions')