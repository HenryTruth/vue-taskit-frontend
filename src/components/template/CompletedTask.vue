<template>
    <section class="task_added_task">

            <div class="task_added_button">
                <button>Completed Task</button>
            </div>

            <div class="task_added_card_card">
                <div class="task_card_card md-shadow">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora possimus iste suscipit rem, error numquam consequatur temporibus fugit accusamus incidunt consectetur
                    </p>
                    <img src="./../../assets/del.svg" class="trash" alt="">
                    <img src="./../../assets/check.svg" alt="" class="circle">
                </div>
            </div>
        </section>
</template>

<script>
export default {
    
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


.task_added_card_card{
    height: fit-content;
    color: black;
    margin: 1rem;
    border-radius: .3rem;
    display: grid;
    grid-template-rows: 1fr;

    @media @laptop-sm{
        grid-template-columns:repeat(2,1fr);
    }

    @media @laptops-lg{
        grid-template-columns: repeat(3, 1fr);
    }

        
        

.task_card_card{
    background-color: white;
    border-top: .5rem solid #472F92;
    margin: 1rem;
    height: 25rem;
    border-radius: 3px;
    padding: 1rem;
    @media @desktop-sm{
        margin: 7rem;
    }

    p{
        font-size: 1.8rem;
        line-height: 2.6rem;
    }

        .trash{
            transform: translateX(-10px) translateY(60px);
            margin-left: 1rem;
            font-size: 1.3rem;
            cursor:pointer;
            width: 4rem;
            height: 2rem;
            transition: .3s;

            @media @laptop-sm{
                
                &:hover{
                    width: 6rem;
                    height: 3rem;
                }
            }
        }

        .circle{
            color: green;
            font-size: 1.3rem;
            transform: translateX(230px) translateY(60px);
        }
    }
}
</style>