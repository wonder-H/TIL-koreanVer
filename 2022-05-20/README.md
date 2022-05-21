# TIL 2022-05-20 + 05-21

## TIL 학습/복습 내용

<br>

### 진행 목록

- 알고리즘 공부
- 비동기 관련 공부(Ajax, 부분 랜더링/form, 서버통신)
- js와 node.js 공부
- 뷰 공부

<br>
<hr>
<br>

### 부분 랜더링 / html `<form>`과 `submit`

#### Ajax와 부분 랜더링

- 이전 html은 어떤 요소가 추가/수정/삭제되면 페이지 전체를 다시 랜더링해야 하는 
- Ajax 비동기 통신 방식이 나오면서 부분 랜더링이 가능해짐
- 페이지 전체가 아닌, 원하는 영역의 일부만 랜더링을 하는 방식으로 개선되면서 엄청난 변화가 생겼다

<br>

#### `<form>` + `submit`을 통한 서버통신

- 양식을 서버에 전달할 때 화면이 새로고침되는 현상이 일어난다
- 화면 전체가 랜더링 되는 이 현상은 어떤 요소가 변경되면서 일어나는 부분 랜더링의 개념과 다르다
- 서버에 정보를 보내고 결과를 받는 형태이며, 실제 그냥 url에 보내는 것
- 데이터를 넣어 `<link>`로 페이지를 여는 것과 비슷하다
- 때문에 `<link>`처럼 `target`을 추가로 넣을 수도 있고, `preventDefault`를 적용할 수도 있다
- 즉 리렌더링 개념이 아닌, 새로운 페이지가 열리는 방식인 것


### js / node.js

<br>

#### js의 범위

- js의 표준 내장 객체 + 메소드 + 언어적 문법까지가 js가 언어상으로 지원하는 범위
- 표준 내장 객체도 node.js/브라우저의 버전에 따라 지원이 다르다

> ex) node.js의 API `setTimeout()`은 JavaScript API의 `window.setTimeout()`과 비슷하지만 다르다  
> node.js의 `setTimeout()`는 코드의 문자열을 실행하기 위한 방식으로는 사용할 수 없다

<br>

### `eval`

- `eval`은 일부 프로그래밍 언어에서 제공하는 함수의 일종. 
- 문자열을 입력받아 그 문자열을 expression으로 처리 후 결과값을 반환하는 함수.
- evaluate의 약자로, 문자열이 코드라고 가정하고 평가해서 실행한다는 의미
- 일반적으로 코드를 동적으로 실행하기 위해 쓰인다
- C언어 같은 컴파일러 언어에서는 지원하지 않으며, Perl, JavaScript, Python 같은 스크립트 언어에 존재. 
- 사용자가 입력하는 값이나 프로그램이 작동하면서 변하는 값을 문자열의 형태로 반영하여 실행할 수 있기 때문에 간편하다.
- 그러나 치명적인 보안 위험이 있어 eval의 사용은 많은 경우에 금기시된다. 

<br>

### REPL

- REPL(read-eval-print-loop) / 인터랙티브 톱레벨(interactive toplevel), 랭기지 셸(language shell)
- 단일 사용자의 입력(예: 단일 식)을 취하고 이를 평가(실행)하고 결과를 사용자에게 반환시키는 단순한 상호작용 컴퓨터 프로그래밍 환경
- REPL 환경으로 작성된 프로그램은 구간마다 실행된다.
- 클래식 리스프 머신 상호작용 환경과 유사한 프로그래밍 인터페이스를 의미하기도 한다. 
- 프로그래밍 언어를 위한 명령 줄 셸 및 유사 환경을 의미하고, 기법은 스크립트 언어의 특징과 매우 닮아있다.

> ++ 조금 더 쉬운 설명

- REPL: 읽고(read) / 평가하고(evaluate) /출력하는(print) 과정을 / 반복(loop)한다는 것
- 윈도우 커맨드(CMD), UNIX/LINUX Shell처럼 사용자가 명령 입력 시 시스템이 값을 반환하는 환경을 의미

#### Node.js에서의 REPL

- Node.js 의 REPL 환경은 자바스크립트 코드를 테스팅 및 디버깅할때 유용하다

1. Read – 사용자의 값을 입력 받아 JavaScript 데이터 구조로 메모리에 저장
2. Eval – 데이터를 처리(Evaluate)
3. Print – 결과값을 출력
4. Loop – Read, Eval, Print를 사용자가 `Ctrl+C`를 두 번 눌러 종료할 때까지 반복




<br>

> 참고



[eval 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)  
[REPL](https://ko.wikipedia.org/wiki/REPL)  
[Node.js REPL](https://velopert.com/235)  
[js와 비동기처리](https://velog.io/@eassy/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%B2%98%EB%A6%AC)
