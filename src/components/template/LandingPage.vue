<template>
{{!active}}
    <header id="main-header" v-if="!active">
        <nav>
            <div class="menu-icons">
                <img class="icon ion-md-menu" src="C:\Users\hp\Desktop\Vue_taskit\vue_taskit\src\assets\menu.svg" alt="">
                <img src="./../../assets/cancel.svg" alt="" class="icon ion-md-close">
            </div>
            <a href="index.html" class="logo">
                <img src="./../../assets/logo3.svg" alt="" @click="bb">
            </a>
            <ul class="nav-list">
                <li>
                    <router-link to="/">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/login">
                        Login
                    </router-link>
                </li>
                <li>
                    <router-link to="/signup">
                        Signup
                    </router-link>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
            </ul>
            <ul class="nav-list2">
                <li>
                    <img src="./../../assets/twitter.svg" alt="">
                </li>
                <li>
                    <img src="./../../assets/facebook.svg" alt="">
                </li>
                <li>
                    <img src="./../../assets/github.svg" alt="">
                </li>
                <li>
                    <img src="./../../assets/slack.svg" alt="">
                </li>
            </ul>
        </nav>
    </header>
    <header id="second-header" v-else>
        <nav>
            <div class="menu-icons">
                <img class="icon ion-md-menu" src="C:\Users\hp\Desktop\Vue_taskit\vue_taskit\src\assets\menu.svg" alt="">
                <img src="./../../assets/cancel.svg" alt="" class="icon ion-md-close">
            </div>
            <a href="index.html" class="logo">
                <img src="./../../assets/logo3.svg" alt="">
            </a>
            <ul class="nav-list">
                <li>
                    <router-link to="/" >
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/login">
                        Login
                    </router-link>
                </li>
                <li>
                    <router-link to="/signup">
                        Signup
                    </router-link>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
            </ul>
            <ul class="nav-list2">
                <li>
                    <a href="completed_task.html"><img src="./../../assets/completed-nav.svg" alt=""></a>
                </li>
            </ul>
        </nav>
    </header>
    <router-view></router-view>

    
</template>

<script>
import { store } from '../../store'
export default {
    data(){
        return{
            active:store.state.authenticated
        }
    },
    computed:{
        notAuth(){
            return this.active
        }
    },


    mounted(){
        console.log('mounted')
            this.active = localStorage.getItem('active')
            console.log(this.active)
        
    },

    watch:{
        active(newval,oldvalue){
            localStorage.setItem('active', newval)
            console.log(localStorage)
        }
    }
    
}
</script>

<style lang='less'>

    header{
        background-color:#472F92;
        width: 100%;
        display: block;

    }

</style>