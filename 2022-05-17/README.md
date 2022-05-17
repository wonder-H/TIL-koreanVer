# TIL 2022-05-17

## TIL 학습/복습 내용

<br>

### 진행 목록

- react useReducer
- vue basics



### 1. react useReducer

복잡한 상태변화 로직을 컴포넌트로부터 분리하기 위한 hook
상태변화를 처리하는 함수의 로직이 길어지는 것은 좋지 않음
useReducer를 사용하면 컴포넌트로부터 상태변화 로직을 따로 분리시킬 수 있다

useState를 이용해 상태변화 시키는 것이 많아지면 .. 너무 무거워진다
useReducer를 사용해 컴포넌트로부터 분리시키고, switch case로 관리하자

> 사용법

비구조화 할당으로 사용
useState처럼 [state,setState]에 있는 것 반환
1. 상태
2. 상태 변화시키는 함수

`[관리할 상태, dispatch] = useReducer(reducer, 상태의 초기값)`
`reducer`함수를 컴포넌트를 벗어난 영역에서 만들어 사용
인자로 `state`,`action` 받고 `switch(action.type)` `case: return`로 적용

```js
const functionName = () => {

// dispatch 발생시 reducer가 처리하는 방식
// despatch -> reducer / state -> 'add' 로 초기값 넘김
const [state, dispatch] = useReducer(reducer, 'add');

//dispatch와 전달되는 {} === action {} === 상태변화
return (
    <div>
        {state}    
        <button onClick={()=> dispatch({type: 'add 1'})}>Add 'add 1'</button>
        <button onClick={()=> dispatch({type: 'add 2'})}>Add 'add 2'</button>
    </div>
    )
}



const reducer = (state, action) => {
    //action의 type에 따라 처리 -> 반환값은 state로 적용
    switch(action.type){
        case 'add':
            return state + 'add';
        case 'add 1':
            return state + 'add 1';
        case 'add 2':
            return state + 'add 2';
        default:
            return state;
    }
}

```


### 2. vue basics

- `$nextTick`
- 라이프사이클
- `IntersectionObserver`
- 클래스 바인딩 제어하기
- `ref`, `v-show`







