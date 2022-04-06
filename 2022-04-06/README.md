# TIL 2022-04-06 
## 기존 복습 + 추가 공부
* * *

### HTML의 인라인/블록 요소

1. 모든 태그는 인라인/블록 태그라는 두 분류 중 하나에 속함
2. 인라인 요소는 기본적으로 가로/세로를 최대한 줄이려는 성질을 가짐
3. 블록 요소는 가로줄을 최대한 늘리려는 성질을 가짐
4. 블록 박스는 레이아웃을 위해, 인라인 박스는 글자와 같은 내용을 위해 사용
5. CSS의 display속성을 이용하면 태그가 가진 기본 요소를 바꿀 수 있음(블록을 인라인으로 강제변경)

* 인라인 요소를 가진 태그들
  ```
  <span>, <a>, <abbr>, <acronym>, <b>, <bdo>, <big>, <br/>, <button>, <cite>, <code>,  <dfn>, <em>, <i>, <img>, <input>, <kbd>, <label>, <map>, <object>, <q>, <samp>, <small>, <script>, <select>, <span>, <strong>, <sub>, <sup>, <textarea>, <tt>, <var>,
  ```
  + 줄바꿈도 없고, 페이지의 전체 너비를 차지하지 않음
  + 태그로 둘러쌓인 내용(컨텐츠) 공간만 가져감
  + CSS의 width, height, margin 속성을 가질 수 있음
  + 인라인 요소들끼리 연속으로 추가되면 두 요소의 내용을 구별할 수 있을 정도의 간격만 생김 

<br>

* 블록 요소를 가진 태그들
  ```
  <div>, <address>, <article>, <aside>, <audio>, <blockquote>, <canvas>, <dd>, <div>, <dl>, <fieldset>, <figcaption>, <figure>, <footer>, <form>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <header>, <hgroup>, <hr>, <noscript>, <ol>, <output>, <p>, <pre>, <section>, <table>, <ul>, <video>
  ```

  + 항상 새 줄에서 시작
  + 왼쪽->오른쪽으로 페이지의 전체 너비를 차지
  + 한 줄 or 여러줄을 가질 수 있고, 요소 앞 뒤에 줄바꿈이 있음
  + 부모 요소의 크기만큼 자동으로 늘어나는 특징
  + 포함된 내용(컨텐츠)의 크기만큼 자동으로 세로값을 줄이려고 함
  + width, height, margin 속성을 가질 수 없음(속성 지정해도 무시됨)
  + 줄 간격(세로)을 조절하려면 CSS의 line-height 속성을 사용할 것

<br>

* 규칙
> 1. 블록 태그끼리는 서로 포함하거나 포함될 수 있음
> 2. 블록 태그는 인라인 태그를 포함할 수 있음
> 3. 인라인 요소는 자식으로 다른 인라인 요소만을 포함(블록태그는 자식으로 포함 불가)

<br>

---
### CSS display: inline-block
1. 성질은 블록이지만, 인라인 성질을 추가로 가진 것 
2. 너비를 설정할 수 있고, 요소들을 순차적으로 가로로 배치 가능

* __css의 float__
속성으로도 변경할 수 있으나 요즘은 거의 사용안함...

* display의 다른 설정값
  + none : 해당 요소가 가진 인라인 or 블록요소 제거
  + inline : 인라인요소로 변경 
  + block : 블록요소로 변경
