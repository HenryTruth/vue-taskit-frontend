<template>
        <section class="forms_body">
            <form class="lg-shadow form-login">
                <p class="p-4">Log in</p>
                <figure class="fig-15">
                    <img src="./../../assets/forms-login.svg" alt="">
                </figure>
                <input type="text" class="fig-1_input_login" placeholder="username">
                
                <figure class="fig-25">
                    <img src="./../../assets/forms-lock.svg" alt="">
                </figure>
                <input type="text" class="fig-2_input_login" placeholder="password">   

                <span class="form_btn">
                    <router-link to="/addtask" @click="remove">
                        Sign In
                    </router-link>
                </span>
                <p class="form-text">Don,t have an account?<span><a href="#"></a> Log in</span></p>
            </form>
        </section>
</template>

<script>
import { store } from '../../store'
export default {
    methods:{
        remove(){
            store.state.authenticated = !store.state.authenticated
            console.log(store.state.authenticated)
        }
    }
}
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
@desktop-sm:~"only screen and (min-width:1025px)";


/* Extra large screens, Tv viewport */
@screens: ~"only screen and (min-width:1201px)";

    .forms_body{
        height: 100vh;
        display: grid;
        grid-template-rows: .5fr 1.9fr .5fr;
        grid-template-columns: 1fr .8fr 1fr;

        .form-signup{
            background-color: white;
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 2;
            grid-column-end: 3;
            border-radius: .5rem;
            display: grid;
            grid-template-columns: 2fr 8fr;
            grid-template-rows: 1.5fr 1.8fr 1.8fr 1.8fr 1.8fr 1.2fr 2fr;

            

            .p-5{
                grid-row-start: 1;
                grid-row-end: 2;
                grid-column-start: 1;
                grid-column-end: 3;
                color: black;
                text-align: center;
                justify-self: center;
                align-self: center;
                margin: 1.5rem;
            }

            figure{
                align-self: center;
                justify-self: center;
                img{
                    width: 7rem;
                    height: 4rem;
                }
            }

            input{
                margin: 2rem 2.5rem;
                border: 1.5px solid #7952B3;
                outline-color: #7952B3;
                font-size: 2rem;
                
                &::placeholder{
                    padding-left: 1.5rem;
                }
            }


            .fig-1{
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 2;

            }

            .fig-1_input{
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .fig-2{
                grid-row-start: 3;
                grid-row-end: 4;
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .fig-2_input{
                grid-row-start: 3;
                grid-row-end: 4;
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .fig-3{
                grid-row-start: 4;
                grid-row-end: 5;
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .fig-3_input{
                grid-row-start: 4;
                grid-row-end: 5;
                grid-column-start: 2;
                grid-column-end: 3;     
            }

            .fig-5{
                grid-row-start: 5;
                grid-row-end: 6;
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .fig-5_input{
                grid-row-start: 5;
                grid-row-end: 6;
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .form_btn{
                grid-row-start: 6;
                grid-row-end: 7;
                grid-column-start: 1;
                grid-column-end: 3;
                background-color: #7952B3;
                width: 20rem;
                height: 5rem;
                justify-self: center;
                border-radius: 2rem;
                margin-left: 2.5rem;
                margin-top: 1.2rem;
                display: grid;
                a{
                    color: white;
                    font-size: 2rem;
                    align-self: center;
                    justify-self: center;
                }
            }

            .form-text{
                grid-row-start: 7;
                grid-row-end: 8;
                grid-column-start: 1;
                grid-column-end: 3;
                align-self: start;
                margin-top: 4rem;
                text-align: center;
                font-size: 1.4rem;
                color: #7952B3;

                span{
                    text-decoration: underline;
                }
            }            
            
        }
        .form-login{
            display: grid;
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 2;
            grid-column-end: 3;
            grid-template-rows: .6fr .9fr .9fr 1.5fr;
            grid-template-columns: 2fr 8fr;

            .p-4{
                grid-row-start: 1;
                grid-row-end: 2;
                grid-column-start: 1;
                grid-column-end: 3;
                color: black;
                text-align: center;
                justify-self: center;
                align-self: center;
                margin: 1.5rem;
            }

            figure{
                align-self: center;
                justify-self: center;
                img{
                    width: 7rem;
                    height: 4rem;
                }
            }

            input{
                margin: 3rem 2.5rem;
                border: 1.5px solid #7952B3;
                outline-color: #7952B3;
                font-size: 2rem;
                
                &::placeholder{
                    @media @mobile-sm{
                        padding-left: 2rem;
                    }
                }
            }

            .fig-15{
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .fig-1_input_login{
                grid-row-start: 2;
                grid-row-end: 3;
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .fig-25{
                grid-row-start: 3;
                grid-row-end: 4;
                grid-column-start:1;
                grid-column-end: 2;
            }

            .fig-2_input_login{
                grid-row-start: 3;
                grid-row-end: 4;
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .form_btn{
                grid-row-start: 4;
                grid-row-end: 5;
                grid-column-start: 1;
                grid-column-end: 3;
                background-color: #7952B3;
                width: 20rem;
                height: 5rem;
                justify-self: center;
                align-self: start;
                border-radius: 2rem;
                margin-top: 1.5rem;
                margin-left: 2.5rem;
                display: grid;
                a{
                    color: white;
                    font-size: 2rem;
                    align-self: center;
                    justify-self: center;
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
                }
            }      

        }

    }
</style>