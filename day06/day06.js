const readline = require('readline')
const fs = require('fs')

let testInput = ["COM)B","B)C","C)D","D)E","E)F","B)G","G)H","D)I","E)J","J)K","K)L"]
let testInput2 =  ["COM)B","B)C","C)D","D)E","E)F","B)G","G)H","D)I","E)J","J)K","K)L","K)YOU","I)SAN"]

let input = fs.readFileSync("day06/day06.input").toString().split("\r\n")
//parse input and construct a graph

function buildOrbitMap(input){
    let map = new Map()
    let parsed  = input.map(e => e.split(")"))
    parsed.forEach(e => {
        map.set(e[1],e[0])
    })
return map
}

function countOrbits(map){
    let sum = 0
    for(key of map.keys()){
        sum++
        let parent = map.get(key)
        while(parent!="COM"){
            
            parent = map.get(parent)
            sum++
        }

    }
    return sum
}

function countTransfers(map, a, b){
    let pathToA = orbitPath(map,a)
    let pathToB = orbitPath(map,b)
    let diffA = pathToA.filter(e => !pathToB.includes(e))
    let diffB = pathToB.filter(e => !pathToA.includes(e))
    let diff = [].concat(diffA,diffB)
    return diff.length
    
}

function orbitPath(map,node){
    let path = []
    let parent = map.get(node)
    while(parent!="COM"){
        path.push(parent)
        parent = map.get(parent)
    }
    return path.reverse()
}

console.log("orbitcount",countOrbits(buildOrbitMap(testInput)),"expected:",42)
console.log("transfercount:",countTransfers(buildOrbitMap(testInput2),"YOU", "SAN"),"expected:",4)
console.log("orbitcount",countOrbits(buildOrbitMap(input)))
console.log("transfercount:",countTransfers(buildOrbitMap(input),"YOU", "SAN"))
