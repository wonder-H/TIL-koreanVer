/* 
================DOM의 html 요소 찾는 api===================

document == root document object 자체
element == DOM API에 의해 return 된 element 또는 element type 의 node
nodeList == elements들이 배열로 된 것
attribute == elements중 attribute node에 관한 인터페이스. 내부 객체는 배열처럼 index로 접근 가능
namedNodeMap == 특정 순서가 없는 배열 비슷한 것. 순서 없어서 index로 접근 안됨.


querySelector('선택자') -> 지정된 CSS선택자가 있는 요소 노드 1개만 찾기
querySelectorAll('선택자') -> 지정된 CSS선택자가 있는 요소 노드를 모두 찾기


*/

// HTML 요소(Element) 1개 찾기
const boxEl = document.querySelector('.box');
// .box인 녀석 착아서 boxEl에 할당

// addEventListener == 찾은 HTML 요소(Element) 1개에 이벤트 발생 시, 메소드 적용
// boxEl에 할당된 요소 1개에서 click이벤트 발생 시 함수 실행
boxEl.addEventListener('click', ()=>{ 
  
  console.log('you just clicked!');
  
  //찾은 HTML요소에 클래스 추가
  boxEl.classList.add('active');
  //추가한 .active가 실제 DOM의 요소에 포함되었는지 contains메소드로 확인 
  console.log(boxEl.classList.contains('active')); // -> .active가 추가되어 true 반환

  //찾은 HTML요소에 추가되어있는 클래스 제거
  boxEl.classList.remove('active');
  // .active가 실제 DOM의 요소에서 제거되었는지 contains메소드로 확인 
  console.log(boxEl.classList.contains('active')); // -> .active를 제거했으므로 flase 반환
})

// ===============DOM으로부터 여러개 찾은 요소들을 js에서 처리하기=============================

// querySelectorAll로 여러개 찾기 -> 유사 배열 데이터로 넘어옴
const boxEls = document.querySelectorAll('.box'); 

// forEach(처리할 값, 처리할 값의 index) == js에서 배열을 반복시켜 작업할 때 쓰는 메소드
// boxEls에 있는 여러개의 boxEl을 순차적으로 반복 작업 실행
boxEls.forEach((boxEl, i)=>{
  //boxEl(각각의 box)마다 .order-인덱스값+1 추가
  boxEl.classList.add(`order-${i + 1}`);
  console.log(i, boxEl)
})


// textContent == 값을 얻는 용도는 getter, 지정하는 용도는 setter로 불림
