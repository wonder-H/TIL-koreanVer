# TIL 2022-05-19

## TIL 학습/복습 내용

<br>

### 진행 목록

- 뷰 공부
- 알고리즘 공부

<br>
<hr>
<br>

- 팩토리 함수 : 참조형 데이터([],{},f)를 `return`하는 함수  
   vue의 `data(){ return {} }` - > 팩토리 함수

- 참조형 데이터는 메모리를 참조하기 때문에 데이터가 가변할 수 있다
> 이 때 객체 형태로 데이터를 사용해버리면 다른 곳에서 수정 시 영향이 생기니 주의해야한다
> 때문에 데이터는 함수로 만들어서 반환하는 방식으로 해줘야함
> 리턴으로 나오는 객체 === 새로운 참조형 객체 리터럴 생성 ==> 데이터가 섞이지 않는다

<br>

- 단방향 데이터 바인딩 `v-bind:` (`:`), `v-on:`(`@`)
- 양방향 데이터 바인딩 === `v-model` 입력값 바뀌면 출력값도 바뀐다

<br>

- Proxy 객체 : 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동이 생기기 전 발생(일종의 감시...??)
- getter setter사용가능
- Vue 3부터 proxy 사용

<br>

- 컴포넌트: 재사용을 기본 전제로 하는 것
- 한 파일에서 다 관리할 수 없으니 컴포넌트로 쪼개자
- `props` / `emits` - 반응성이 있으나 부모/자식간 통신만 가능
- `provide` / `inject` - 반응성이 없는 데이터 전달 방식 

<br>

```html 
<!-- html -->

    <div id="app">
    <!-- v-bind + v-on 으로 양방향 만들 때 -->
    <!-- :value="title" @input="title = $event.target.value" -->
    <!-- 한글 사용할 때에는 v-model이 제대로 작동안하니 위의 방법을 쓰자.. -->
    <input v-model="title" />
    <h1>{{ title }}</h1>

    <input type="checkbox" v-model="checked" />
    <!-- radio에서 원래 구분을 위해 name속성을 필요로하지만 vue는 필요없음-->
    <input type="radio" v-model="radio" value="h1" />
    <input type="radio" v-model="radio" value="h2" />
    <h2>{{radio}}</h2>

    <!-- v-model .lazy 속성 = html의 change 이벤트 -> 값이 바뀌어야만 발생 -->
    <!-- :value="title2" @change="title2 = $event.target.value" -->
    <input v-model.lazy="title2" />
    <h1>{{ title2 }}</h1>

    <!-- v-model .number 속성 = number로 형변환 -->
    <input v-model.number="title3" />
    <h1>{{ typeof title3 }}</h1>
    </div>

```

<br>

```js
//vue

const App = {
  data() {
    return {
      title: 'value',
      checked: true,
      radio: '',
      title2: '',
      title3: '',
    }
  },
}

Vue.createApp(App).mount('#app') //메소드 체이닝

```