//this refers to current context
const user = {
    username : "vivek chndrvnshi",
    price : 999,

    welcomeMessage : function(){
        console.log(`welcome ${this.username}, to the website`)
        console.log(this)
    }
}

//user.welcomeMessage()
user.username = "vishal"
//user.welcomeMessage()
console.log(this) //empty object in node environment unlike browser => {window object}




//this will not be used in functions
// chai()
// const chai = function () {
//     let username = "vivek"
//     console.log(this.username);  //undefined
// }
// function chai(){
//     let username = "vivek"
//     console.log(this.username);  //undefined
// }

const chai = () => {
    let username = "vivek"
    console.log(this) //empty paranthesis
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) = (num1 + num2) 
// const addTwo = (num1, num2) = num1 + num2
//{} = return statement required 
// () = not required

const addTwo = (num1, num2) => ({username: "vivek"})