import { nanoid } from 'https://cdn.skypack.dev/nanoid'
import Sortable from 'https://cdn.skypack.dev/sortablejs'


const App = {
  template: /* html */ `
    <input v-model="title" @keydown.enter="addTodo" />
      <ul ref="todoList">
        <todo-item 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo" 
        @update-title="todo.title = $event"
        @delete-todo="deleteTodo"></todo-item>
      </ul>`,
  data() {
    return {
      title: '',
      todos: [],
    }
  },
  watch: {
    //객체 형태로 생성해 깊은 확인을 하자
    todos: {
      handler() {
        // 값이 바뀌면 saveTodos 실행!
        this.saveTodos()
      },
      //참조형 안 참조형 데이터는.. 깊은 데이터 확인이 필요
      deep: true
    }

  },
  created() {
    //라이플사이클 이용해 데이터 가져와서 뿌리기
    this.fetchTodos()
  },
  mounted() {
    // 마운트되면 initSortable 실행
    this.initSortable()
  },
  methods: {
    //추상화하기 = 알아보기 쉽게(?) 만들자
    fetchTodos() {
      // todos 로컬스토리지에서 가져와서 parse하자
      // ||사용해서 로컬스토리지 값이 없으면 기본값으로 []적용
      this.todos = JSON.parse(localStorage.getItem('todos')) || []
    },
    saveTodos() {
      //로컬스토리지에 저장하려면 참조형이 아닌 문자열로해줘야한다
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    reorderTodos(oldIndex, newIndex) {
      //oldIndex번째 아이템을 ...으로 얕은복사 
      const clone = { ...this.todos[oldIndex] }
      // splice로 oldIndex번째부터 1개 삭제
      this.todos.splice(oldIndex, 1)
      // 얕은복사해둔 녀석을 붙여넣기
      // 인덱스 바뀐 위치에 복사해둔 것 덮어씌우기
      this.todos.splice(newIndex, 0, clone)

    },
    addTodo() {
      if (!this.title.trim()) {
        return
      }
      this.todos.push({
        id: nanoid(),
        title: this.title
      })
      this.title = ''
    },
    deleteTodo(todoToDelete) {
      const index = this.todos.findIndex(todo => todo.id === todoToDelete.id)
      this.todos.splice(index, 1)
    },
    // Sortable init후 사용
    initSortable() {
      // vue의 refs를 이용해 원하는 태그요소를 넣자
      new Sortable(this.$refs.todoList, {
        handle: 'li .handle', // 드래그 핸들이 될 요소의 선택자 입력
        delay: 50, // 클릭이 밀리는 것을 방지하기 위해 약간의 지연 시간 추가 
        animation: 0, // 정렬시 애니메이션 속도(ms) 지정
        forceFallback: true, // HTML5 기본 DnD(드래그앤드롭) 동작을 무시하고 내장 기능을 사용 -> 크로스브라우징 가능, HTML5 내장기능이 아니므로 성능적으로 조금 떨어진다

        // 요소의 DnD가 종료되면 실행할 핸들러(함수)를 지정
        // -> 정렬 완료 시
        onEnd: event => {
          console.log(event)
          // reorderTodos 실행!!!!!!!
          this.reorderTodos(event.oldIndex, event.newIndex)
        }
      })
    },
  }
}

//TodoItem 컴포넌트
const TodoItem = {
  template: /* HTML */ `
    <li>
      <div class="handle">:: </div>
        <!-- editMode일 때 -->
        <template v-if="!editMode">
        <span class="title"> {{ todo.title }} </span>
        <!-- 이벤트 버블링 현상을 막기 위해 .stop -->
        <the-button 
          color="skyblue"
          v-if="!editMode" 
          @click.stop="onEditMode">수정
        </the-button> 
        <the-button color="danger" @click="deleteTodo">삭제
        </the-button>
        </template>
        <!-- editMode가 아닐 때 -->
        <template v-else>
          <div @click.stop>
            <input 
              ref="titleInput"
              :value="title" 
              @input="title = $event.target.value"
              @keydown.enter="offEditMode(); updateTitle()"
              @keydown.esc="offEditMode" />
            <the-button 
              color="primary"
              @click="offEditMode(); updateTitle()">확인
            </the-button>
            <the-button  
              @click="offEditMode">취소
            </the-button >
          </div>
        </template>
    </li>
  `,
  props: {
    //porps로 받는 데이터를 명시적으로 설정
    todo: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      // update에 사용할 title 생성
      title: '',
      editMode: false
    }
  },
  methods: {
    async onEditMode() {
      this.editMode = true
      this.title = this.todo.title

      //특정 이벤트를 수동으로 추가했다면 제거도 수동으로..........
      //제거를 위해 함수 자체를 넘기자
      window.addEventListener('click', this.offEditMode)

      //inputEl에 focus()사용
      // inputEl.focus()
      // blur()도 가능

      //반응성 !== 화면갱신 -> 화면갱신은 마지막에 일어남

      //1. 콜백 넣고 적용하는 것 안에 넣기
      //2. await 키워드로 명시적으로 비동기 상황을 표시
      await this.$nextTick()
      //vue의 ref기능을 이용해 focus 사용
      this.$refs.titleInput.focus()
    },
    offEditMode() {
      this.editMode = false
      window.removeEventListener('click', this.offEditMode)
    },
    updateTitle() {
      this.$emit('update-title', this.title)
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo)
    }
  }
}


//slot 만들기
const TheButton = {
  template: /* html */ `
  <!-- style이라는 cumputed의 계산된 값을 적용 -->
    <button 
    :style="style"
    class="btn">
    <!-- 컨텐츠는 아래 slot에서 사용 -->
      <slot></slot>
    </button>
  `,
  props: {
    // 부모로부터 받은 값
    color: {
      type: String
    }
  },
  computed: {
    backgroundColor() {
      // 부모로부터 받은 값이 danger ? red : this.color
      return this.color === 'danger' ? 'red' : this.color
    },
    style() {
      switch (this.color) {
        case 'danger':
          return { //return 쓰면 break 필요없음
            backgroundColor: 'red',
            color: '#fff'
          }
        case 'primary':
          return {
            backgroundColor: 'royalblue',
            color: '#fff'
          }
        default:
          return {
            backgroundColor: this.color
          }
      }
    }
  }
}

const app = Vue.createApp(App)
app.component('todo-item', TodoItem)
app.component('the-button', TheButton)
app.mount('#app')