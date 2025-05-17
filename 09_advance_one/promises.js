
const promise1 = new Promise(function(resolve, reject){
    //async calls =>db, crypto, network
    setTimeout(function(){
        console.log('async task complete')
        resolve()
    }, 1000)
})

promise1.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    //async calls =>db, crypto, network
    setTimeout(function(){
        console.log('async task complete')
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise2 consumed")
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"vivek", email:"chandravanshi@vi.com"})
    })
}).then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error){
            reject('ERROR : something went wrong')
        }else{
            resolve({username:"vivek", password:"vi@js"})
        }
    }, 1000)
}).then((user) => {
    console.log(user)
    return user.username
}).then((username) =>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("promise is either resolved or rejected")
})

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(error){
            reject('ERROR : something went wrong')
        }else{
            resolve({username:"vivek", password:"vi@js"})
        }
    }, 1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// consumePromise5()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  //takes time

        const data = await response.json() //also takes time
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))