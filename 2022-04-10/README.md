# TIL 2022-04-10

기존 복습 + 추가 공부

<hr>

## BOM, DOM, CCSOM, javascript

<br>

> __BOM__

- BOM(Browser Object Model)은 브라우저와 관련된 객체들의 집합을 의미
- 현재 웹 페이지를 열고 있는 웹 브라우저 자체가 객체로 표현된 것
- BOM을 이용하면 브라우저와 관련된 기능들을 구성할 수 있음
- BOM의 최상위 객체는 window
- BOM은 공식적인 표준이 없어서 브라우저마다 API가 조금씩 다를 수 있음
- DOM은 BOM중의 한 녀석

<br>

> __DOM__

- Document Object Model(DOM)은 HTML, XML, SVG 문서에 접근하기 위한 인터페이스
- BOM과 다르게 공식적인 표준이 존재함
- W3C(World Wide Web Consortium)의 DOM 표준은 크게 세 가지 모델로 나뉨

  > Core DOM : 모든 문서 타입을 위한 DOM 모델  
  > HTML DOM : HTML 문서를 위한 DOM 모델  
  > XML DOM : XML 문서를 위한 DOM 모델  

- HTML DOM의 경우 HTML문서의 요소와 속성, 내용 등 모든 것을 각 객체로 만들고, 이들의 부자 관계를 나타내는 트리 구조로 구성시켜줌
- 트리형식의 자료구조는 모든 개체를 '노드(node)'로 표현(Document, Element, Attribute, Text)
- DOM은 원본 HTML 문서를 모두 객체 기반으로 표현 후 브라우저에게 랜더링해야 하는 것들을 전달하는 녀석임
- 전달받은 내용들을 종합해 화면(뷰포트)에 결과물로 보여주는 것이 브라우저
- 때문에 html문서/브라우저 중간에서 여러 프로그램들(스크립트 파일)이 html의 구조, 내용 등을 읽고 조작할 수 있도록 API(Application Programming Interfaces)를 제공
- DOM의 API들은 일반적으로 자바스크립트 객체로 제공됨
- API를 통해 동적으로 바뀌면, DOM이 다시 브라우저한테 랜더링하라고 전달하는 것
- 즉, 프로그램 언어로 내용을 조작하는 것들은 원본 html문서가 아닌 DOM을 조작하는 것

<br>

> __CSSOM__

- CSSOM(Cascading Style Sheets Object Model)은 HTML요소와 연관된 스타일 관련 정보(css, 미디어쿼리, 선택자 등)를 모두 구조화시켜주는 녀석
- 기본적으로 CSS(html, xml같은 구조화 문서의 랜더링을 설명하는 언어)를 위한 것
- DOM과 비슷하게 인터페이스이고, API를 제공하지만 디자인 관련된 것만 담당.
- DOM은 구조/기능의 컨텐츠 영역, CSSOM은 디자인 관련 스타일 영역만 담당해 트리 구조로 만들어주는 것이 차이점.
- DOM에서 구조화 작업이 끝나면, css쪽 규칙에 따라 병합해 CSSOM의 결과물이 만들어짐
- CSS의 가상요소(after, before 등)은 CSSOM를 통해 나오는 결과물이라 DOM을 조작하는 것이 아님
- 실제 브라우저가 랜더링한 것은 화면(뷰포트)에 보여지는 것은 DOM(DOM tree)과 CSSOM(CSSOM tree)의 결과물을 합친 '랜더트리(Render tree)'
- 이후 사용자가 내용이 변화됐음을 인지하게 됨

<br>

> __javascript__

- 이름 그대로 스크립트 언어(응용 소프트웨어를 제어하는 프로그래밍 언어 중 1개)
- 이미 존재하는 소프트웨어를 추가로 제어하기 위한 것으로, 주로 인터프리터 방식을 써서 사용됨
- javascript는 DOM API를 사용해 DOM을 동적으로 바꿀 수 있는 녀석. 
- 브라우저는 HTML과 CSS을 합쳐 웹페이지에 올리고, 자바스크립트를 위한 엔진을 써서 자바스크립트 실행
- HTML에서 script태그로 자바스크립트 코드/파일을 불러와야만 브라우저가 자체엔진으로 자바스크립트를 실행 가능
- 웹 브라우저 안에서 주로 사용되지만 다른 응용 프로그램의 내장 객체에도 접근할 수 있음
- 요즘에는 Node.js와 같은 런타임 환경을 통해 서버 프로그래밍에도 사용되는 중...
- 때문에 요즘에는 프로그램 언어의 스크립트/컴파일 개념 구분도 애매함

<br>
<hr>

## 브라우저의 랜더링 과정

    request/response -> loading -> scripting -> rendering -> layout -> printing

- request/response: 브라우저가 DNS에서 웹사이트의 서버 주소로 알아낸 후, 해당 서버에게 가서 HTML을 달라고 요청
- loading: 서버로부터 받은 HTML을 읽음
- scripting: html파일을 DOM으로 컨텐츠 영역 구조화, 후에 CSSOM으로 디자인쪽 영역 구조화 시킴(parsing)
- rendering: 브라우저가 DOM, CSSOM로 만든 DOM tree와 CSSOM tree를 합쳐 자기가 볼 수 있는 Render Tree 만듦
- layout: 요소들이 가진 스타일에 맞춰 브라우저가 뷰포트(실제 보여줄 화면)상 위치, 크기를 계산해 배치
- printing: 계산과 배치가 끝난 것들은 브라우저가 뷰포트 화면에서 보여주기

<br>

  > __*참고*__     
  >> visibility: hidden은 display: none과 다릅니다. 전자는 요소를 보이지 않게 만들지만, 이 요소는 여전히 레이아웃에서 공간을 차지합니다(즉, 비어 있는 상자로 렌더링됨). 반면, 후자(display: none)는 요소가 보이지 않으며 레이아웃에 포함되지도 않도록 렌더링 트리에서 요소를 완전히 제거합니다.

<br>
<hr>

## contains와 indexOf

<br>

> **contains(찾을 값)**

- DOM요소(node)에서 찾는 값이 포함돼있는지 확인하는 메소드
- DOM의 API
- 찾는 값이 현재 지정한 node의(찾는 곳) 자손인지를 확인 후 true/false 반환
- node와 javascript의 string은 다르다
- java의 contains과도 다르니 혼동하지 말 것

<br>

> **indexOf(찾을 값)**

- javascript의 문자열(string) 중에서 찾는 값이 포함돼있는지 확인하는 메소드
- 대소문자 구분함
- 찾는 값이 있으면 그 값의 첫 번째 위치 index 반환 / 찾는 값이 없으면 -1 반환

<br>
<hr>

## javascript의 null과 undefiend  

<br>

> **null**  
- 의도적으로 값이 없다는 것을 명시한 것.

<br>

> **undefiend**
- 값이 할당되지 않은 상태.   
- 존재하지 않는 부분의 값도 undefiend로 표현.

<br>
<hr>

## BOM API

- 브라우저마다 지원기능이 다를 수 있음
- window : 전역객체이며, 웹의 모든 객체는 window의 자식임
- window 객체의 속성(Property)과 기능(method)을 이용하면 자바스크립트로 브라우저를 쉽게 제어/조작 가능
- document : 웹 브라우저가 thml문서를 읽고 렌더링한 영역
- location : 현재 URL에 대한 정보
- history : 브라우저의 세션 기록(방문한 페이지)
- screen : 사용자의 화면 크기, 사용가능한 색상의 수

<br>
- html5기준 BOM API들

  > 1. form API  
  > 2. drag and drop API  
  > 3. geolocation API  
  > 4. stroage API
  > 5. indexedDB API  
  > 6. file API  
  > 7. Communication Api  
  > 8. Web Worker API  

<br>
<hr>

## 브라우저 API

- 웹 브라우저가 제공하는 기능 == web API
- DOM : 웹 컨텐츠 조작
- XMLHttpRequest / Fetch : 서버에서 데이터 가져오기
- Canvas / WebGL : 그래픽 시각화 / 그리기 / 처리등의 조작
- Web Audio / WebRTC : 오디오 / 비디오 조작 
- Web Storage : 웹 브라우저에 데이터를 저장하기 위한 공간(sessionStorage, localStorage)

  > *이 외에도 너무 많으므로 필요할 때 찾아보자..*  
  >>[Web API](https://developer.mozilla.org/ko/docs/Web/API)

<br>
<hr>

## 자주 사용하는 DOM API

1. document.queryselector()
2. document.querySelectorAll()
3. document.createElement()
4. tagName
5. parentNode.appendChild()
6. element.innerHTML()
7. element.style.left()
8. element.setAttribute()
9. element.getAttribute()
10. element.addEventListener
11. window.onload
12. window.dump
13. window.scrollTo
14. window.content
15. textContent


<hr>

> 참고 링크

  <https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/How_the_Web_works>  
  <https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction>  
  <https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript>  
  <https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction>  
  <https://developer.mozilla.org/ko/docs/Web/API>  
  <https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html>  
  <https://intrepidgeeks.com/tutorial/csr-vs-ssr-build-and-deploy>  
  <https://drafts.csswg.org/cssom/#common-serializing-idioms>  
  <https://velog.io/@sominpark/%EB%B0%B0%ED%8F%AC-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EB%B9%8C%EB%93%9C%EC%99%80-%EB%B0%B0%ED%8F%AC>  
  <https://poiemaweb.com/js-dom>  
  <https://frontdev.tistory.com/entry/CSSOM%EC%9D%B4%EB%9E%80-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC>  