const readline = require('readline')
const fs = require('fs')
const assert = require('assert')


const readInterface = readline.createInterface({
    input: fs.createReadStream('day1.input'),
    output: process.stdout,
    console: false
})

var lines = []
readInterface.on('line', (line)=> {
    console.log(line)
    lines.push(line)
})

readInterface.on('close',() => {
    console.log(lines)
    var result = lines.reduce((sum,current)=> sum+calculateFuelRequirement(current),0)
    console.log(result)
})

function calculateFuelRequirement(mass){
    return(Math.floor(mass/3)-2)
}


function testCalculateFuelRequirement(){
    assert.equal(calculateFuelRequirement(12),2)
    assert.equal(calculateFuelRequirement(14),2)
    assert.equal(calculateFuelRequirement(1969),654)
    assert.equal(calculateFuelRequirement(100756),33583)
}

testCalculateFuelRequirement()

