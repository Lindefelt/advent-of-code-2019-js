const fs = require('fs')

let input = fs.readFileSync("day08/day08.input").toString()
let image  = input.split("").map((x) => parseInt(x))

let layers = []

let l = 0;
for(let i = 0; i < image.length/(6*25);i++){
    start = l*6*25
    end = (l*6*25)+6*25
    layers.push(image.slice(start,end))
    l++
}


let countZeros = Number.MAX_VALUE
let layerLeastZeroes 
for(layer of layers){
    let count = layer.filter( val => val == 0 ).length
    //console.log(count)
    if(count < countZeros){
        countZeros = count
        layerLeastZeroes = layer
    }
    
}

let ones = layerLeastZeroes.filter( val => val === 1 ).length
let twos = layerLeastZeroes.filter( val => val === 2 ).length
console.log("part 1")
console.log("ones:",ones,",twos:",twos,",ones x twos:",ones*twos)

let finalImage = new Array(150).fill(2)

for(layer of layers){
    for(let i = 0; i < layer.length; i++){
        if(finalImage[i]==2&&finalImage[i]!=1&&finalImage[i]!=0){
            finalImage[i]=layer[i]
        }
    }
}

console.log("part 2")
for(let i = 0; i < 6; i++){
    console.log(finalImage.slice(i*25,(i*25)+25).toString())
}