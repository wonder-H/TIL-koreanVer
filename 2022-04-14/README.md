# TIL 2022-04-14

기존 복습 + 추가 공부

<hr>
<br>

## Css 변수

<br>

- css도 javascript처럼 변수를 정의하고 함수를 통해 접근할 수 있다
- 변수를 이용해 여러 값을 한 번에 변경할 수 있다는 장점이 있다
- `--` 를 두개 붙이면 변수 선언을 의미
- 사용시에는 `속성 : var('--변수명');`
- 정의되지 않은 변수 사용시 해당 속성 사용하지 않은 것으로 처리됨
- 변수가 정의되지 않았을 경우 사용할 값을 정할 수 있음

<br>

```css
.box{
  /* 변수만들어 스타일 지정 */
  --main-color: black; 
}
.box1{
  /* 속성에 변수값 적용 */
  color: var(--main-color);
}
.box2{
  /* 정의한 변수가 없으면 대신사용할 값 적용(red) */
  color: var(--main-color-1, red);
}
```

<br>
<hr>
<br>

## Css 미디어쿼리

<br>

- `@media`규칙을 이용해 서로 다른 매체에 적용할 스타일을 지정할 수 있다
- ` width`, `height`, `color`처럼 미디어 관련 속성을 이용해 스타일의 범위를 조절하는 것
- 매체별 맞춤 컨텐츠를 별도로 변경하지 않아도 스타일을 조건에 맞춰 자동적용 가능 
- 주로 `min-`속성값, `max-`속성값을 붙여서 사용  
- 은근히 노가다성이 짙다는 것이 함정

```css
/* css에서 사용시 */
@media only|not 매체유형(기본값 all) and (조건) { CSS코드; }
```
```html
<!-- html에서 사용시 -->
<link rel="stylesheet" media="매체유형 and|only|not (조건)" href="CSS파일URL"/>
```

<br>
<hr>
<br>

## 모듈과 번들러

<br>

### 모듈

<br>

- 특정 기능을 가진 작은 코드 단위
- 기능이 비슷한 것들을 모아서 하나의 의미 있는 파일로 관리하는 것
- 커다란 장치나 배열 내에서 비교적 작은 크기의 부품
- 독립적으로 설치되고, 교체되고, 사용될 수 있도록 설계된 구성요소

<br>

### 번들러

<br>

- 의존성이 있는 모듈 코드를 하나(또는 여럿)의 파일로 만들어주는 도구
- 지정한 단위로 파일들을 패키지로 만들어주는 도구

<hr>
<br>

## 모듈 번들러

<br>

- 웹개발에 있어 앱을 구성하는 자원(html,css,javascript,image 등)을 모두 각각의 모듈로 보고, 이를 모두 합쳐주는 도구
- 하나의 파일(또는 소량의 파일)로 결과물을 만들어주기 때문에 빠른 로딩 속도, 높은 성능을 얻을 수 있음
- Parcel, Rollup, Webpack등이 있다

<br>

### parcel

<br>

- 빠르고 간단하게 앱을 만들 때 좋음
- HTML파일 읽고 필요한 것들을 직접 참조하는 방식
- 때문에 설정파일 없이도 사용 가능
- 소규모로 진행하기에 적합

<br>

### rollup

<br>

- 모듈들의 공통부분을 파악하고 독립된 모듈로 분리도 가능
- 최소한의 설정으로 쉽게 만들고 싶을 때 사용
- webpack, parcel과 다르게 자체로더가 아닌 ES6 모듈을 기본으로 따른다는 장점
- 플러그인 사용
- 다른 두 번들러와 비교해 상대적으로 효율성을 가져갈 수 있음 

<br>

### webpack

<br>

- 오랜기간 발전/지원되어 안전하고 광범위한 기능 제공 
- 다양한 플러그인과 로더지원
- 복잡한 앱 개발도 문제없음
- 설정이 까다롭고 학습시간이 오래걸림

<br>
<hr>

> 참고

> [모듈](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%93%88%EC%84%B1_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D))  
> [css 변수](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)  
> [미디어 쿼리 사용](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)