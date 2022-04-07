# TIL 2022-04-07 
## 기존 복습 + 추가 공부
* * *

### 자식/하위 선택자 차이

* 하위 선택자

      부모태그 자식태그 

    + 부모 안에 포함되어있는 모든 해당요소에 스타일 적용(자식,후손,다른 것 다 가능) 
    + 지정한 요소(부모/하위) 사이에 다른 요소가 더 있어도 선택됨

<br>

* 자식 선택자

        부모태그 > 자식태그

    + 부모 안에 포함된 자식요소에만 스타일 적용
    + 핵심은 부모 한단계 아래에 있는 자식요소만 선택한다는 것

<br>

  ```html
  //html
  <section>  
    <div>
      <p>div > 첫번째p </p>
      <p>div > 두번째p <span> 두번째p안의 span </span> </p>
      <p>div > 세번째p <span> 세번째p안의 span </span> </p>
      <span> span2 <span> span2안의 span </span> </span>
    </div>
    <p>P-1</p>
    <p>P-2 <span>P-2안의 span </span> </p>
    <span>SPAN</span>
  </section>
  
  //css
  <style>
    section p{
      border: 1px dashed solid red;
    }
        
    section > p{
      border: 1px dotted orange;
    }
    
    div p {
      border: 1px solid yellowgreen;
    }

    span {
      border: 1px inset blue;
    }
  </style>
```

<br>

---

### 속성 선택자

* 기본 속성 선택자

      [속성이름] 또는 [속성이름="값"] 

  + 특정 속성을 가지고 있는 요소에 스타일 적용
  + 특정 속성이 특정 값을 가지고 있는 요소를 찾아 적용할 때에도 쓰임
  + html의 data속성을 이용하면 CSS로 쉽게 찾고 적용할 수 있어 유용함 

<br>

#### 문자열 속성 선택자

*  __[속성이름~="속성값"]__

     + 지정한 속성값을 포함하는 모든 요소에 스타일 적용
     + 단어 기준으로 포함여부 확인

  ```html
  //html
  <p title="abc"> 가나다 </p>
  <p title="abc def"> 라마바 </p>
  <p tiitle="adc-def"> 사아자 </p>
  <p tiitle="adcdef"> 차카타 </p>

  //css 
  <style>
  p[title~="abc"] {
    color: blue;
  }
  </style> 
  ```

---

* __[속성이름|="속성값"]__

    + 지정한 속성값이거나 속성값-으로 시작하는 모든 요소에 스타일 적용

```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css
<style>
  p[title|="abc"] {
    color: red;
  }
</style>  
```
---

*  __[속성이름^="속성값"]__ 

     + 지정한 속성값으로 시작하는 모든 요소에 스타일 적용
     + 문자열 기준으로 포함여부 확인

```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css 
<style>  
  p[title^="abc"] {
    color: green;
  }
</style>  
```
---

*  __[속성이름$="속성값"]__

     + 지정한 속성값으로 끝나는 모든 요소에 스타일 적용
     + 문자열 기준으로 포함여부 확인

```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css 
<style>
  p[title$="abc"] {
    color: green;
  }
</style> 
```

---

*  __[속성이름*="속성값"]__

     + 지정한 속성값을 포함한 모든 요소에 스타일 적용
     + 문자열 기준으로 포함여부 확인

```html
//html
<p title="abc"> 가나다 </p>
<p title="abc def"> 라마바 </p>
<p tiitle="adc-def"> 사아자 </p>
<p tiitle="adcdef"> 차카타 </p>

//css
<style>
  p[title*="abc"] {
    color: green;
  }
</style> 
```

<br>

---

## 가상클래스와 가상요소 선택자

* html 문서의 수정 없이 CSS만으로 디자인적 요소를 추가하는 것
* CSS를 적용하기 위한 클래스를 html에서 추가로 넣을 필요가 없어 좋음

### 가상클래스 선택자

* 실제 존재하는 html요소에 특정 이벤트/환경에 따라 클래스를 주고 css를 적용
* 실제 html에 클래스 추가 없이 디자인을 입히기 위한 것
* : 를 사용해 적용

      선택자:가상클래스 { 속성: 값; }


>1. :link - 방문하지 않는 링크에 스타일 적용
>2. :visited - 방문한 링크에 스타일 적용
>3. :hover - 웹 요소에 마우스 커서를 올려놓으면 스타일 적용
>4. :active - 웹 요소가 활성화(클릭할 때)되면 스타일 적용
>5. :focus - 웹 요소에 초점이 맞춰지면 스타일 적용
>     - input, select, textarea등 실제 초점이 맞춰지는 태그에 적용됨 
>     - 다른태그에 적용하려면 html의 tabindex속성(tabindex="-1") 활용해야 함
>6. :read-only - input태그에 readonly속성을 지정한 요소에 스타일 적용
>7. :required - input태그에 required속성을 지정한 요소에 스타일 적용


```html
//html
  <a href="#">a태그</a> 

//css
<style>
  a{color: blue;}
  a:hover{color: red;}
</style> 

```
---
<br>

* 순서에 따른 가상 클래스(nth-child, nth-of-type)
   
  >선택자:nth-child(n) 
    
    - 부모의 모든 자식요소 중 n번째를 찾고, 선택자도 맞으면 스타일 적용
    - 태그 유형에 관계없이 형제들 순서로 선택
    - 중간에 다른 유형의 요소들이 있어도 모두 자식으로 보고 순서만 구분함

  >선택자:nth-of-type(n)

    - 부모의 특정 자식요소 중 n번째에 스타일 적용
    - 해당되는 태그 유형으로 형제 순서를 나눈 후 선택
    - 중간에 다른 유형의 요소들이 있어도 모두 자식으로 선택되지 않고, 해당 요소만 선택되어 n번째 찾기

```html
//html
<section>
  <h1>nth-child와 nth-of-type 차이</h1>
  <p>p1</p>
  <p>p2</p>    
</section>

//css
<style>
  p:nth-child(2)  {  color: red;  } /* 내용p1인 p태그 선택 */
  p:nth-of-type(2)  {  color: blue;  }  /* 내용p2인 p태그 선택 */
</style>
```

> p:nth-child(2)의 경우
  
  - 부모의 자식들 중 2번째에 해당하는 것을 찾음
  - 내용 p1이 있는 태그는 p태그에 해당되므로 선택되어 스타일 적용
  - 만약 해당되는 태그가 조건에 걸었던 p태그가 아니라면 선택되지 않음 

<br>

> p:nth-of-type(2)의 경우

  - 부모의 자식들 중 p태그를 가진 녀석들 중 2번째를 선택

---

### 가상요소 선택자

* 실제 html에 존재하지 않는 가상의 요소를 만든 후 CSS를 적용하는 것
* 실제 존재하지 않는 요소를 만든다는 것이 가상클래스와의 차이점
* 가상클래스(:)와 다르게 구분됨(::) 

> ::before / ::after

  + before - 지정된 요소의 실제 내용 앞에 가상요소 생성
  + after - 지정된 요소의 실제 내용 뒤에 가상요소 생성
  + 이 요소들은 생성된 컨텐츠의 내부에 실제로 추가됨
  + 생성된 요소들은 인라인 속성을 가지고 있음
  + 보통 이미지나 글, 그라데이션 등을 추가하기에 좋음
  + html에 없는 요소를 생성하기 위해 __content__ 라는 가짜속성을 추가해야만 함

    * normal, string, image, counter, none, attr, " " 사용 가능

<br>

> ::first-letter / ::first-line

  + first-letter - 각 요소의 첫 글자 선택
  + first-line - 각 요소의 첫 번째 줄 선택
  + 블록 타입의 요소에만 사용 가능
  + 사용 가능한 속성이 한정적인 편
  
```
ont, color, background, margin, padding, border, text-decoration, text-transform, line-height, clear, vertical-align 등
```

<br>

> ::selection	

  + 해당되는 요소들 중에 사용자가 선택한 요소(더블클릭, 드래그)를 선택

<br>

> ::placeholder

  + input태그가 가진 placeholder속성에 스타일을 적용