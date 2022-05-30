# TIL 2022-05-30

기존 복습 + 추가 공부

<hr>
<br>

- AJAX
- JSON
- Vuex

### XML

- W3C에서 권장하는 다목적 마크업 언어
- eXtensible Markup Language
- 데이터의 이동, 구조 및 저장을 설명하는 텍스트 파일

### AJAX

- 비동기적 JavaScript와 XML
- Asynchronous JavaScript And XML
- 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법
- 자바스크립트의 싱글스레드 처리 방식을 보완하기 위해 등장
- 필요 데이터만 서버에 요청해 받고, 프론트에서 일부 데이터 처리 가능. 
- 보통 SOAP이나 XML 기반의 웹 서비스 프로토콜 사용


> AJAX 장점

- 페이지 이동없이 특정 화면 영역을 빠르게 변경가능
- 비동기 처리이므로 서버 처리를 동기적으로 기다릴 필요 없음
- 적은 수신 데이터
- 프론트에서 일부 데이터 처리도 가능 
- 플러그인 없이 인터렉티브한 웹페이지 구현가능


> AJAX 단점

- Ajax기능 제공 안하는 브라우저에서는 사용 불가
- 한정된 HTTP 클라이언트 기능
- 페이지 이동없는 통신으로 인한 보안 문제
- 한정적으로 지원하는 Charset
- 스크립트로 작성되므로 디버깅이 좋지 않음
- 요청 남발 시 오히려 서버 부하가 늘어남
- 동일-출처 정책으로 인해 다른 도메인과 통신 불가


```js

const xhr = new XMLHttpRequest();

// .open('요청 메소드', '요청 URL')
// 요청 전 open으로 요청할 메소드, 요청url 지정
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// 받을 데이터 형식 지정 가능
xhr.responseType = 'json';
//-> json을 js데이터로 자동 구문분석


// .onload() 웹브라우저 내 모든 요소가 준비가 되면 실행
// 브라우저가 웹 문서를 불러오고, 문서 사용 시점에서 onload로 안의 내용 실행하는 것
xhr.onload = function(){
  //-> 응답 데이터 형식을 따로 지정하지 않았다면 JSON형태로 온다.
  // JSON.parse()로 js데이터로 바꾸고 가공하자 
  const data = JSON.parse(xhr.response)
}

// .send()로 요청 전송
xhr.send()

```

- 데이터 형식이 중요
- txt, html, xml, csv, json
- 보통 JSON(JavaScript Object Notation, 자바스크립트 객체 표기법)사용

> JSON

  `[{}]` 배열 안 객체 형태  
  `[{"속성": "값"},{"id": 1},{"title": "abc"}]`

1. 속성 이름은 `" "`안에 들어간다
2. `" "`만 허용, `' '`불가
3. 문자만 허용
4. 데이터만 저장 가능
5. 값으로 숫자, 불리언, 문자열, 객체, 배열, `null` 넣을 수 있음

> JavaScript -> JSON     

    JSON.stringify()

> JSON -> JavaScript   

    JSON.parse()

- 객체 타입만 변환가능한 것은 아님