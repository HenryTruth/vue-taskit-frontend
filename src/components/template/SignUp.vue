<template>
  <section class="forms_body">
    <div class='modal card' v-if="result_error">
      <p>{{error_message}}</p>
    </div>
    <form class="lg-shadow form-signup" @submit.prevent="registerUser">
      <p class="p-5">Sign Up</p>
      <div class="form-group">
        <div class="input-section">
          <figure class="fig-1">
            <img src="./../../assets/forms-login.svg" alt="" />
          </figure>
          <input
          @input="inputUsername"
            type="text"
            class="fig-1_input"
            placeholder="username"
            v-model="username"
          />
        </div>
        <p class='para-section'>{{user_error}}</p>
      </div>
      <div class="form-group">
        <div class="input-section">
          <figure class="fig-2">
             <img src="./../../assets/forms-mail.svg" alt="" />
          </figure>
          <input
          @input="inputEmail"
            type="text"
            class="fig-2_input"
            placeholder="email"
            v-model="email"
          />
        </div>
         <p class='para-section'>{{email_error}}</p>
      </div>
      <div class="form-group">
        <div class="input-section">
          <figure class="fig-3">
            <img src="./../../assets/forms-lock.svg" alt="" />
          </figure>
          <input
          @input="inputPassword"
            type="password"
            class="fig-3_input"
            placeholder="password"
            v-model="password"
          />
        </div>
        <p class='para-section'>{{password_error}}</p>
      </div>

      <div class="form-group">
        <div class="input-section">  
          <figure class="fig-5">
            <img src="./../../assets/forms-confirm.svg" alt="" />
          </figure>
          <input
          @input="inputConfirmPassword"
            type="password"
            class="fig-5_input"
            placeholder="confirm password"
            v-model="password2"
          />
        </div>
        <p class='para-section'>{{password2_error}}</p>
      </div>
      
      <button type="submit" class="form_btn" :class="{'disabled':disabled}">Sign Up</button>
      <p class="form-text">Already Have an account? <span> <router-link to="/login">log in</router-link></span></p> 
    </form>
  </section>
</template>

<script>
import { store } from '../../store'



let username_value, email_value, password_value, confirm_password_value;
export default {
  data() {
    return {
      username: store.state.username,
      email: store.state.email,
      password: store.state.password,
      password2: store.state.password2,
      user_error:'',
      email_error:'',
      password_error:'',
      password2_error:'',
      result_error:false,
      message:""
    }
  },

  computed:{
    error_message(){
      return this.message
    },

    disabled(){
      const valid_user =  store.state.validate_form.validate_user
      const valid_email = store.state.validate_form.validate_email
      const valid_password = store.state.validate_form.validate_password
      const valid_password2 = store.state.validate_form.validate_confirm_password

      if(valid_user && valid_email && valid_password && valid_password2){
        return false
      }else{
        return true
      }
    }

  },


  methods: {
    inputUsername($evt){
      username_value=$evt.target.value
      this.user_error = store.validateUsername(username_value)
    },

    inputEmail($evt){
      email_value = $evt.target.value
      this.email_error = store.validateEmail(email_value)
    },

    inputPassword($evt){
      password_value = $evt.target.value
      this.password_error = store.validatePassword(password_value)
    },
    
    inputConfirmPassword($evt){
      confirm_password_value = $evt.target.value
      this.password2_error = store.validatePassword2(confirm_password_value)
    },
    

    registerUser() {
      var formdata = new FormData();
      formdata.append("username", this.username);
      formdata.append("email", this.email);
      formdata.append("password", this.password);
      formdata.append("password2", this.password2);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:8000/api/auth/register/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

          if (result.success_message) {
            this.$router.push("/login");
          }else if(!result.success_message){
            if(result.username){
              this.message = result.username[0]
              this.result_error = true
              setTimeout(() =>{
                this.result_error = false
              },6000)
            }else{
              this.message = result.email[0]
              this.result_error = true
              setTimeout(() =>{
                this.result_error = false
              },6000)
            }
            
          }
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style lang="less">

.forms_body{
  background: white;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(10,1fr);
  grid-row-gap: 1rem;
  margin-top: 1rem;
}
.modal{
  background:white;
  grid-row: 1/2;
  grid-column: 2/3;
  text-align: center;
  color:black;
  font-size: 1.7rem !important;
  border-radius: .5rem;
  border: none;
  background-color: #F8D7DA;
  animation: pandaAnimation 5s ease forwards;
  p{
    margin: 2rem 0;
  }
  @keyframes pandaAnimation{
    0%{
      opacity: 1;
    }
    60%{
      opacity: .7;
    }
    100%{
      opacity: 0;
      display: none;
    }
  }
 
}
.form-signup{
  background-color: white;
  grid-row: 2/3;
  grid-column: 2/3;
  border-radius: .5rem;
  display: grid;
  grid-template-rows: repeat(5,1fr);
  padding: 2rem;

  .p-5{
    padding:2rem;
  }

  .input-section{
    grid-row: 1/2;
    grid-column: 1/-1;
    background: white;
    display: grid; 
    grid-template-columns: .1fr .8fr .1fr;
    grid-gap: 2rem;

    img{
      width: 35px;
    }

    input{
      grid-column: 2/-1;
      border: #D9D9D9 .2rem solid;
      padding:1rem;
      font-size: 2rem;
      height: 40px;
      width: 85%;
      border-radius: .5rem;

      &:focus{
          border: #472F92 .2rem solid;
          outline: none !important;
      }

      &::placeholder{
          font-size: 1.7rem;
      }
    }
  }

  .para-section{
    font-size: 1.6rem !important;
    grid-column: 2/-1;
    grid-row: 2/-1;
    background: white;
    color: red;
    font-size: 2rem;
    font-weight: bold;
    text-align: end;
    margin-right: 7rem;
    margin-top: 1rem;
    }

    .p-5{
      color: black;
      text-align: center;
      justify-self: center;
      align-self: center;
      margin: 1.5rem;
    }

    .form_btn{          
      background-color: #7952B3;
      width: 20rem;
      height: 5rem;
      justify-self: center;
      border-radius: 2rem;
      margin-left: 2.5rem;
      margin-top: 1.2rem;
      border: none;
      cursor: pointer;
      text-align: center;
      color: white;
      font-size: 2rem;
      outline: none;

      &:hover{
        filter: brightness(125px);
      }

      .disabled-button{
        opacity: 0.5;
      }
      a{
          color: white;
          font-size: 2rem;
          align-self: center;
          justify-self: center;
      }
    }

    .disabled{
        background: #7952b37a;
        cursor:not-allowed;
    }

    span{
      text-decoration: underline;
      cursor: pointer;
    }

    .form-text{        
      align-self: start;
      margin-top: 4rem;
      text-align: center;
      font-size: 1.4rem;
      color: #7952B3;
    }
}
</style>

