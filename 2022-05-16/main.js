//컴포넌트 생성
const App = {
  //반응형 데이터 || 반응성을 가진 데이터
  //데이터 바뀌면 화면쪽도 바뀌는 데이터! 
  //반응형 data는 함수여야 한다
  data() {
    return {
      // 반응형으로 사용할 데이터들 초기화해두기
      title: '',
      movies: [],
      page: 1,
      isFirst: true,
      msg: 'Hi, How are you doing today ? :D',
    }
  },
  // (이미 로직 처리된)계산된 데이터들 
  computed: {
    //getter개념
    //함수처럼 보이지만 값만 얻는 것이므로 데이터로 구분된다
    customMovies() {
      // 원본 데이터를 참조 후 수정본을 돌려줘야하므로 원본필수!
      return this.movies.map(movie => {
        return {
          poster: movie.Poster,
          title: movie.Title,
          id: movie.imdbID
        }
      })
    },
    // 캐싱 데이터 (이미 중복된 결과가 여러 곳에 사용될 때 중복연산 랜더링 방지)
    reversedMsg() {
      return this.msg.split('').reverse().join('')
    },
    //객체로 만들면 setter도 사용가능
    getset: {
      //값을 얻을 때 getter, setter사용을 위해 같이 넣어야함
      get() {
        //결과값만 얻음
        return this.msg.split('').reverse().join('')
      },
      //입력값이 변경되는 경우 setter로 들어온다
      //값을 지정할 때에는 setter를 사용
      set(value) { //변경값
        //Proxy객체로 들어오니 Target을 확인해보자
        console.log('computed setter', value)
      },

    }
  },
  //위에 명시한 반응형 데이터들을 등록 후 감시하는 역할
  watch: {
    //명시한 데이터 값이 변하면 동작
    movies(newValue, oldValue) {

      //원하는 동작 실행!!!!!!
      console.log('new', newValue)
      console.log('old', oldValue)
      //선언해 둔 메소드를 사용할수도 있다

    }
  },
  //값은 객체 형태로 생성
  //화살표X! 일반 함수여야 한다!
  methods: {
    //반응형 데이터에 접근하려면 this와 함께
    async searchMovies(isFirst) {
      if (isFirst) {
        //처음일 때에는 데이터 초기화
        this.movies = []
        this.page = 1;
      }
      let res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.title}&page=${this.page}`)
      res = await res.json()
      // console.log(res)
      const { Search, totalResults } = res
      // []로 온 Search에 ...로 []를 풀고 movies로 값 넘겨주기
      this.movies.push(...Search)
      this.page += 1;

    },
    reverseMsg() {
      return this.msg.split('').reverse().join('')
    }
  },
}


//Vue createApp + mount 이용해 컴포넌트 붙이기
Vue.createApp(App).mount('#app')