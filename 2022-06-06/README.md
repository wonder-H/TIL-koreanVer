# TIL 2022-06-04 + 06-06

## TIL 학습/복습 내용

- js
- vuex
- vue

---

### Vue

1. data
1. props
1. computed
1. methods
1. watch
1. emits

---

#### 1. data

- 데이터 객체 반환하는 함수
- 반응형 데이터 or 반응성을 가진 데이터
- 함수 형태여야 한다
- 다루고 싶은 데이터를 선언해 초기화 후 `methods`와 같은 다른 곳에서 활용

```js

data(){
  return {
    data1: {},
    data2: '',
    data3: true,
  }
}

```

---

#### 2. props

- 상위 -> 하위로 데이터 전달
- `:`를 이용해 바인딩하고 `=`이용, `" "`안에 원하는 데이터를 지정해 보내기

```js

// :넘겨주는 변수명 = "넘길 부모 데이터"
<p :propdata = "parentdata"> </p>

```

---

#### 3. computed

- 계산된 값
- 계산을 위한 원본 데이터 필수
- `this`로 data쪽 값 가져올 수 있음
- 계산된 데이터는 반복 계산 안하므로 최적화에 좋음

```js
data(){
  return {
    data1: '',
    data2: [],
    data3: true,
  }
},
computed: {
  lists(){ // lists : 원본data2를 map써서 변경 후 얻은 값(데이터)
    return this.data2.map(i => {
      return {
        id: i.id,
        name: i.name,
        num: i.number
      }
    })
  }
}
```

- 기본적으로 getter지만 setter도 쓸 수 있다

```js

computed: {
  //mix를 객체로 만들고 get, set을 각각 지정
  mix: {
    get(){
      return this.first + this.last
    },
    set(newValue){
      const mixData = newValue.split(' ')
      this.first = mixData[0]
      this.last = mixData[mixData.length - 1]
    }
  }

}
```

---

#### 4. methods

- 함수 영역
- `this` 사용을 위해 일반함수로 정의해야 함(화살표 X)
- `this`로 데이터 영역의 값에 접근 가능

```js

methods: {
  methodName() {
    this.data = []
  },
  methodName2(){
    console.log(this.msg)
  }
}

```

---

#### 5. watch

- 지정한 data 값이 바뀌면 함수 실행
- 감시할 data 지정
- `this`를 이용해 메소드 영역의 함수 사용가능

```js
watch: {
  mix(newValue, oldValue){
    if(newValue.length > 0){
      console.log(oldValue)
      this.getName()
    }
  }
}
```

---

#### 6. emits

- 하위 -> 상위로 데이터 전달

```js

// @자식이 가진 이벤트 명 = "부모가 실행할 함수"
<p @clickedMsg = "changeMsg"> </p>

```

---

#### event실행함수, 인자

- 템플릿에서 특정 이벤트 발생 시 실행하는 함수에 `()`가 없으면 vue는 event값을 기본으로 넘겨준다

```html
<!-- 버튼 클릭 시 sayHi함수 실행 + event값 넘김 -->
<button @click="sayHi">click</button>
```

- 즉, event가 기본으로 넘겨지기 때문에 값이 falsy로 될 수 없다
- falsy / truthy 를 만들고 싶다면 `()`를 사용해 인수 없음을 표시해야 함

```html
<!-- true 전달 -->
<!-- >> true -->
<button @click="sayHi(true)">click 1</button>

<!-- 값 전달하지 않음 -->
<!-- >> falsy -->
<button @click="sayHi()">click 2</button>
```

---

#### `{{ }}`

- 템플릿 영역에서 사용
- 바인딩 데이터 화면에 출력
- js 표현식 기능 지원

```
{{ number + 2 }}
{{ true ? "Yes" : "No" }}
{{ str.split("").reverse().join("") }}
```

**_!_** 바인딩은 하나의 단일 표현식만 가능하다

- `if`와 같은 조건문 X, 삼항 연산자 O
- 선언+할당 동시 X
