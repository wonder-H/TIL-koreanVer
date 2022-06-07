# TIL 2022-06-07

## TIL 학습/복습 내용

- vue
- router
- pinia

---

### 라우터 네비게이션 가드

- 특정 페이지 접속 전 / 후 라우터 가드로 페이지 관리
- 주로 로그인 / 권한 / 인가 관련 처리를 위해 사용
- 일종의 검문소 역할
- 로그인 여부 구분을 위해 `meta`정보를 넣고 확인

---

#### pinia

- vuex보다 쉽고(?) 간결한 상태관리 플러그인
- core concepts가 3개 `state`, `getters`, `actions`
- vuex는 5개
- vuex에서는 전역등록 / 모듈화였지만 pinia는 무조건 모듈화
- vuex도 결국 모듈화하므로 pinia에는 전역 안넣은 듯
- pinia에서는 모듈화된 파일만 만들면 됨(index 필요 X)

### 적용법

- 템플릿 영역

```html
<!-- <template> 영역 -->

<!-- 모듈이름.state이름 -->
<div>{{ messageStore.message }}</div>
<div>{{ messageStore.reversedMessage }}</div>
```

- 스크립트 영역

```js
// <script> 영역

// 적용법 1-1
// state, getters 모두 mapState로 가져온다
// import { mapState, mapActions } from 'pinia'

// 적용법 1-2
//state, getters, actions 모두 mapStores로 들고오기
import { mapStores } from "pinia";

// 1이든 2든 모듈화된 파일 같이 불러와야함
import { useMessageStore } from "~/store/message";

export default {
  // vuex에서는 '모듈이름'을 넣어야 했으나
  // pinia에서는 import한 녀석을 사용
  computed: {
    // 적용법 1-1
    // state, getters는 computed에서
    // ...mapState(useMessageStore, ['message'])

    // 적용법 1-2
    // 불러온 mapStores를 []에 넣어서 한번에 적용
    ...mapStores([useMessageStore]),
  },
  methods: {
    // 적용법 1-1
    // actions는 methods에서
    // ...mapActions(useMessageStore, ['reverseMessage'])
  },
};
```
