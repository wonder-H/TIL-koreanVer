# TIL 2022-05-01


<br>

## TIL 학습/복습 내용

- node.js
- Javascript의 this
- lowdb
- CJS(CommonJS) / ESM(ECMAScript Modules) 

<br>

### node.js / .package.json

<br>

> 패키지 설치 후 ./package.json에 추가된 패키지 자동 업데이트를 원한다면?

  1. 개발용 의존성 패키지 설치시  
    `i -D` or `install -save-dev` 
    ./node_modules에 설치 후 package.json의 "devDependencies"에 목록 추가  

<br>

  2. 일반 의존성 패키지 설치시  
    `i` or `install`   
    ./node_modules에 설치 후 package.json의 "dependencies"에 목록 추가
 
<br>

package.json 파일

``` json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "scripts": {  //devDependencies에서 사용하는 모듈을 위한 스크립트 명령어
    "dev": "parcel index.html", //현재 모듈이 있는 프로젝트 내부에서만 사용가능
    "build": "parcel build index.html" // 실제 배포용으로 빌드할 때 사용
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5" //개발용 설치 모듈 parcel
  },
  "dependencies": {
    "lodash": "^4.17.21" //실제 빌드용으로도 쓰일 lodash
  }
}
```

<br>

### Javascript의 this

<br>

1. 일반 함수에서는 함수의 호출 위치를 기준으로 this가 정의된다
2. 화살표 함수에서는 화살표 함수 자신이 선언된 곳을 기준으로 this가 정의된다

<br>

### Lowdb

<br>

- JSON 파일 형식을 이용해 데이터를 저장하는 간단한 DB
- 브라우저, Nodejs에서 JSON 파일을 손쉽게 CRUD할 수 있도록 도와주는 패키지

<br>

### CJS(CommonJS) / ESM(ECMAScript Modules) 

<br>

> CJS(CommonJS)

<br>

- CommonJS는 원래 백엔드에서도 Javascript를 쓰기 위해 고안된 것이었다
- 원래 Node.js의 표준은 CommonJS였다
- CommonJS에서는 모듈 불러오기/내보내기로 `require`와 `module.exports`를 이용한다
- `module.exports`의 숏컷은 `exports`  
__!__ `exports`는 `module.exports`를 참조만 하는 역할이므로 섞어쓰면 안된다!

<br>

> ESM(ECMAScript Modules) 

<br>

- ES6로 넘어와서 모듈화를 지원하면서 `import`, `export`가 등장했다
- ES6의 `import`, `export`는 모듈 내 특정 부분만 불러오는 것이 가능하다  
  ex)  `import { name1, name2, name3 } from 'moduleA'`
- Node.js에서 ES6 문법을 도입했으나, 가끔 ES6+ 문법은 실행되지 않는 경우가 있다
- ES6에서 `export`는 자동 임포트, 자동 완성, 리팩토링 툴 지원 등이 가능하다
- ES6의 `export default`는 깔끔하게 1개의 모듈만 내보내는 용도라 불가능하다
- 객체/클래스로 보내지는 `export default`에서 사용하지 않는 일정 코드를 제거하기 어렵다

<br>

> CJS / ESM 관련 추가 내용

<br>

- require()와 import()는 동시에 사용할 수 없다
- ESM에서는 비동기 임포트가 불가능하다
- 그래서 CommonJS에서 `require()`는 코드 중간에 사용해도 된다(동적임!)
- ESM은 코드 중간에 `import`를 사용하는 것이 불가능하다(정적임!)
- 대신 ESM에서는 전체적인 파일 구조 파악이 가능하다
- 때문에 ESM은 CommonJS보다 안정성이 높다
