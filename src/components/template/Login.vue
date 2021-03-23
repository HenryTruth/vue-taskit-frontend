<template>
  <section class="forms_body">
    <div class='modal card sm-shadow' v-if="result_error">
      <p>{{error_message}}</p>
    </div>
    <form class="lg-shadow form-login" @submit.prevent="LoginUser">
      <p class="p-4">Log in</p>
      <div class="form-group">
        <figure class="fig-15">
          <img src="./../../assets/forms-login.svg" alt="">
        </figure>
        <input
          type="text" 
          class="fig-1_input_login" 
          placeholder="username"
          v-model="username"
        />
      </div>

      <div class="form-group">
        <figure class="fig-25">
          <img src="./../../assets/forms-lock.svg" alt="" />
        </figure>
        <input
          type="password"
          class="fig-2_input_login"
          placeholder="password"
          v-model="password"
        />
      </div>

      <button
        class="form_btn"
        style="color: white; border: none; outline: none; cursor: pointer"
      >
        <a>Log In</a>
      </button>
      <p class="form-text">
        Don,t have an account?<span><router-link to="/signup">sign up</router-link></span>
      </p>
    </form>
  </section>
</template>

<script>
import { store } from "../../store";
export default {
  data() {
    return {
      username: store.state.username,
      password: store.state.password,
      authenticated:store.state.authenticated,
      result_error:false,
      message:""
    };
  },

  computed:{
    error_message(){
      return this.message
    }
  },

  methods: {
    LoginUser() {
      var formdata = new FormData();
      formdata.append("username", this.username);
      formdata.append("password", this.password);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8000/api/auth/jwt/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

          if(result.token) {
            this.$router.push("/taskAdded");
            store.state.authenticated = !store.state.authenticated;
            localStorage.setItem("active", JSON.stringify(store.state.authenticated));
            localStorage.setItem("token",'JWT ' + result.token)

          }else if(result.non_field_errors){
            this.message = result.non_field_errors[0]
            this.result_error = true
            setTimeout(() =>{
              this.result_error = false
            },6000)
          }
        })
        .catch((error) => {
          console.log("error", error)
          if(error){
            this.message = 'server is down unable to login in please try again in some few min'
            this.result_error = true
            setTimeout(() =>{
              this.result_error = false
            },6000)
          }
          });
    },

    loginRefresh(){
      localStorage.removeItem('active')
      this.$router.go(this.$router.go(this.$router.currentRoute))
    }
  },
  
  mounted(){
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('title')
    localStorage.removeItem('todos')
    if(localStorage.getItem('active')){
          this.loginRefresh()
    }
    
  },


  watch:{
        username(newval,oldvalue){
            console.log('tryiing....')
            localStorage.setItem('username', newval)
        },
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

.forms_body{
  min-height: 60vh;
  display: grid;
  grid-template-rows:.1fr .2fr .1fr ;
  grid-template-columns: 1fr .85fr 1fr;

  @media @mobile-sm{
      grid-template-columns: .2fr 3fr .2fr;
  }

  @media @tablet-sm{
      grid-template-columns: .4fr 3fr .4fr;
  }

  @media @laptop-sm{
      grid-template-columns: 1.5fr 3fr 1.5fr;
  }

  @media @desktop-sm{
      grid-template-columns: 2fr 2.5fr 2fr;
  }

  @media @screens{
      grid-template-columns: 2fr 2fr 2fr;
  }

  .form-login{
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    height: 47rem;
    text-align: center;
            
    .p-4{
      margin-top: 40px;
      margin-bottom: 30px;
      color: #000;
    }

    .form-group{
        display: grid;
        grid-template-columns: 1.5fr 5fr;
        grid-template-rows:  50px 50px;
    }

    img{
        height: 40px; 
    }
    input{
        height: 40px;
        margin-top: 5px;
        border: #472F92 .2rem solid;
        width: 85%;
        font-size: 2rem;
        padding-left: 20px;
        border: #D9D9D9 .2rem solid;
        border-radius: .5rem;

        &:focus{
            border: #472F92 .2rem solid;
            outline: none !important;
        }

        &::placeholder{
            font-size: 1.7rem;
        }
    }

    .para-section{
        grid-row-start: 2;
        grid-column-start: 2;
        font-size: 1.6rem !important;
        color: red;
        font-weight: bold;
        justify-self: right;
        margin-right: 15%;
      }

      .form_btn{
          width: 20rem;
          height: 5rem;
          color:#fff;
          background: #58488A;
          border: none;
          border-radius: 25px;
          a{
              text-decoration: none;
              font-size: 20px;
              color: #fff;
          }
      }

    .form-text{
        grid-row-start: 4;
        grid-row-end: 5;
        grid-column-start: 1;
        grid-column-end: 3;
        align-self: center;
        margin-top: 4rem;
        text-align: center;
        font-size: 1.4rem;
        color: #7952B3;
        margin-left: 2rem;

        span{
          text-decoration: underline;
          cursor: pointer;
          a{
            margin-left: 1rem;
          }
            
      }
    } 
  }     
}

</style>