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
    //console.log(line)
    lines.push(line)
})

readInterface.on('close',() => {
    //console.log(lines)
    var result = lines.reduce((sum,current)=> sum+calculateFuelRequirement(current),0)
    console.log("result part 1:",result)
    var result2 = lines.reduce((sum,current)=> sum+calculateFuelRequirement2(current),0)
    console.log("result part 2:", result2)
})

function calculateFuelRequirement(mass){
    return(Math.floor(mass/3)-2)
}

function calculateFuelRequirement2(mass, sum = 0){
    var fuelReq = (Math.floor(mass/3)-2)
    if(fuelReq>0){
        sum+=fuelReq;
        return calculateFuelRequirement2(fuelReq, sum)
    }
    else{
        return sum
    }
    
}

function testCalculateFuelRequirement(){
    assert.equal(calculateFuelRequirement(12),2)
    assert.equal(calculateFuelRequirement(14),2)
    assert.equal(calculateFuelRequirement(1969),654)
    assert.equal(calculateFuelRequirement(100756),33583)
    assert.equal(calculateFuelRequirement2(1969),966)
}

testCalculateFuelRequirement()

