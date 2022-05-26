# TIL 2022-05-26

## TIL 학습/복습 내용

<br>

### 진행 목록

- C++, Java같은 클래스 방식 객체지향언어 / Javascript 프로토타입 방식의 객체지향언어의 클래스 차이
- REST API
- vuex, plugin

<br>
<hr>
<br>

### 클래스 방식 / 프로토타입 방식

- 상속을 구현하는 방식의 차이
- C++같은 클래스 기반에서는 생성자를 js의 함수처럼 쓸수없다
- C++은 생성 시 생성자가 불린다
- js는 `new`키워드로 직접적으로 함수를 부르고 쓴다


> js 는 인터프린터인 것도 있어서 공간 파악이 안되고, 런타임에서 밀어넣게 되는 상황. 때문에 함수를 직접 불러서 함수의 this 를 할당한다. C++ 은 컴파일 타임에 공간계산이 되기 때문에 이미 할당해놓고 생성자 함수로 넘어가서 값을 넣어주는 방식인 것

> 즉, js는 런타임에서 클래스를 구성해야 하는 상황. 때문에 상위 클래스에 접근하기 위해 prototype 개념으로 상위 클래스에 접근할 수 있도록 만든 방식

- 사용환경이 다르다보니 구조적으로 발생하는 문제를 최대한 보완한 것
- 싱글스레드인데 브라우저 API ajax로 비동기 처리가 되도록 진화(?)된 것과 비슷함


### API

- `curl` : Client URL (command line tool)    
  HTTP/HTTPS/FTP/LDAP/SCP/TELNET/SMTP/POP3 등 주요한 프로토콜을 지원
- `-X` : Request에 사용할 method 종류(`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) 기술


### `npm i --save` `===` `npm i`

- `npm info `패키지 이름 - 해당 버전의 최신 버전을 확인가능
- `npm i`에서 `--save`는 이제 생략 가능(버전 업!)
- 개발의존성만 `-D`붙이면 된다



### vuex / plugin

- `$`는 vuejs에서 일종의 내부기능 or 플러그인 이라는 표시 
- `store`는 기본적으로 반응형 데이터

#### `state`, `getters`, `mutations`, `actions`

- `state` = data
- `getters` = computed
- `mutations` = 데이터 수정되는 methods / commit으로 호출, 보통 vuex내부의 actions에서 commit사용해 호출
- `actions` = methods / dispatch로 호출, 보통 일반 컴포넌트(외부)에서 대부분 actions를 호출한다고 보면 됨

- `commit`은 왠만하면 컴포넌트단에서 안가져오는 것이 좋다
- 웬만하면 `dispatch`로 액션 호출 -> vuex 내부에서 `commit`사용해 뮤테 호출하고 데이터를 수정하자
- 수정권한은 뮤테이션만(동기) , 상태수정은 뮤테만 한다
- 나머지는 Actions로(비동기) , 상태제외한 모든 것은 액션에서!
- 때문에 액션이 받는 `context`안에는 `state`, `getters`, `commit`, `dispatch`가 기본으로 들어있다