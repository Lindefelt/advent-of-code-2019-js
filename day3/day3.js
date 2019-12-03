const readline = require('readline')
const fs = require('fs')
const assert = require('assert')

var lines = []
const readInterface = readline.createInterface({
    input: fs.createReadStream('day3.input'),
    output: process.stdout,
    console: false
})

//Do something for each line in a file
readInterface.on('line', (line)=> {
    lines.push(line)
})

//Do something after each line has been read
readInterface.on('close',() => {
    console.log(lines)
    
})



var testInputW1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"]
var testInputW2 = ["U62","R66","U55","R34","D71","R55","D58","R83"]


//function buildMatrix(){
    var  matrix = []

    for(var i = 0; i<2000; i++){
        matrix[i] = new Array(2000)

    }

    testInputW1.forEach((e)=>{
        if(e[0]=="L"){

        }
        if(e[0]=="R"){

        }
        if(e[0]=="D"){

        }
        if(e[0]=="U"){

        }
    })
//}