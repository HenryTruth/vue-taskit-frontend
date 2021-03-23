<template>
        <section class="task">
            <div>
                <button @click="goDialogue">
                    Add Task
                </button>
            </div>
            <figure>
                <img src="./../../assets/task-runner.svg" alt="">
            </figure>
        </section>
</template>

<script>
import { store } from '../../store'

export default {
    data(){
        return{
            authenticated:store.state.authenticated
            
        }
    },

    beforeRouteEnter(to, from, next){
        console.log('beforerouteenter')
        if(localStorage.getItem('active')){
            next()
        }else{
            next('/')
        }
    },
    

    methods:{
        goDialogue(){
            this.$router.push('/taskdialogue')
        }
    }
        
}

</script>

<style lang="less" scoped>

#main-header{
    background-color:#472F92;
    width: 100%;
    display: none !important;

}

#second-header{
    background-color:#472F92;
    width: 100%;
    display: block;
}

.task{
    display: grid;
    grid-template-rows: 1.5fr 8.5fr;
    min-height: 100vh;

    div{
        grid-row-start: 1;
        grid-row-end: 2;
        display: grid;
        
        button{
            justify-self: center;
            background-color: #472F92;
            width:25rem;
            margin: 2rem;
            border: none;
            border-radius: .5rem;
            font-size: 2.5rem;
            color: white;

            a{
                color: white;
            }

            &:hover{
                cursor: pointer;
            }
        }
    }

    figure{
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: center;
        margin-top: 8rem;

        img{
            width: 40rem;
            height: 25rem;
        }
    }
}
</style>