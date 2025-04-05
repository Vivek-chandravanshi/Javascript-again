//immediatedly invoked function expression
(function connection(){ //named iife
    console.log("DB CONNECTED")
})();
// connection()

( () => {
    console.log("DB CONNECTED again")
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`)
})('vivek')

