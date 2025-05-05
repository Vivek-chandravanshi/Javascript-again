//for loop
for(let index=0; index<10; index++){
    //console.log(index);
}

for(let i=0; i<10; i++){
    //console.log(`outer loop ${i}`)
    for(let j=0; j<10; j++){
        //console.log(`inner loop ${j}`)
        //console.log(`i*j = ${i}*${j} = ${i*j}`)
    }
}

myArray = ["thor", "batman", "ironman", "loki"]
for(let i=0; i<myArray.length; i++){
    //console.log(myArray[i])
} 

for(let index=0; index<10; index++){
    if(index==7) break
    if(index==4) continue
    //console.log(index);
}

let k=0
while(k<10){
    console.log(k)
    k++
}

let score=0
do{
    score++
    console.log(score)
}while(score<10)