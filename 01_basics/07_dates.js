let myDate = new Date()

console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())

console.log(typeof myDate)

//let myCreatedDate = new Date(2023, 0, 25)
//let myCreatedDate = new Date(2023, 0, 25, 5, 3)
let myCreatedDate = new Date("2023-1-25")
console.log(myCreatedDate.toLocaleString())

let myTime = Date.now()
console.log(myTime)
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})