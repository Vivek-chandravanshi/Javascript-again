//for in
const lang = {
    js : 'javascript',
    cpp : 'c plus plus',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(key in lang){
    console.log(key)
    console.log(lang[key])
}

const programming = ["c++", "js", "python", "ruby"]
for(const key in programming){
    console.log(key)//indexes
}