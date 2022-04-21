# TIL 2022-04-21

js this, 연산자와 if, switch, for문 기초

### this

<br>

1) 일반 / 화살표 함수에 따라 정의가 다르다
2) 일반 함수에서 `this`는 호출되는 위치에서 정의된다
3) 화살표 함수에서 `this`는 자신이 선언된 함수(렉시컬) 범위에서 정의된다

<br>

### 비교연산자

<br>

연산자 | 이름
--|--
`==`|동등
`!=`|부등
`===`|일치
`!==`|불일치
a `>` b
a `>=` b
a `<` b
a `<=` b
<br>



### 논리연산자

<br>

a `&&` b 그리고(and) //둘다 일치할 때. 

<br>

- 피연산자중에서 가장 먼저 찾은 falsy인애를 바로 반환
- falsy를 못찾으면 가장 마지막에 있는 값을 반환(그래서 if문을 통과하게 된다!)
- boolean데이터로 나오는 것이 아니다!
- 이녀석은 값을 찾는 즉시 바로 뒤도 안본다...

<br>

```js
const a = '';
const b = true;
if(a && b.acb){
  console.log('hey')
} // undefined
```

<br>

a `||` b 또는(or) 

<br>

- 둘중 하나라도 일치
- 가장 먼저 찾은 truthy를 바로 반환
- truthy를 못찾으면 마지막 값을 반환

<br>

`!`a 부정(not) 

<br>

- 뒤에 있는 것을 부정
- truthy인 것을 false로 바꿈
- falsy인 것을 true로 바꿈
- boolean데이터로 바꿔주는 녀석!

<br>

```js
function abc(){
  const a =''

  if(!a){ //a가 truthy면 false로 바뀜
    return ''
  }
  console.log(123)
}
```

<br>

### 삼항연산자

<br>

`조건 ? 2항 : 3항`

<br>

- 조건이 truthy면 2항 실행
- 조건이 falsy면 3항 실행
- if조건문을 길게 안써도 조건을 간단하게 구분할 수 있어 좋음

<br>

```js
const a = 123
function hello(){
  console.log('hi')
}

a ? hello() : null

//===========================
a 
  ? a===1 ? hello() : null
  : null
//보통 삼항연산자는 중첩을 권장하진 않는다...
```

<br>

### if문

<br>

`if()`
`if() else`
`else if()`

<br>

- if조건의 구분은 truthy의 유무
- bollean데이터마냥 반드시 true/false만 보는 것이 아니다
- if문은 switch로 반드시 변경할 수 있는 것은 아니다

<br>

### swtich문

<br>

- 조건이 어떤 값으로 정확히 떨어질 때
- 무조건 if조건문으로 변경해서 쓸 수 있음
- 1:1대응으로 좋다
- `case 값: 실행`

<br>

```js
const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event=>{
    console.log(event) //로그에 KeyboardEvent라는 녀석이 등장! 
                      //그 안에 key라는 녀석이 사용자가 누른 키 :D

    if(event.key==='Enter')
    {
      console.log('wow!!!')
    }
    if(
      event.key ==='Enter'||
      event.key === 'Escape'
    ){
      console.log('Yap!!!')
    }
    switch (event.key){
      case 'Enter':
      case 'Escape':
        console.log('Yeah!')
        break; // 이녀석이 없으면 다음 case로 또 넘어가서 비교
      case 'Shift':
        console.log('hello?')
        break;
      default: //얘가 마지막으로 비교를 끝내는 것
    }
  })
```

<br>

### for문

<br>

```js
for(시작조건/초기화; 종료조건; 변화조건){
  //실행!
}

for(let i = 0; i < 10; i += 1){ 
  //i의 변화를 비교하면서 구문 반복, 종료조건이 false가 될 때 종료
  console.log(i)
}


const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1){
  const liEl = document.createElement('li'); //메모리상에 엘리먼트 만들기
  liEl.textContent = i
  ulEl.appendChild(liEl)
}
```