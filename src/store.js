import { reactive } from 'vue'

class Store{
    constructor(){
        this.state = reactive({
            authenticated:true
        })
    }

    setAuthenticated(){
        this.state.authenticated = false
    }
}

export const store = new Store()