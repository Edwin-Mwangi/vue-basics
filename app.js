const app = Vue.createApp({
    //set up stuff here
    data(){
        return{
            title: 'the final empire',
            author: 'brandon sand',
            age: 45,
            showBooks: false
        }
    },
    methods:{
        toggleShowbooks(){
            this.showBooks = !this.showBooks
        }
    }
})


app.mount('#app')