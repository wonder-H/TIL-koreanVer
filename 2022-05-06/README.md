# TIL 2022-05-06


## TIL 학습/복습 내용

<br>

### Javascript 모듈 불러오기 방식

<br>

#### 1. ESM(ECMAScript 방식)

- 객체 구조분해 할당 비슷한(?) 방식
- as를 쓰면 원하는 이름으로 적용할 수 있다

```js
//import로 모듈 가져오기
import { name as name1, name2 } from './test.js'

//모듈 내보내기 (여러 개 가능)
export const name1 = {
  a: 1,
  b: 2
}

//모듈 내보내기(1개만 가능)
export defalut 
```

<br>


#### 2. CommonJS 방식

- 옛날(?)Node.js에서 사용하던 방식
- 요즘 node.js에서는 ESM방식 적용해주긴한다
- 런타임에서 사용하는 방식


```js
//require로 모듈 가져오기
const path = require('path')
const _ = require('lodash')

//모듈 내보내기
module.exports = {
  a: 1,
  b: 2
}

```

<br>

### Element, NodeList

- element는 단순 요소 (태그 1개 같은 것)
- NodeList는 전체 구조 (div가 가지고 있는 어떤 영역/구조 같은 것)
- 노드 안에 요소들이 있는 것!(조직과 조직원의 관계...?)

- 노드리스트를 확인하면 영역이 잡힌다
- 우리는 노드가 아닌 요소들을 사용하는 것

<br>

### 그 외(추후 정리 + 공부 필요)

- Memory Heap, Call Stack, Event Loop
- prevent default / 기본 동작 방지
- stop propagation / 이벤트 버블링 정지
- 이벤트 버블링 vs 이벤트 캡처링
- currentTarget vs target
- event 종류 (input, click, keydown, resize, moveenter, mouseleave) 등

<br>

> 참고 링크


[이벤트 루프](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop#%EC%8A%A4%ED%83%9D)  

[Call Stack, Queue, Web API](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)