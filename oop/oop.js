
// const user = {
//     username :"vivek",
//     email :"vi@js.com",
//     signedIn : true,

//     getUserDetails : function(){
//         console.log('got user details from database')
//         console.log(`username : ${this.username}`)
//         console.log("this : ", this)
//     }
// }

// console.log(user.username)
// user.getUserDetails()

//new => an empty object is created
function user(username, email, signedIn){
    this.username = username
    this.email = email
    this.signedIn = signedIn

    //return this
}
const user1 = new user("vivek", "vi@js.com", true)
const user2 = new user("chandravanshi", "vi@js.com", true)  //if new not used it will overwrite the user1 with user2 => same instance
console.log(user2)