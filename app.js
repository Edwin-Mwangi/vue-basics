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
        // can use any name as param eg abc
        changeTitle(title){ 
            this.title= title   //this.title = abc
        }
    }
})


app.mount('#app')