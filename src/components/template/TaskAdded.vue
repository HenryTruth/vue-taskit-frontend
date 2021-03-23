<template>
  <section class="task_added_task">
    <div class="task_added_button">
      <button @click="goDialogue">Add Task</button>
    </div>
    <!-- {{ falseComplete }} -->
    <div class="task_added_card_card">
      <card
        v-for="todo in falsetodos"
        :key="todo.id"
        @dblclick="iscompleted(todo)"
        v-if="falsetodos"
      >
        <template v-slot:content>
          <p>{{ todo.title }}</p>
          <img
            src="./../../assets/del.svg"
            class="trash"
            alt=""
            @click="deleteTodo(todo.id)"
          />
        </template>
      </card>
      <div :class="{'spinner-spinner': checkSpinner}" class="loader-spinner" v-if="nowSpin">
        <figure>
          <img src="./../../assets/re-load.svg" alt="">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";
import { store } from "../../store";

let In;
export default {
  components: {
    Card,
  },
  data() {
    return {
      startSpinner:store.state.startSpinner,
      spinner:store.state.spinner,
      todos: store.state.todos,
      foltodos: store.state.foltodos,
      falsetodos: [],
      authenticated: store.state.authenticated,
    };
  },
  computed: {
    goDialogue() {
      this.$router.push("/taskdialogue");
    },
    nowSpin(){
      return this.spinner
    },
    checkSpinner(){
      return this.startSpinner
    },

    refresh() {
      this.$router.go(this.$router.go(this.$router.currentRoute));
    },
  },
  methods: {
    iscompleted(todo) {
      todo.completed = !todo.completed;

      var myHeaders = new Headers();
      myHeaders.append("Authorization", localStorage.getItem("token"));

      var formdata = new FormData();
      formdata.append("title", todo.title);
      formdata.append("completed", todo.completed);

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(`http://localhost:8000/api/todos/${todo.id}/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
        })
        .then(
          (In = this.falsetodos.findIndex((item) => item.id === todo.id)),
          this.falsetodos.splice(In, 1)
        )

        .catch((error) => console.log("error", error));
    },

    deleteTodo(id) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", localStorage.getItem("token"));

      var formdata = new FormData();

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(`http://localhost:8000/api/todos/${id}/`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result)
        })
        .then(
          (In = this.falsetodos.findIndex((todo) => todo.id === id)),
          this.falsetodos.splice(In, 1)
        )
        .catch((error) => console.log("error", error));
    },
  },

  mounted() {
    this.spinner = true
    if (!this.authenticated) {
      this.refresh();
    }

    let i = 1;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var formdata = new FormData();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    setTimeout(() =>{
      fetch(
      `http://localhost:8000/api/user/${localStorage.getItem(
        "username"
      )}/todos/?page=${i}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        for (const i in result) {
          this.todos = {
            ...this.todos,
            title: result[i].title,
            id: result[i].id,
            completed: result[i].completed,
          };
          this.foltodos.unshift(this.todos);
        }

        for (const i in this.foltodos) {
          if (this.foltodos[i].completed == false) {
            this.falsetodos.push(this.foltodos[i]);
          }
        }

        if(this.falsetodos){
          this.spinner = false
        }

        if (!this.falsetodos.length) {
          this.$router.push("/addTask");
          
        }
      })
      .catch((error) => {
        console.log("error", error)
        this.spinner = true
        this.startSpinner = false
        });
    },800
    )
  },

  beforeRouteEnter(to, from, next) {
    console.log("beforerouteenter");
    if (localStorage.getItem("active")) {
      next();
    } else {
      next("/");
    }
  },
};
</script>
    
<style lang="less">
/* media queries */

/* mobile viewport */
@mobile-lg: ~"only screen and (min-width:480px)";
@mobile-sm: ~"only screen and (min-width:320px)";

/* ipads,Tablets viewport */
@tablet-lg: ~"only screen and (min-width:768px)";
@tablet-sm: ~"only screen and (min-width:481px)";

/* small screen and laptops viewport */
@laptops-lg: ~"only screen and (min-width:1024px)";
@laptop-sm: ~"only screen and (min-width:769px)";

/* Desktop and large screen viewport */
@desktop-lg: ~"only screen and (min-width:1200px)";
@desktop-sm:~ "only screen and (min-width:1025px)";

/* Extra large screens, Tv viewport */
@screens: ~"only screen and (min-width:1201px)";

.task_added_task {
  display: grid;
  grid-template-rows: 0.02fr 0.95fr;

  .task_added_button {
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
    max-height: 15vh;

    button {
      justify-self: center;
      background-color: #472f92;
      padding: 1.3rem 5.5rem;
      margin: 2rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 2.5rem;
      color: white;
      a {
        color: white;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .task_added_card_card {
    height: fit-content;
    color: black;
    margin: 1rem;
    border-radius: 0.3rem;
    display: grid;
    grid-template-rows: 1fr;

    @media @laptop-sm {
      grid-template-columns: repeat(2, 1fr);
    }

    @media @laptops-lg {
      grid-template-columns: repeat(3, 1fr);
    }

    .loader-spinner{
      grid-column-start: 2;
      grid-column-end: 3;
      justify-self: center;
      align-self: center;
      height: 50rem;
      @media screen and (max-width:769px){
            margin-right: 15rem;

      }


      img{
        // transform-origin: 44% 50%;
        // animation: load 1.2s infinite linear;
        margin-top: 20rem;
      }

      
    }
    .spinner-spinner{
      img{
        // transform-origin: 44% 50%;
        animation: load 1.2s infinite linear;
        margin-top: 20rem;
      }
      @keyframes load{
        0%{
          transform: rotate(0deg)
        }
        100%{
          transform: rotate(360deg);
        }
      }
    }

    .task_card_card {
      background-color: white;
      border-top: 0.5rem solid #472f92;
      margin: 1rem;
      height: 25rem;
      border-radius: 3px;
      padding: 1rem;
      @media @desktop-sm {
        margin: 7rem;
      }

      p {
        font-size: 1.8rem;
        line-height: 2.6rem;
        text-align: center;
      }

      .trash {
        transform: translateX(-10px) translateY(60px);
        margin-left: 1rem;
        font-size: 1.3rem;
        cursor: pointer;
        width: 4rem;
        height: 2rem;
        transition: 0.3s;

        @media @laptop-sm {
          &:hover {
            width: 6rem;
            height: 3rem;
          }
        }
      }

      .circle {
        color: green;
        font-size: 1.3rem;
        transform: translateX(230px) translateY(60px);
      }
    }
  }
}
</style>