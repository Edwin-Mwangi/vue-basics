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
        changeTitle(){
            this.title= 'Words of Bowl'
        }
    }
})


app.mount('#app')