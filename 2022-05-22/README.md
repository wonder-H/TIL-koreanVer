# TIL 2022-05-22

## TIL 학습/복습 내용

<br>

### 진행 목록

- js 공부
- webpack5 환경설정 + dotenv 라이브러리 / 환경변수 설정

<br>
<hr>
<br>

### 추가 공부 필요한 목록

- 내장객체 메소드

  1. `reduce`
  2. `map`
  3. `filter`

<br>

- 나머지 매개변수 (Functions Rest Parameters)
  > 함수가 정해지지 않은 수의 매개변수를 배열로 받는 것. JavaScript에서 가변항 함수를 표현할 때 사용

```js
//나머지 매개변수 (Functions Rest Parameters)

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```

<br>

- 전개구문 (Spread syntax)
  > 배열,문자열처럼 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시키는 것

```js
//전개구문 (Spread syntax)

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

```

<br>

- 구조 분해 할당 (Destructuring assignment)
  > 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식


```js
//구조 분해 할당 (Destructuring assignment)

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

```


<br>

참고

[전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)  
[나머지 매개변수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)  
[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)