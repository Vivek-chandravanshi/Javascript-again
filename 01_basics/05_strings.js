const name = 'vivek' //object
//const name = new String("vivek")
const num = 40

// console.log(name + num)
console.log(`my name is ${name} and num = ${num}`) //string interpolation

console.log(name[0]) //key value pair in string
console.log(name.__proto__)

console.log(name.length)
console.log(name.toUpperCase())

console.log(name.charAt(2))
console.log(name.indexOf('i'))

const newString = name.substring(1, 3) // 1 to (3-1) substring and not length
console.log(newString)

const newString2 = name.slice(-5, 3) 
console.log(newString2)

const string2 = "  vivek  chandravanshi  "
console.log(string2.trim())

console.log(string2.replace('  ', '--'))
console.log(string2.includes('viv'))

const str = "v-i-v-e-k-c-h-n-d-r-v-n-s-h-i"
const arr = str.split('-')
console.log(arr)
console.log(typeof arr)