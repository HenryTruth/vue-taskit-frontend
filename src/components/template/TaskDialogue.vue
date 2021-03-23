<template>
    <section class="task_card">
        <div class="dialogue md-shadow">
            <form>
                <div>
                    <span></span>
                    <input type="text" placeholder="Input-Task" v-model="title"><br>
                    <div class="dialogue-btn sm-shadow" @click="postTask"><router-link to="/taskadded">+</router-link></div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { store } from "../../store";
export default {
    data(){
        return{
            title:store.state.title,
            completed:store.state.completed
        }
    },
    methods:{
        postTask(){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", localStorage.getItem('token'));

            var formdata = new FormData();
            formdata.append("title", this.title);
            formdata.append("completed", false);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };
            fetch("http://localhost:8000/api/todos/", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.$router.push('/taskadded')
                })
            .catch(error => console.log('error', error));
                }
        }
    }
</script>

<style lang="less">

.task_card{
    display: grid;
    grid-template-columns: 4fr 2.5fr 4fr;
    grid-template-rows: 2fr 2fr 2fr;
    height: 80vh;
    
    .dialogue{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        border-radius: .5rem;
        form{
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            height: 25rem;
            
            div{
                align-self: start;
                margin-top: 2rem;
                span{
                    padding: .5rem 1rem;
                    background-color: #58488A;
                    margin: 1rem 1rem;
                 }
 
                 input{
                     padding: 2rem 0;
                     width: 33rem;
                     outline-color: #472F92;
                     font-size: 1.8rem;
                     padding-left: 1rem;

                     &::placeholder{
                         padding-left: 1rem;
                     }
                 }

                 .dialogue-btn{
                    margin-top: 12rem;
                    height: 3rem;
                    width: 5rem;
                    margin-left: 32rem;
                    padding: .5rem 1rem;
                    background-color: #58488A;
                    margin-bottom: 2rem;
                    border-radius: .5rem;

                    &:hover{
                        cursor: pointer;
                    }
                    a{
                        color: white;
                        font-size: 2rem;
                        text-align: center;
                        margin-left: .8rem;
                    }

                 }
            }
        }
    }
}
</style>