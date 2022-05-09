# TIL 2022-05-09

## TIL 학습/복습 내용

<br>

## 진행 목록

- 이벤트 버블링 / 캡처링
- npm 패키지
- 모듈 번들러

<br>


### 이벤트 버블링 / 캡처링

- 이벤트 캡처링 : 이벤트가 상위 태그로부터 하위태그까지 내려오는 것
- 이벤트 버블링 : 이벤트가 하위 태그로부터 상위태그까지 올라가는 것
- 진행순서 : 최상위태그 =(캡처링)==> 하위태그 ==(버블링)==> 최상위태그


<br>

```javascript

//익명함수는 재사용이 안되기 때문에 이벤트리스너를 삭제하려면 기명함수를 만들어야한다
const handler = () => {
  console.log('child!')
}
childEl.addEventListener('click', handler)

parentEl.addEventListener('click', () => {
  //콜백함수에 제거하려는 함수의 이름을 명시할 것
  childEl.removeEventListener('click', handler)
})


//이벤트 캡처링, 이벤트 버블링

childEl.addEventListener('click', () => {
  console.log('childEl')
})

parentEl.addEventListener('click', () => {
  console.log('parentEl')
})

document.body.addEventListener('click', () => {
  console.log('body')
})

window.addEventListener('click', () => {
  console.log('window!')
})

//현 상태에서 보라색 child를 클릭하면
//child, parent, body, window(html) 모두 클릭하는 것


//이벤트 버블링 : 이벤트가 하위에서 상위까지 전파된다
//콘솔 결과 : 버블링(하위->상위) childEl -> parentEl-> body-> window


//이벤트는 위->아래->위 순서로 진행
//위->아래는 캡처링, 아래->위는 버블링
//따라서 capture: true면 위->아래 상태(캡처링) 때 실행하라는 것


window.addEventListener('click', (e) => {
  console.log('window!', e)
})

document.body.addEventListener('click', () => {
  console.log('body+capture!!!')
}, {
  capture: true, //내려오던 이벤트 니가 잡아서 먼저 써!!!!!!!!!
})

```

<br>



```javascript
//상위 요소에 이벤트 1개만 걸고, 안에 있는 여러 하위 태그들을 제어하기도 한다
//--이벤트 위임(event delegation)--
//버블링 현상을 효율적으로 이용한 것
//100개이상 li에서 ul태그에 클릭 이벤트 걸고, console.log(event.target) -> 클릭된 li가 나옴!
//필요한 것은 li녀석인데 이벤트는 부모인 ul한테 걸었음 :)



//== event.preventDefault ==//
parentEl.addEventListener('wheel', (event) => {
  console.log('parentEl')
  event.preventDefault() //wheel이벤트가 일어날 때 일어날 wheel의 기본 동작을 멈춰!!!

})

aEl.addEventListener('click', (event) => {
  console.log('aEl')
  event.preventDefault() //click이벤트가 일어날 때 일어날 기본 동작을 멈춰!!! (a태그 링크기능 안됨ㅋ)
})


childEl.addEventListener('click', (event) => {
  console.log('childEl')
  event.stopPropagation() //이벤트 다시 올라가는거(버블링) 하지마!
})



//== event.stopPropagation() ==
//상위객체한테 다시 이벤트 가는 것(버블링)을 막을 때 사용
//ex)드롭다운 - 영역 내에서는 적용하다가 영역 벗어나면 윈도우한테 전파되는 것을 멈춤
//드롭다운 영역일 때 메뉴 닫히지 않게 하려면?
//드롭다운 영역에 stopPropagation 걸기-> window한테까지 가는 것이 멈춰져 적용안됨

parentEl.addEventListener('click', () => {
  console.log('parentEl')
})



//=================  passive: true ========================

parentEl.addEventListener('wheel', (event) => {
  for (let i = 0; i < 10000; i += 1) {
    console.log('parentEl', event)
  }
}, {
  passive: true //시스템적인 처리와 이벤트를 분리시켜주는 것 -> 무한스크롤에서 성능 향상시키기
})


function handler() {
  console.log('child!')
}
childEl.addEventListener('click', handler, {
  capture: true
})
//캡처 속성이 있는 것

buttonEl.addEventListener('click', () => {
  //콜백함수에 제거하려는 함수의 이름을 명시할 것
  //캡처 가진 이벤트를 지울 때에는 지우는 곳에서도 캡처를 명시해야함
  childEl.removeEventListener('click', handler, {
    capture: true
  })
})

```

<br>


### npm 모듈 패키지


<br>

`npm init -y` ->  node 프로그램을 시작하겠다는 명령
- `y`는 Yes의 의미인듯.. -> 묻지말고 알아서 기본설정으로 만들기나 해라!!!!(?)
- 이후 package.json이 생기면 npm package를 설치해서 사용하자 :D

<br>


```json

  // scripts에는 내가 설치한 전역 패키지의 명령을 실행할 수 있음!
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },


// scripts로 원하는 것 설정 
  "scripts": {

    //Vvon을 입력하면 sass의 명령 실행!
    //main.scss -> main.css 형태로 변경
    "Vvon": "sass main.scss:main.css"
  },
```