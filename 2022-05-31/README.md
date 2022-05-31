# TIL 2022-05-31

## TIL 학습/복습 내용

<br>

### 진행 목록

- js 
- vue / vuex / vue router
- URL parameters
- SPA
- Tree Shaking

<br>
<hr>
<br>

### non-prop

<br>

- class, css같은 것들은 non-prop
- 자식이 형제 컴포넌트가 있는 경우, `v-bind="$attrs"`를 적용한 애들한테 non-prop들이 붙는다

<br>


### Router

<br>

> `<router-link>`

- `<router-link>`는 `<a>`와 비슷한 개념
- `<router-link>`를 사용하면 vuejs가 관리할 수 있음
- 내부 링크는 `<router-link>`, 외부 링크는 `<a>` 사용하는 개념

<br>

> `<router-view>`

- `<router-view>`로 원하는 컴포넌트 보여지도록 지정

<br>

> `$router`

- 페이지 관련 명령 사용할 때 필요
- `this.$router` -> 명령 
- `push()`로 보통 페이지 이동시킴


<br>


> `$route`

- url 페이지 관련 정보 
- `this.$route` -> 현 url 페이지의 정보

<br>


### URL parameters(Query strings, URL query parameters”)

<br>

- url 주소에 미리 협의된 데이터를 쿼리파라미터를 통해 넘기는 것(웹 서버에 저장된 프로그램을 브라우저로 전달)
- 프로그램으로 입력 데이터를 전달하는 가장 단순/보편적 사용 방법
- URL을 이용해 정보를 전달하는 것
- `?` 질문형태(Query)의 문자열(String) 
- 보통 `GET` 메소드를 사용하면 자연스럽게 붙음
- `params`라고도 나옴

<br>

> 형식
  
    ? 파라미터1 이름 = 파라미터1 값 & 파라미터2 이름 = 파라미터2 값

<br>

- `?`로 시작
- `key=value`형태
- 파라미터가 여럿일 때에는 `&`로 묶고 잇는다

<br>

### SPA

<br>

- url에서 `#` 사용 필수
- 가장 큰 문제점은 SEO 이슈
- 페이지 이동처럼 보이게 처리하지만 실제 존재하는 페이지는 1개뿐
- 백엔드 서버 주소 추가 없이 작업 가능
- 실제 페이지 변경이 아니기 때문에 컨텐츠 수집이 어렵다

<br>

### Tree Shaking 

<br>

- 사용하지 않는 코드를 제거하는 방식 
- 나무를 흔들어서 죽은 나뭇잎을 제거하듯, 번들러 사용시 실제 필요없는 코드들을 제외하고 빌드하는 것
- Rollup이 좋은 성능을 보인다

<br>

```js
// X
import moduleName from 'PACKAGE';

// O
import { moduleA, moduleB } from 'PACKAGE';

```

<br>

- 좋은 번들러는 트리 쉐이킹으로 필요 없는 부분을 제거하지만, 완벽하진 않으므로 필요한 기능만 가져와 최적화시키자


<br>
<br>

> 참고

[SPA](https://poiemaweb.com/js-spa)
[URL parameters](https://www.semrush.com/blog/url-parameters/)