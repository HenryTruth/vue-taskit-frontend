<template>
    <section class="task_card">
        <div class="dialogue md-shadow">
            <form>
                <div>
                    <span></span>
                    <input type="text" placeholder="card-title"><br>
                </div>
                <div>
                    <span></span>
                    <input type="text" placeholder="time">
                    <div class="dialogue-btn sm-shadow"><router-link to="/taskadded">+</router-link></div>
                </div>
                
            </form>
        </div>
    </section>
</template>

<script>
export default {
    
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
                     padding: 1.5rem;
                     width: 30rem;
                     outline-color: #472F92;
                 }

                 .dialogue-btn{
                    height: 3rem;
                    width: 5rem;
                    margin-left: 28rem;
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