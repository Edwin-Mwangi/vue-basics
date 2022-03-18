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
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        }
    }
})


app.mount('#app')