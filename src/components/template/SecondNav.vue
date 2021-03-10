<template>
    <login @addtaskClick="result"
    :removeDisplay="addtaskClick()"
    />
</template>

<script>
import Login from './Login.vue'
export default {
    components:{
        Login
    },
    data(){
        return{
            valid:true
        }
    },
    
    computed:{
       addtaskClick(){
            if(this.valid){
                return 'block'
            }else{
                return 'none'
            }
            
        }
    },

    methods:{
         result(){
             console.log('it worked')
            return this.valid = !this.valid
        }
    }
}
</script>

<style scoped>

</style>