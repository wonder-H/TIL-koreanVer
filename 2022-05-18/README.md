# TIL 2022-05-18

## TIL 학습/복습 내용

<br>

### 진행 목록

- react useReducer
- React.memo
- useMemo
- useCallback

<br>

### 1. react useReducer

- 복잡한 상태변화 로직을 컴포넌트로부터 분리하기 위한 hook  
- 상태변화를 처리하는 함수의 로직이 길어지는 것은 좋지 않음  
- useReducer를 사용하면 컴포넌트로부터 상태변화 로직을 따로 분리시킬 수 있다  
- useState를 이용해 상태변화 시키는 것이 많아지면 .. 너무 무거워진다  
- useReducer를 사용해 컴포넌트로부터 분리시키고, switch case로 관리하자  

<br>

> 사용법    

<br>

비구조화 할당으로 사용  
useState처럼 [state,setState]에 있는 것 반환  
1. 상태
2. 상태 변화시키는 함수

- `[관리할 상태, dispatch] = useReducer(reducer, 상태의 초기값)`  
- `reducer`함수를 컴포넌트를 벗어난 영역에서 만들어 사용  
- 인자로 `state`,`action` 받고 `switch(action.type)` `case: return`로 적용  

<br>

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

<br>

리액트 4L

### 1. 좋았던 것(Liked) : hook에 대해 조금 더 이해했다. hook, hoc, useState, useReducer, useEffect 

### 2. 배운 것(Learned) : useMemo, useCallback, ReactMemo,  조금 더 구체적으로 구분

### 3. 부족했던 것(Lacked) : 명확한 실용성이나 필요성은 아직.... 

### 4. 바라는 것(Longed for): 부지런히 다음 단계 학습!  

<br>

__React.memo__  

- HOC(higher order components)  
- 컴포넌트 인자로 받고 새 컴포넌트 반환

- 컴포넌트 중 똑같은 props를 넘겨 받으면 랜더링 무시, 가장 최근 랜더링 결과를 재사용   
- props 변경 여부만 체크 -> 컴포넌트 내부에서 useState같은거 사용하면 리랜더링  
- 얕은 비교이므로 { } 비교 시 참조값이 같은지 확인 필요   
- (*boolean형 비교 함수 areEqual 추가해줘야 함)  

- 랜더링 방지용이 아님  
- 전체 구성 요소를 관리하기 위한 용도  
- 클래스형 / 함수형 컴포넌트 모두 사용 가능  

<br>

__useMemo__  

- 메모이즈된 값을 반환하는 hook
- 메모리에 값 저장 후 조건에 맞춰 사용, 성능 최적화용  
- 인자로 1-함수 2-Dependencies 받음.  

- 2-Dependencies인자 변경 시 받은 1-함수 재실행  
- 인자 전달에 Dependencies 없으면 매번 랜더링하고 반환   
- 함수 연산량 많을 때 이전 결과값을 재사용하기 위함  
- 기능 구성 요소에서 값 메모용  
- 값만 반환하는 데이터  
- 함수형 컴포넌트 안에서만 사용 가능   

<br>

__useCallback__  

- 렌더링 성능을 위해 제공되는 hook  
- useMemo처럼 인자로 1-함수, 2-Dependencies  
- 전달받은 의존성 인자가 안바뀌면 이전 생성한 함수만 재사용  
- 함수가 재생성되는 것을 방지하기 위함  
- setState에 함수형으로 인자 전달해서 업뎃   
- 함수형 컴포넌트 안에서만 사용 가능  