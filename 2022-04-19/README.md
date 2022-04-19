# TIL 2022-04-18

js 공부 / 데이터타입, 함수, 호이스팅, 선언 등

<hr>
<br>

## JS 데이터(자료형, Data Type)

- js는 원래 브라우저 페이지의 ui를 주로 바꾸는 용도였다
- 웹을 조작(동작)하게 만들기 위해 등장했던 언어
- 구글이 크롬 버전 8을 만들면서 노드js와 더불어 이제 프론트 분야 + 백엔드 분야에서도 함께 쓰이는 녀석이 되었다!

<hr>
<br>

## 모달

- js로 요소(태그)를 컨트롤하는 것
- 컨트롤의 핵심은.... 컴퓨터는 지식만 있고 지능이 없으니, 이녀석이 알아들을 수 있도록 단계별로 알려줘야한다는 것

> `.` -> ~의 라는 뜻으로 해석해보자
> `=` -> 대입 연산자. 할당. 오른쪽의 값을 왼쪽에다가 넣어주는 것을 의미
> `on` -> ~를 기다린다는 뜻으로 해석하자. `onclick` -> 클릭 기다리는 것

<br>

```html
<div class="container">
    <h1 id="sayhello">hello!</h1>
    <!-- 스크립트에 있는 js는 바로 실행된다! -->
    <script>
      document.getElementById('sayhello').innerHTML = 'bye';
      // document의 sayhello라는 ID가 있는 곳의 innerHTML 을 'bye'로 바꿔라!
    </script>
</div>
```

<br>

__간단한(?) 웹페이지 개발 방법__

<br>

1. html을 만들자
2. css로 꾸며놓고 숨길 애들은 미리 숨겨두자
3. js로 숨겨진 애들을 나타나게 하면 끝!

<br>

- 참고

<br>

  +  클래스 이름은 주로 명사+명사인 편
  +  함수이름은 주로 동사가 들어가는 편
  +  변수나 함수에 카멜 케이스, 생성자 함수, 클래스의 이름에는 파스칼 케이스
  +  그러나 법칙은 아니니까 협동시 서로 맞춰서 사용하자
  +  하나의 파일은 하나의 기능을 가진다고 생각하자. 유지보수 때문임

<br>

```js
//카멜 케이스
firstName

// 스네이크 케이스
first_Name

// 파스칼 케이스
FirstName
```

<hr>
<br>

## 호이스팅

1. 보통 인터프리터는 소스코드를 1줄씩 연속적으로 분석하면서 실행하는 것이 일반적이다
2. 스크립트 언어는 주로 app, sw처럼 서비스와 유지보수 등을 위해 사용하는 언어를 의미한다
3. js는 웹 브라우저를 다루기 위한 스크립트언어다
4. 보통 스크립트언어는 인터프리터랑 연결되어 사용되기 때문에, 자연스럽게 js도 인터프리터가 1줄씩 읽으면서 순차실행된다고 예상할 수 있다

<br>

__하지만...__

<br>

실제 js를 사용하는 인터프리터는 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 방식이다!
때문에 js는 일단 선언쪽 작업부터 끝낸 다음 호출,실행하는 것을 읽는 방식으로 진행된다
게다가... 선언 작업중에서도 변수가 1위순서, 함수가 2위순서다

변수가 선언된 경우, 어디서 어떻게 선언해도 항상 먼저 최상위로 끌어올려서 일단 'undefined'먼저 넣어둔다(var)
변수애들이 끝나면 2순위인 함수 선언을 확인해서 선언된 함수이름을 끌고 올라온다

<br>

선언쪽 작업이 다 끝나면 이후 변수의 할당값, 함수의 실행문을 순서대로 가져오게 된다 

<br>

> __결론:__ 호이스팅은 자바스크립트 인터프리터가 코드를 읽는 방식에서 일어나는 현상인 것
> const와 let은 이 현상이 발생하지 않게 도와주는 새로운 변수선언 키워드다

<hr>
<br>

## 선언 함수 / 표현 함수 / 생성자 함수

- __함수는 매우매우매우매우 중요한 녀석이다__
- __함수는 유효범위가 아주아주아주 중요하다__

<hr>
<br>

### 선언 함수

<br>

`function 함수이름(매개변수){ 내용 }`

<br>

- function 키워드를 먼저 사용해 컴퓨터한테 여기에 함수가 있다는 것부터 정의하고 함수 생성
- 함수라는 것을 먼저 말하고 시작해서 반드시 이름이 있어야함. 이름 생략 불가.
- 컴퓨터는 실제 실행할 때 그 이름을 가진 데이터가 함수라는 것을 빠르게 인식하게 됨
- 인식된 함수들은 컴퓨터가 호이스팅으로 끌어오고, 후에 다른 작업이 이어진다  
- 호이스팅을 잘 이용하면 중요한 것은 위에, 함수들은 다 밑에 넣어두고 사용할 수 있다는 장점이 있다!

<hr>
<br>

### 표현 함수(함수 표현식)

<br>

```js
//1. 변수에 할당된 익명함수
const f = function(인수){ 내용 } 

//2. 익명함수
function(인수){ 내용 }

//3. 즉시실행함수
(function(인수){ 내용 })

//4. 화살표함수
(인수)=>{내용}

```

<br>

- 리터럴 방식으로 생성하는 함수
- 표현함수는 함수 정의를 하는 선언의 개념이 아니라서 호이스팅 그런거 없다...
- 그냥 바로 읽혀버리기 때문에 호이스팅 현상이 일어나지 않는다
- 함수 표현식을 사용하면 호이스팅을 방지할 수 있다

<br>

```js
const hi = function(a){
  console.log(a)
} 
```

<hr>
<br>

### 생성자 함수

<br>

`new Function(){}`

<br>

- 생성자 함수 호출로 함수를 만드는 방법 
- 함수도 객체로 보기때문에 생성자로 함수 생성가능
- 자주 쓰지는 않는다

<br>

```js
function sum(a,b){  // 함수 선언
  console.log(a+b);
}
sum(1,2) // 함수 호출
console.log(sum)  // 함수라는 데이터를 로그로 보는 것


function callFun(callback){ //콜백 함수
  callback(2,4)
}
callFun(sum) //callFun이라는 애를 실행하는데, sum이라는 함수 데이터를 넣는 것.
// 인수 === 데이터, 
// 함수 === 데이터, 미리 뭔가가 작동되도록 기능을 만들어둔 것이 있는 데이터
// 함수() === 함수실행, 함수호출

// 함수()을 이용해 그 함수를 사용하겠다고 명령 
// 만약 미리 만들었던 함수에서 ()안에 값이 들어올 것이라고 매개변수를 정해뒀다면(매개변수 선언), 
// 그 함수를 실행할 때에는 반드시 어떤 데이터가 그 함수의 인수(데이터)로 들어가져야만한다 
// 따라서 sum이라고 위에 만들어둔 함수가 callFun이라는 함수 안에 데이터로 넣어지고, 
// 그 안에서 ()를 이용해 실행하는 것
```

<br/>

```js
function sum(something, data){  //함수 선언
  return something + data //함수 반환
}

console.log(sum('hi ','hello?').slice(3,8))
// sum으로 합쳐진 문자데이터 'hi hello?'라는 녀석을 slice로 잘라줘
// 문자데이터의 3번째까지는 무시하고, 4번째부터 8번째까지 있는 값을 줘!
// -> hello

//메소드 체이닝
//함수가 호출된 후에는 return된 어떤 결과 데이터를 보내준다
Object.prototype.toString.call([]).slice()

//return키워드는 함수를 끝내고 값을 보내주는 것을 의미한다
//만약 함수에서 return 키워드가 없다면, 그 결과 데이터는 undefined가 된다

```

<br/>


```js
function sum(a, b){
  return a + b;
}

console.log(sum) // sum이라는 데이터녀석이 뭔지 로그로 보여줘!
console.log(sum(2,4)) //sum은 함수고, 이건 뭔가 들어와야한다고 만들어뒀으니 그 값을 넣어서 실행하자
console.log(sum(4)) // 2개를 넣어야한다고 만들어놨는데, 한개만 넣어보면?
console.log(sum()) //만약 아무것도 안넣고 실행만 해보면?
console.log(sum(1,3,6)) //2개만 넣는다고 한 함수에 3개의 값을 넣어보면?
console.log(sum(1,'2',)) //숫자데이터에 문자데이터를 함께 넣으면?
```

<br>

> 실제 실행된 결과

```
// console.log(sum)  
ƒ sum(a, b){
  return a + b;
}

// console.log(sum(2,4))
6

// console.log(sum(4)) 
NaN

// console.log(sum()) 
NaN

// console.log(sum(1,3,6)) //2개만 넣는다고 한 함수에 3개의 값을 넣어보면?
4 
-> 첫번째, 두번째 값만 적용되고 세번째는 무시!

// console.log(sum(1,'2',))
12
-> 숫자1과 문자 2를 합쳐서(?) 문자가 된 신개념 '12'라는 녀석이 등장

```

<hr>
<br>

### 객체와 함수

<br>

```js
const user = { 
  name: 'won',
  age: 99
}

function getName(userData){ // userData라는 이름으로 뭔가를 넣는다고 설정
  return userData.name //값을 반환!
}
getName(user) //실행 후, 반환된 값은 user라는 이름을 가진 녀석이 된다!

```

<hr>
<br>

### 구조 분해 할당

<br>

- 구조 분해 할당(Destructuring assignment)
- 배열/객체의 속성을 해체하고(구조분해), 그 결과값을 개별 변수에 담을 수 있도록(할당) 하는 자바스크립트 표현식

<br>

```js
const user = { 
  name: 'won',
  age: 99
}


function getName({name, age}){
  return [name, age]
}
console.log(getName(user))
// 결과 ===  ['won', 99] 
// 객체데이터였던 녀석을 함수안에 넣은 다음 배열데이터로 만들어 결과를 주는것!
// 1. user라는 것을 인수로 넣어서 getName이라는 함수 실행
// 2. user라는 애는 객체니까 먼저 분해부터 한다
// 3. {}로 넣어진 인수들은 객체의 키에 해당되는 녀석이고, 얘네를 변수로 사용하는 것
// 4. 변수인 애들이 실제 데이터의 키와 일치하면 값 보여주고, 그 키가 실제 객체에서 없으면 undefined   
// getName에서 {name, age}라는 객체를 변수로 쓴다는 뜻

```

<br>

```js
function sum(a,b, ...rest){ //나머지 매개변수 작성하기
  return rest.reduce(function (acc, cur){
    return acc + cur; //
  })
} //어떤 2개의 애들이 인수로 들어가고, acc, cur이라는 이름으로 된다!

console.log(sum(1,2,3,4,5,6)) // 첫번째, 두번째 애들은 매개변수 a,b,로 들어가고
//남은 인수들은 모두 모아서 rest라는 배열으로 만든다!

//reduce의 매개변수
//누산기 (acc)
//현재 값 (cur)
//현재 인덱스 (idx)
//원본 배열 (src)
```

<br>

- 함수가 실행될 때 매개변수에서 인수(데이터)로 들어가는 녀석은 실제 arguments라는 객체(유사배열)로 변해서 들어간다
- 얘는 배열 비슷한 객체이기때문에 배열메소드를(일부)쓸 수 있다!
- 유사배열 === 마치 배열인 것처럼 length속성과 인덱스된 다른 속성을 가지고 있는데 forEach, map과 같은 내장 메소드는 없는 녀석들
- arguments 객체는 배열이 아니다. 배열 비슷하지만, length 빼고는 pop(),map()과 같은 배열관련 속성이나 메소드가 없다
- 그래서 유사배열인 애들은 진짜(?)배열로 변환해야한다

```js
Array.prototype.slice.call(arguments);


[].slice.call(arguments);


Array.from(arguments);
[...arguments];

```

<hr>
<br>

### 즉시실행함수(IIFE)

- IIFE(Immediately Invoked Function Expression)
- 정의하자마자 바로 실행되는 함수표현식

```js

 console.log(456)   // ;로 명령이 끝났다는 것을 알려주지 않으면...?

 (function (){ //그리고 즉시실행함수를 사용해보면
   console.log(33)
 }())

//컴퓨터는 이렇게 알아듣게된다
 console.log(456)(function (){console.log(33)}())
 // 결과
 // console.log(...) is not a function


//==============바꾸자!==================

 console.log(456); //;추가해서 명령 끝났다는 것을 표시

 (function (){
   console.log(33)
 }())
 
 
//==============요것도 가능==============

console.log(456)

;(function (){ //즉시실행함수앞에 ;를 사용해보면! 문제없다
   console.log(33)
 }())

```

<br>


<hr>
<br>


### 콜백함수

<br>

```js
//콜백함수 사용
function abc(callback){
  return callback();
}
abc(function(){
  console.log('ABC')
})

// setTimeout(함수/코드조각,지연시간) === 시간 지나면 함수/지정한 코드조각을 실행하는 메소드

function abc(){
  console.log('ABC')
}
setTimeout(abc,1000) //콜백함수는 어떤 함수의 인수로 사용되는 데이터함수인 것.
// setTimeout이라는 메소드를 사용할건데 그 데이터의 값은 abc라는 함수다
// 그럼 1초후 abc라는 함수로 들어가서 그 데이터의 값console.log('ABC')을 가져오게 되는 것.

function sum(a,b,cb){
  return cb(a,b);
}

const res = sum(2,5, function(a,b){
  return a+b;
})

//결과 
// 7
```

<br>

```js
function sum(a,b,cb){
  setTimeout(function(){
    cb(a+b)
  },2000)
}

sum(2,5,function(res){
  console.log(res)
})

```
<br>

__단계별 상세흐름__

1. sum이라는 함수는 a,b,cb라는것을 매개변수로한다
2. sum함수를 실행하면서 인수로 2,5,함수(res){console.log}를 줬음
3. 일단 인수를 받았고, 인수 중 cb라는 것은 함수데이터다
4. cb라는 함수데이터는 함수/코드조각을 원하는 setTimeout메소드에 적합하기 때문에 안에서 문제없이 실행된다
5. 그리고 setTimeout메소드의 지연시간은 2초로 설정해뒀었다
6. 근데 sum에서 인수로 들어간 a,b와 더불어 cb라는 함수데이터 녀석은, setTimeout 메소드 안에서 함수가 실제 실행되는 것이었다
7. 그 함수가 실행되면서 a+b라는 인수를 가지고 들어간다
8. a+b는 1개의 값으로 인식되어 들어가지고, 그곳에서는 res라는 이름의 매개변수가 되어 console.log와 함께 사용된다

<br>

> __결과__ 

    function(res/*a+b로 들어간 인수*/){console.log(res)}
    -> 2초 후에 값 7이 나온다!

<br>
<hr>
<br>

참고

[배열의 reduce메소드와 매개변수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)    
[arguments 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)  
[함수 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)  