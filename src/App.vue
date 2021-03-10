<template>
  <div class="container">
      <landing-page
      />
  </div>
</template>

<script>

import LandingPage from './components/template/LandingPage.vue';
import { store } from './store';

export default{
    components:{
        LandingPage
    },

    data(){
        return{
            authenticated:store.state.authenticated
        }
    },
    


}

</script>

<style lang='less'>

@import './viewport.less';

*,
&::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
}

html{
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
}

a{
    text-decoration: none;
}

ul{
    list-style:none;
}

.container{
    display:grid;
    grid-template-rows: repeat(auto,auto);
    grid-template-columns: 1fr;
    color: white;
}

.alert{
    background-color: #CFE2FF;
    height: 5.5rem;
    width: 60rem;
    border-radius:.5rem;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    color: #4C4C98;
}

.btn{
    background-color: #0B5CD2;
    color: white;
    font-size: 1.8rem;
    text-decoration:none;
    border:none;
    border-radius: .5rem;
    display:grid;
    place-items: center;

    &:hover{
        cursor: pointer;
    }
}

.card{
    box-shadow: .5px .5px rgba(0, 0, 0, 0.123);
    border:.1px solid rgba(0, 0, 0, 0.253);
}

.card-body{
    height: 10rem;
    width: 80rem;
    box-shadow: .5px .5px rgba(0, 0, 0, 0.123);
    border:.1px solid rgba(0, 0, 0, 0.253);
}

nav{
    display:flex;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid rgba(255,255,255, .1);

    .menu-icons{
        color: #eee;
        font-size: 4rem;
        top: 4%;
        right: 2rem;
        transform: translateY(-50%);
        cursor: pointer;
        z-index:1500;
        display: none;
        position: fixed;


        @media screen and (max-width:769px){
            display: block;

        }
    }

    @media screen and (max-width:769px){
        .ion-md-close{
            display: none;
            

        }
    }

    
    .logo{
        width: 5rem;
        height: 5rem;
        display: flex;
        margin-right: 5rem;

        img{
            margin-left: 1rem;
        }
    }
    
    
    .nav-list{
        display: flex;
        width: 100%;
        align-items: center;

        @media screen and (max-width:769px){
            position: fixed;
            top: 0;
            left: 0;
            height: 50vh;
            display: none;
            flex-direction: column;
            align-items: initial;   
            background-color: #7952B3;
            z-index: 1000;

        }

        li{
            line-height: 8rem;
            position: relative;

            @media screen and (max-width:769px){
                line-height: 6rem; 
                
            }
        }
    }
    
    li.move-right{
        margin: 0 auto 0 0;
        line-height: initial;
    }



    .nav-list a{
        display: block;
        color: #eee;
        padding: 0 1.5rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        transition:color 650ms;
    }
    
    .nav-list a:hover{
        color: #eb3007;
    }

    .nav-list2{
        display: flex;
        z-index: 3000;
        margin-right: 10rem;
       

        li{
            display: inline-block;
            // margin-top: 2.5rem;
            @media screen and (max-width:769px){
                margin-top: 2.5rem;
                display: none;
            }
        }

        
        @media screen and (max-width:769px){
            position: fixed;
            top: 23rem;
            left: 0;
            align-items: initial;
           
        }

        li{
            padding: .2rem;

            img{
                width: 4rem;
                height: 2.5rem;
            }
        }
    }


}

.active{

    .nav-list2{
        li{
            @media screen and (max-width:769px){
                margin-top: 2.5rem;
                display: block;
                
            }
        }
    }
        
    .ion-md-close{
        @media screen and (max-width:769px){
            display: block;
        }  
    }
    .ion-md-menu{
        @media screen and (max-width:769px){
            display: none;
            
        }
    }
    .nav-list{
        @media screen and (max-width:769px){
            display: flex;
        }
    }
}


.bg-primary{
    background-color:#0D6EFD;
}

.text-primary{
    color:#0D6EFD;
}

.bg-secondary{
    background-color:#6C757D;
}

.text-secondary{
    color:#6C757D;
}

.bg-success{
    background-color:#198754;
}

.text-success{
    color:#198754;
}


.bg-danger{
    background-color:#DC3545;
}

.text-danger{
    color:#DC3545;
}

.bg-warning{
    background-color:#FFC107;
}

.text-warning{
    color:#FFC107;
}

.bg-info{
    background-color:#0DCAF0;
}

.text-info{
    color:#0DCAF0;
}

.bg-light{
    background-color:#F8F9FA;
}

.text-light{
    color:#F8F9FA;
}

.bg-dark{
    background-color:#212529;
}

.text-dark{
    color:#212529;
}

.bg-white{
    background-color:#fff;
}

.text-white{
    color:#fff;
}

.bg-transparent{
    background-color:rgba(255, 255, 255, 0);
}

.text-transparent{
    color:rgba(255, 255, 255, 0);
}

.no-shadow{
    background-color: #F8F9FA;
    border-radius: .5rem;
}

.sm-shadow{
    box-shadow: 0px 1px 3px grey;
    border-radius: .5rem;
}

.md-shadow{
    box-shadow: 0px 2px 6px grey;
    border-radius: .5rem;
}

.lg-shadow{
    box-shadow: 2px 4px 15px grey;
    border-radius: .5rem;
}

h1{
    font-size: 5rem;
}

h2{
    font-size: 4.5rem;
}

h3{
    font-size: 4rem;
}

h4{
    font-size: 3.5rem;
}

h5{
    font-size: 3rem;
}

h6{
    font-size: 2.5rem;
}

.p-1{
    font-size: 4.5rem;
}

.p-2{
    font-size: 4rem;
}

.p-3{
    font-size:3.5rem;
}

.p-4{
    font-size: 3rem;
}

.p-5{
    font-size: 2.5rem;
}

.p-6{
    font-size: 2rem;
}


</style>