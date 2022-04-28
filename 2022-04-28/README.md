# TIL 2022-04-28

js 

<hr>
<br>

## 재귀함수 

- 함수 내에서 자기 자신의 함수를 호출하는 것
- 종료조건이 있어야 종료됨
- 종료조건을 설정하지 않으면 무한 반복...
- 반복문 비슷하게 계속 무한루프!


## 원시형 데이터 

- 원시형은 똑같은 값이 또 다른 곳에 저장되지 않는다
- 값이 이미 메모리에 있으면 그 곳으로 간다


## 쿼리스트링

- ?표부터 시작
- api(키)를 넣고, 값을 담는다
- `?key=value&key=value&key=value`와 같은 형태


## 비동기 처리

- 서버와 request & response 통신을 다루는 것
- `fetch()`, `.then()`, `catch()`
- `promise()`, `resolve()`, `.then()`, `catch()`
- `async & await`, `catch()`
- axios 라이브러리를 이용하면 조금 더 쉽게 비동기 처리가능!!
- `catch()`를 이용해서 에러핸들링 하자


```js

fetch() //fetch()에 있는 method의 기본값은 GET이므로 안써도 자동적용은 된다
//fetch를 쓰면 꼭 json으로 한번 더 풀어줘야한다



fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen')
  .then(res => res.json())
  .then(res => {

    console.log(res)

    axios({ //axios를 이용해서 데이터 받기
      
      url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
      method: 'GET'

    })//구조분해 할거면 {}에 괄호()를 감싸줘야한다
    //- > res로 오는 녀석 중에서 .data라는 녀석만 받을 것
      .then(({ data }) => console.log(data))
  })


//fetch가 아닌 axios로 사용하는 경우

//async함수 안에 await이 들어가야만 사용가능
//비동기 함수를 쓰겠다고 명시부터 하는 것
async function(){ 
  const res = await axios({
    url:'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
    method: 'GET'
  })
}


// ===================================================================

const moviesEl = document.querySelector('.movies')
const anotherMoviesEl = document.querySelector('.another-movies')
getMovie(1, moviesEl)
getMovie(1, anotherMoviesEl)

//이벤트리스너를 활용해 함수 호출
const btnEl = document.querySelector('button')
btnEl.addEventListener('click', () => {
  getMovie(2, moviesEl)
})

async function getMovie(page, containerEl) {
  //구조분해할당 { } 으로 바로 res에서 원하는 data받기
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=${page}`,
    method: 'GET'
  })
  console.log(data)
  const movies = data.Search
  renderMovies(movies, containerEl)
}
function renderMovies(movies, containerEl) {
  //받은 데이터들을 forEach로 풀어내기
  movies.forEach(movie => {
    console.log(movie)
    //요소 생성 후 값 넣어서 화면에 출력 
    const movieEl = document.createElement('div')
    movieEl.textContent = movie.Title
    containerEl.append(movieEl)
  })
}

```


## DOM / 가상 DOM 

> DOM

- createElement로 생긴 요소는 메모리에만 가상으로 들어가 있다
- 때문에 append로 실제 화면에 출력되게 추가 처리를 해줘야한다
- append는 지정한 요소 뒤, prepend는 지정한 요소 앞에서 생성
- 요소가 수정/생성/제거되면 브라우저는 변경된 것을 보여주기 위해 랜더링을 한다
- 요소 1개만 변하더라도 브라우저의 랜더링이 발생해 메모리 문제가 생김 -> 느려진다!


> 가상 DOM

- 위의 요소제어/랜더링 문제를 개선하고자 나온 방법(나름 신기술)
- 가상돔의 경우 이미 DOM을 메모리에 복제 후 이벤트 발생 시 메모리 내 DOM에 적용한다
- 메모리 DOM의 변경 사항을 실제 DOM과 비교한다
- 가상돔과 실제 DOM의 차이점만 파악 후 변경된 것들을 한번에 호출해 실시간으로 적용한다



## 기타 배운 내용

- html에서 cdn으로 받아온것은 전역으로 등록이 되기 때문에 js에서 쓸 수 있다
- 깃에서 협업을 할 때 init을 사용하면 깃은 완전히 다른 파일/history라고 인식하니 주의
- 그냥 fork 후 브랜치 따서 작업 후 나중에 풀리퀘 하던지, clone으로 레포 내려받고 푸시마다 리퀘 요청하는 것이 고생안하는 길이다

