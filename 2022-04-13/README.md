# TIL 2022-04-13

기존 복습 + 추가 공부

<hr>
<br>

# CSS margin과 padding 그리고 box-sizing

<br>

- 이 둘은 비슷하게 요소의 간격을 조정할 때 주로 사용된다
- `margin` : 요소의 바깥쪽 여백
- `padding` :요소의 안쪽 여백
- `width`, `height`처럼 숫자 뒤에 단위를 표시한다
- `margin`/`padding`은 요소의 `border`를 경계로 나뉜다

<br>

## margin

<br>

- 음수값이 적용 가능하다
- 부모요소에 테두리, 패딩이 없는 경우 자식요소 상/하 `margin`은 부모요소의 상/하`margin`으로 전달되어 계산된다
- 상/하 위치와 요소들의 관계에 따라 `height`값에 마진 병합(중복) 현상이 일어날 수 있다

<br>

## padding

<br>

- 음수값은 적용되지 않는다
- 값을 `%`로 하면 상/하/좌/우 모두 부모의 `width`, `height` 크기에 영향을 받는다 
- `padding`은 요소나 영역이 `width`,`height`에 영향을 준다는 것이 `margin`과의 가장 큰 차이점
- 이는 요소의 `box-sizing` 속성이 기본적으로 `content-box`가 적용되어 있기 때문
  
  > __content-box계산방식__ = `content`영역 + `padding` + `border`  
    + 세 영역을 모두 합친 값이 width / height값으로 적용  


### `margin`과 `padding`으로 요소를 특정 비율의 반응형으로 만들기

<br>

- 자식요소의 `padding`이 `%`일 때 부모요소를 기준으로 삼아 계산된다는 것을 이용하자 
- `block`인 부모요소에 `width`값을 `%`로 적용해 화면 크기에 따라 가변하도록 설정한다
- 자식요소에 `padding-top:n%`를 적용 시 부모요소의 `width`를 기준으로 자식요소의 높이가 자동계산된다
- 이를 이용하면 부모요소와 자식요소에 1:2, 4:3, 16:9, 1.5:1 등의 비율을 적용시킬 수 있다

```css
.parent1 {
  display: block;
  width: 400px;
}
.child1 {
  padding-top: 50%;  /* -> 부모 width 기준으로 자식 요소의 높이값 200px 추가 */
}

/* 부모 1 : 자식 2 비율 */
.parent2 {
  display: block;
  width: 100%;
}
.child2 {
  padding-top: 200%;  
}
```

<br>

- __부모가 100%일때__

> padding-top: 200%  -->  1 : 2 비율  
> padding-top: 75%  -->  4 : 3 비율  
> padding-top: 56.25%  -->  16 : 9 비율  
> padding-top: 66.66% -->  1.5 : 1 비율


<br>
<hr>

# 패럴랙스 스크롤링

<br>

- Parallax Scrolling
- 배경 이미지는 느리게 움직이게 하고, 사물 이미지는 빠르게 움직이도록 하는 것
- 원근감, 입체감을 느낄 수 있게 만드는 디자인 기법
- 웹에서는 스크롤에 따라 요소/배경에 시간차 애니메이션을 적용한다
- 스크롤을 할 때 개체마다 움직이는 속도를 다르게 적용하기도 한다
- 요소들간에 서로 다른 속도값을 가지게 만들어 역동성을 부여한다

<br>
<hr>

> 참고 링크    

  [CSS padding %](https://blogpack.tistory.com/794)
  [CSS box-sizing](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)  
  [CSS로 특정 비율 반응형으로 만들기](https://nuhends.tistory.com/69)  
  [패럴랙스 스크롤링이 적용된 사이트](http://www.iutopi.com/)  

