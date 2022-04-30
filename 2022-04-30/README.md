# TIL 2022-04-30


<br>

## TIL 학습/복습 내용

- 자바스크립트 연산자
- 배열 객체의 내장 메소드


<br>

### 자바스크립트 연산자

<br>

1. 대입 연산자 `=`
2. 산술 연산자 `+`, `*`, `-`, `/`, `%`
3. 연결 연산자 `+`
4. 복합 연산자 `+=`, `*=`, `-=`, `/=` 
5. 증감 연산자 `++`, `--`
6. 논리 연산자 `!`, `&&`, `||`
7. 비교 연산자  `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
8. typeof 연산자 `typeof`
9. nullish 병합 연산자 `??`

<br>

> 대입 연산자 `=` 

- 변수에 값을 넣는 연산자
- 할당 연산자
- 오른쪽에 있는 값을 왼쪽으로 할당

<br>

> 산술 연산자 `+`, `*`, `-`, `/`, `%`

- 숫자 계산하는 연산자
- `+` 더하기
- `*` 곱하기
- `-` 빼기
- `/` 나누기
- `%` 몫을 나누고 남은 나머지 값

<br>

> 연결 연산자 `+`

- 문자를 연결하는 연산자
- 문자형 데이터를 연결
- `'1' + '1'`은 문자데이터므로 결과는 11
- `'2' + 2` 한 개라도 문자라면 숫자도 문자로 바뀌니 결과는 22
  
<br>

 > 복합 연산자 `+=`, `*=`, `-=`, `/=` 

- 산술 연산자와 대입 연산자가 합쳐진 것
- `+=` 더하고 할당
- `*=` 곱하고 할당
- `-=` 빼고 할당
- `/=` 나누고 할당

<br>

> 증감 연산자 `++`, `--`

- 숫자 데이터에만 사용
- 값을 증가/감소 시키는 것
- 위치에 따라 순서가 살짝 바뀜(전위/후위 연산)
- `a++` -> 해당 라인이 끝나면 다음줄부터 a에 +1
- `++a` -> 해당 라인부터 a에 +1
- `a--` -> 해당 라인이 끝나면 다음줄부터 a에 -1
- `--a` -> 해당 라인부터 a에 -1

<br>

> 논리 연산자 `!`, `&&`, `||`

- truth, falsy를 알아내는 연산자
- `!` 뒤에 있는 것을 부정(반대로)   
  `!true` -> true의 반대인 false, `!a` -> a를 부정한 값
- `&&` 둘 중 모두 truthy면 true, 하나라도 falsy면 false  
  `a && b` -> a, b 모두 truthy면 true, 하나라도 falsy면 false
- `||` 둘 중 하나라도 truthy면 true  
  `a || b` -> a가 truthy면 b가 falsy였어도 바로 true, b가 truthy면 a가 falsy였어도 true. 모두 falsy여야 false.

<br>

> 비교 연산자 `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`, `??`

- 왼쪽, 오른쪽을 비교해 true/false로 알려주는 연산자
- `>` 왼쪽이 오른쪽보다 크면 true, 작거나 같으면 false
- `>=` 왼쪽이 오른쪽보다 크거나 같으면 true, 작으면 false
- `<` 왼쪽이 오른쪽보다 작으면 true, 크거나 같으면 false
- `<=` 왼쪽이 오른쪽보다 작거나 같으면 true, 크면 false
- `==` 양 옆의 값이 같으면 true, 아니면 false
- `===` 양 옆의 값도 같고, 데이터 타입도 같으면 true, 아니면 false
- `!=` 양 옆의 값이 다르면 true, 서로 값이 같다면 false
- `!==`양 옆의 값이 다르거나, 데이터 타입이 다르면 true, 값/데이터가 하나라도 같다면 false

<br>

```js

3 != "3"; // false
3 !== "3"; // true


"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false
0 != !!undefined; // false
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true

```


<br>

> typeof 연산자 `typeof`

- `typeof` 뒤에 오는 데이터의 자료형 표시 
- `typeof 데이터` , `typeof(데이터)`

<br>

```js

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"


```

<br>

> nullish 병합 연산자 `??`

- 나름 신기능인 녀석, 구식 브라우저는 폴리필 필요
- 데이터 중 '값이 할당되어 있는 것'을 찾을 수 있다
- null이나 undefined가 아닌 것을 찾는 녀석
- 할당 연산자 `=` 함께 사용 시 null/undefined인 것에 값 적용가능  
- 안정성 문제 때문에 `??`는 `&&`나 `||`와 바로 사용불가
- `??` 왼쪽이 null/undefined면 오른쪽 값을 반환, 왼쪽 값이 할당되어있다면 왼쪽 값 반환  
- 왼쪽이 null이나 undefined가 아니라 판명되면 오른쪽은 신경안쓰고 바로 왼쪽 반환
  `a ?? b` -> a가 null도 아니고 undefined면 a, 그 외의 경우라면 b

<br>

```js
let a
let b = 0
    //a가 null이나 undefined면 10 할당(=)
a = a ?? 10 
// a = 10

0 ?? 10 // ?? 의 경우 0이 falsy지만 할당된 값으로 파악함!
// 0 반환

// || 의 경우 0은 falsy기 때문에 false값 반환

// ()를 이용해 우선 순위를 알려주면 &&, ||와 쓸 수 있음
(null || undefined ) ?? "foo"; // returns "foo"

```

<br>

### 객체 내부의 키/값이 있는지 확인하기

- 일반적으로 객체 내부에 없는 속성을 `console.log()`에 넣어 확인해보면 `undefined`가 나온다
- `undefined`는 에러를 발생시키는 것이 아니기 때문에 `in`을 이용해 실제 값이 있는지 확인이 필요하다

- `키 in 객체이름`

<br>

```js

const a = {
  num: 1,
  name: 'Vvon',
  method: function (){
    console.log(`hello, ${this.name}`)
  }
}

console.log(a.age) // undefiend

//확인하고 싶은 속성(키) in 객체이름
console.log(age in a) //false


const animals = {
  cat: "cat",
  dog: "dog",
  year: 2014
};

console.log("cat" in animals) // true
console.log("dog" in animals) // true
console.log('bird' in animals) // false

```

<br>

### 배열 객체의 내장 메소드

<br>

> 1. `forEach`  

- `배열.forEach(콜백함수)`
- 배열의 모든 요소를 1개씩 콜백함수 안에 출력
- 배열 자체의 요소를 변경하는 것은 아님

<br>

> 2. `map`

- `배열.map(콜백함수)`
- 콜백함수에서 return 가능
- 사용 시 원본 배열의 모든 요소를 1개씩 콜백함수 안에 넣고, 새로운 배열을 반환

<br>

> 3. `includes`

- `배열.includes(값)`
- 배열 안에 원하는 값이 있는지 확인
- `===`연산을 이용해 true/false를 반환


<br>

> 4. `indexOf`

- `배열.indexOf(값)`
- 배열 안에 원하는 값이 있으면 __인덱스 번호__ 반환
- 값이 없으면 -1 반환

<br>

> 5. `findIndex`

- `배열.findIndex(콜백함수)`
- 배열 안 객체 `[{ }]` 의 값을 확인할 때 좋은 메소드 
- 매개변수로 받은 콜백함수 안에서 반복하며 값을 찾고 있으면 __인덱스 번호__ 반환
- 조건에 맞는 것을 찾으면 인덱스만 즉시 반환
- 요소들이 중복된 조건/값을 가진 경우 사용하기 어려움

<br>

> 6. `find`

- `배열.find(콜백함수)`
- 배열 안 객체 `[{ }]` 의 값을 얻을 때 좋은 메소드 
- `[]`내에서 조건에 맞는 `{}`을 찾고, `{}`로 반환
- 조건에 맞는 요소를 즉시 반환
- 요소들이 중복된 조건/값을 가진 경우 사용하기 어려움


<br>

> 7. `filter`

- `배열.filter(콜백함수)`
- 배열 안 객체 `[{ }]` 의 값을 얻을 때 좋음
- 요소들이 중복된 조건/값을 가지면 모두 배열로 반환

<br>

> 8. `slice`

- `배열.slice(시작점, 끝점)`
- 매개변수로 받은 값을 인덱스로 해서 자른 배열 반환
- `배열.slice()`면 원본 배열 그대로 반환
- 시작지점을 포함하고, 끝점의 바로 전까지 요소들만!

<br>

> 9. `concat`

- `배열1.concat(배열2)`
- 앞의 배열과 매개변수로 받은 배열을 붙여줌 

<br>

> 10. `sort`

- `배열.sort()`
- 원본 배열의 순서를 변경(정렬) 후 반환 
- 정렬의 기준이 __문자열__이기 때문에 숫자배열도 문자식 크기(유니코드 문자)로 취급해서 정리해준다(그럴 필요없는데...)
- 비교함수를 넣어줘야 숫자배열도 잘 나온다!

<br>

```js
숫자배열.sort((a, b) => {
  if(a > b) {
    return 1; //a가 클때 1 -> a는 b보다 뒤에 있어야한다
  }
  if(a < b){
    return -1; //a가 작을때 -> a는 b보다 앞에 있어야한다
  } 
  else { //a === b  //a가 b와 같으면 자리바꿈 안시킴!
     return 0;
  } 
})

//비교함수를 넣어주면 숫자든 배열이든 객체든 원하는대로 내림차순, 오름차순 정렬가능!
```


<br>

> 11. `join`

- `배열.join(조건)`
- 조건(구분자)으로 바꿔서 구분 후 배열 안의 요소들을 문자로 합쳐서 반환
-  `배열.join(' ')` -> ,를 공백으로 바꾸고 합쳐서 반환
-  `배열.join()` -> 기본값인 `,`를 기준으로 합치고 반환

<br>








