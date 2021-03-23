<template>
    <header id="main-header" v-if="showNav">
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
                        log out
                    </router-link>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
            </ul>
            <ul class="nav-list2">
                <li class="li-li">
                    <router-link to="" style="color:white">
                       Welcome {{strUser}}
                    </router-link>
                </li>
                <li v-if="showIcon">
                    <router-link to="/completedtask">
                        <img src="./../../assets/completed-nav.svg" alt="" @click="showit">
                    </router-link>
                </li>
                <li v-else>
                    <router-link to="/taskadded">
                        <img src="./../../assets/task-run.svg" alt="" @click="showit">
                    </router-link>
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
            username:store.state.username,
            active:store.state.authenticated,
            showData:true
        }
    },

    computed:{
        showIcon(){
            return this.showData
        },

        showNav(){
            return this.active
        },

        strUser(){
            return this.username

        }
    },

    mounted(){
        console.log('mounted')
        if(localStorage.getItem('active')){
            this.active = JSON.parse(localStorage.getItem('active'))
        }

        if(localStorage.getItem('username')){
            this.username = localStorage.getItem('username')
        } 
    },

    watch:{
        active(newval,oldvalue){
            localStorage.setItem('active', newval)
        },
    },
    methods:{
        showit(){
            this.showData = !this.showData
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