# TIL 2022-05-16

## TIL 학습/복습 내용

<br>

### 진행 목록

- memoization
- React useMemo useEffect, lifecycle hooks
- Vue basic study(binding, computed, mothods, data, etc)


<br/>

## memoization

<br/>

- 계산한 값을 메모리에 저장 후 동일 계산이 반복될 경우 다시 실행하지 않는 것
- 동적 계획법의 핵심 기술
- 중복 계산을 방지해 프로그램 실행 속도를 빠르게 하는 것이 목적
- 캐싱
- 속도를 위해 메모리 공간을 버리는 것
- 때문에 입력 범위가 제한된 함수에서 사용해야 효과가 뛰어나다
- GUI 렌더링/스프라이트/애니메이션 물리 등 반복되는 재귀함수를 처리 할 때 가장 좋은 성능을 발휘
- 입력값에 의존하지 않거나, 시간이 지나면 값을 변경 후 출력하는 작업에는 쓰지 말자


### vuejs 디렉티브

- 뷰에서 제공하는 `v-`시리즈를 지칭
- `v-model`, `v-bind`, `v-on`, `v-for`, `v-if` 등...

#### v-html

- vuejs에서 일반 HTML 태그/속성 등을 사용할 때 사용
- element.innerHTML로 값을 바꾸는 것과 같은 개념
- `{{ }}` 사용 불가

