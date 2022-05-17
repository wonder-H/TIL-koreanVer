const App = {
  data() {
    return {
      title: '',
      page: 1,
      movies: [],
      total: 0,
      isVisibleObserver: true,
    }
  },
  methods: {
    async searchMovies(isFirst) {
      if (isFirst) {
        this.movies = []
        this.page = 1
      }
      let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${this.title}&page=${this.page}`)
      res = await res.json()
      console.log(res)
      const { Search, totalResults } = res
      this.movies.push(...Search)
      this.page += 1
      this.total = Number(totalResults)


      this.isVisibleObserver = false;
      //setTimeout을 이용해 boolean값 바꾸기
      //콜스택이 다 비어진 후 web API가 실행되므로 시간을 지연시킬 수 있음
      // setTimeout(() => {
      //   this.isVisibleObserver = true;
      // })

      //vue의 setTimeout 비슷한 기술
      this.$nextTick(() => {
        this.isVisibleObserver = true;
      })
    }
  },
  //vuejs생성 직후
  //아직 html요소로 붙기 전
  //이쪽을 mounted보다 먼저 고려해볼 것 
  created() {
  },
  //html요소 붙인 후
  mounted() {
    const io = new IntersectionObserver((entries) => {
      // 화면에 들어오는지 여부를 forEach의 entry를 통해 확인
      entries.forEach(entry => {
        //요소가 화면에 들어오면
        if (entry.isIntersecting) {
          console.log('교차됨!')
          this.searchMovies()
        }
      })
    })
    //vue에게 ref로 알려줬던 요소(.observer를 가진 요소 === div)
    io.observe(this.$refs.observer) //div가 화면에 들어오는지 확인해보기

  },
  computed: {
    //아직 남은 영화목록이 있는지?
    hasTheRest() {
      return this.total > this.movies.length
    }
  }
}
Vue.createApp(App).mount('#app')
