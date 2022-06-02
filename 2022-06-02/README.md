# TIL 2022-06-01 + 06-02

기존 복습 + 추가 공부

---

- ssr, ssa 기본 개념
- js
- webpack
- vue, vuex, router

## router

- route는 페이지랑 비슷함

### 동적 라우트 매칭

- `:`를 사용해 동적라우트 사용 표시

### 중첩 라우트

- 컴포넌트 안에 `<router-view>`를 넣어놓고
- 라우트 설정에서 상위 라우트 주소에서 `children:[]`으로 `path`, `component` 넣기

### 라우트 이동

1. html 템플릿 코드로 이동
   `<router-link :to="...">` -> `<a>`와 비슷하게 누르면 이동

2. js 코드로 이동시키기
   `this.$router.push(...)` -> 원하는 라우트 페이지로 이동가능  
   `path`, `name`, `params`, `query`, `hash` 사용할 수 있음

```js
//라우트 경로지정 + 변수사용
router.push(`/user/${username}`); // -> /user/vvon

// {}형태로 path: 변수 가능
router.push({ path: `/user/${username}` }); // -> /user/vvon

//쿼리형태
router.push({ path: "/register", query: { type: "a" } }); // -> /register?type=a

//파람으로 넣으면 route로 param을 확인할 수 있음
router.push({ name: "user", params: { username } }); // -> /user/vvon

//파람은 path랑 같이 넣을 수 없음
router.push({ path: "/user", params: { username } }); // -> /user
```
