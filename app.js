// console.log('hello vue')

const app = Vue.createApp({
    //set up stuff here
    data(){
        return{
            title: 'the final empire',
            author: 'brandon sand',
            age: 45,
            x:0,
            y:0,
            showBooks: true,
            url:'http:unavailable.com',

            books: [
                {title: 'the final date', author: 'Brandon sand'},
                {title: 'Kings way', author: 'Patrick roth'},
                {title: 'the final date', author: 'Brenda wynn'}
            ]
        }
    },
    methods:{
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
    
})


app.mount('#app')