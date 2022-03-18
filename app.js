const app = Vue.createApp({
    //set up stuff here
    data(){
        return{
            title: 'the final empire',
            author: 'brandon sand',
            age: 45
        }
    },
    methods:{
        handleEvent(e){
            console.log(e)
        }
    }
})


app.mount('#app')