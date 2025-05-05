
const coding = ["C++", "Js", "Python", "Java", "C"]
// coding.forEach(function (val){
//     console.log(val)
// })

coding.forEach((val)=>{
    console.log(val)
})

coding.forEach((val, index, coding)=>{
    console.log(val, index, coding)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )