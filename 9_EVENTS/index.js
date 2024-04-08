// const EventEmitter = require('events')
// const event = new EventEmitter()

// event.on('click_me', (age , name)=>{
//     console.log(`my name is ${name} and my age is ${age}`)
// })

// event.emit('click_me' , 23 , "sachin")

const EventEmitter = require('events')
const event = new EventEmitter()

event.on('increment', (val , dec)=>{
    console.log(`${dec} ${++val}`)
})

event.on('increment', (val , dec)=>{
    console.log(`${dec} ${++val*3}`)
})

event.on('increment', (val , dec)=>{
    console.log(`${dec} ${++val*2}`)
})

event.emit('increment' , 2 , "new_val")