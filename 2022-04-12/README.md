# TIL 2022-04-12

기존 복습 + 추가 공부

<hr>
<br>

## CSS의 filter

<br>

- 요소 자체를 필터처리해 포토샵과 비슷한 효과를 낼 수 있다
- 대부분의 경우 %로 처리가 가능해서 유용할 수 있다
- filter속성이 적용된 요소에 효과가 적용된다

<br>

- __filter 옵션__

  |옵션|설명|
  |---|---|
  |none(%)|효과없음|
  |blur(%)|흐림효과|
  |brightness(%)|밝기 조절|
  |contrast(%)|이미지의 대비|
  |drop-shadow(x, y, blur, color)|그림자 효과. x축, y축 위치, 흐림정도, 색상|
  |graysclae(%)|회색조(흑백)로 변환|
  |hue-rotate(deg)|이미지에 색조 회전을 적용. 0~360까지|
  |invert(%)|색상 반전|
  |opacity(%)|투명도|
  |saturate(%)|채도|
  |sepia(%)|세피아톤|

<br>
<hr>

## CSS의 backdrop-filter

<br>

- backdrop-filter는 요소의 배경에 효과를 적용해준다
- backdrop, 말그대로 그 요소의 배경쪽에 적용한다는 의미이다
- 요소의 '뒤'에 적용하기 때문에, 효과를 확인하려면 요소나 요소의 배경을 반투명하게 설정해야 한다
- 보통 blur만 사용하는 경우가 많다

<br>

- __backdrop-filter 옵션__

  |옵션|설명|
  |---|---|
  |none(%)|효과없음|
  |blur(%)|흐림효과|
  |brightness(%)|밝기 조절|
  |contrast(%)|이미지의 대비|
  |drop-shadow(x, y, blur, color)|그림자 효과. x축, y축 위치, 흐림정도, 색상|
  |graysclae(%)|회색조(흑백)로 변환|
  |hue-rotate(deg)|이미지에 색조 회전을 적용. 0~360까지|
  |invert(%)|색상 반전|
  |opacity(%)|투명도|
  |saturate(%)|채도|
  |sepia(%)|세피아톤|

<br>
<hr>

## Web Storage API

<br>

- Web Storage API란 브라우저에서 제공하는 데이터를 저장 기능이다.
- '키'-'값'의 형태를 가진다.
- 저장된 데이터들은 서버로 전송하지 않기 때문에 원하는 정보만 서버로 보내서 저장할 수 있다!
- ​세션스토리지, 로컬스토리지 두 가지로 분류된다.
- 분류에 맞게 `.sessionStorage`와 `.localStorage`로 사용가능하다.

  <br>

### 세션스토리지

+ 페이지 세션이 유지되는 동안 브라우저가 저장공간을 제공(브라우저 탭이 닫히거나 꺼지면 데이터가 사라진다!)
+ 저장 공간이 최대 5MB, 쿠키보다 크다
   
  <br>

### 로컬스토리지

  <br>

+ 저장 공간이 쿠키, 세션스토리지보다 크다
+ 유효기간 없이 데이터를 저장(세션스토리지와 다르게 브라우저를 닫고 열어도 데이터 남아있음)
+ 자바스크립트를 사용하거나 브라우저 캐시, 로컬 저장 데이터를 지워야만 데이터가 사라짐
+ 사용자의 정보를 로컬에 영구적으로 저장하는 것
+ 주로 자동 로그인 저장기능 같은 것을 만들 때 사용

<br/>

>__주의사항__

+ 웹 스토리지는 오직 문자형 데이터 타입만 지원하기 때문에 JSON 형태로 데이터를 읽고 쓰는것이 좋다
+ HTML5를 지원하지 않는 브라우저의 경우 사용 불가
+ 브라우저에서 쉽게 확인가능하니 비밀번호같은 중요한 정보들은 저장금지!

<br>

>__자바스크립트에서 로컬스토리지 사용하기__ 

```javascript
  // sdtItem으로 로컬스토리지에 데이터 추가
  localStorage.setItem("key", value);

  // getItem으로 로컬스토리지에 저장했던 데이터 가져오기
  localStorage.getItem("key");

  // removeItem으로 로컬스토리지에서 원하는 데이터 삭제
  localStorage.removeItem("key");

  // 모든 로컬스토리지 데이터 삭제
  localStorage.clear();

  // 로컬스토리지에 저장된 키/값 쌍의 개수 확인
  localStorage.length;

  // 반복문과 로컬스토리지의 key를 이용해 데이터 가져오기
  for(let i =0; i < localStorage.length; i++){
     console.log(localStorage.getItem(localStorage.key(i)));
  }

  //json으로 로컬스토리지에 저장
  localStorage.setItem('json', JSON.stringify({a: 0, b: 1, c: 2}))

  //로컬스토리지의 데이터 json으로 불러오기
  JSON.parse(localStorage.getItem('json')) // {a: 0, b: 1, c: 2} 출력
```

<br>
<hr>

>참고 링크    
  [CSS filter](https://developer.mozilla.org/ko/docs/Web/CSS/backdrop-filter)  
  [Web storage API](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)  
  [Web storage](https://www.zerocho.com/category/HTML&DOM/post/5918515b1ed39f00182d3048)  

