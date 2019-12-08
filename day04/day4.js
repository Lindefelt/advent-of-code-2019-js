let lowerBound = "357253"
let upperBound = "892942"


//357777

//888888
/* for (let  i = lowerBound; i < upperBound; i++){
    let sequence = (i+"").split("")
    if(sequence.includes("0")){
        //console.log("sequence has zeroes")
        continue
    }
    let highest = sequence[0]
    let hasAdjacentDigit = false
    for( let j = 0; j < sequence.length; j++){
        let digit = sequence[j]
        if(digit >= highest){
            highest = digit
            if(sequence[j]==sequence[j+1]){
                hasAdjacentDigit = true
            }
        }
        else{ 
            //console.log(digits,"sequence has lower digits to the right")
            break
        }

        if(hasAdjacentDigit){
            //console.log("valid sequence",sequence)
            sequences.push(sequence)
        }
    }

} */
function findSequences(lowerBound,upperBound){
    let sequences = []
    for (let  i = lowerBound; i < upperBound; i++){
        let sequence = numberToArray(i);
        if(isNotDecreasing(sequence)&&hasAdjacent(sequence)){
            sequences.push(sequence)
        }
    }
    return sequences
}


function isNotDecreasing(sequence){
    let highest = sequence[0]
    for(let i = 0; i < sequence.length; i++){
        
        if(sequence[i]>=highest){
            highest = sequence[i]
        }
        else{
            return false
        }
    }
    return true
}

function hasAdjacent(sequence){
    let hasAdjacentDigit = false
    for(let i = 0 ;i  < sequence.length; i++){
        if(sequence[i]==sequence[i+1]){
            hasAdjacentDigit = true
        }
    }
    return hasAdjacentDigit
}
function numberToArray(number){
    let list = (number+"").split("")
    let retList = []
    for(e of list){
        retList.push(parseInt(e))
    }
    return retList
}
// let input = numberToArray(888699)
// console.log("isNotDecreasing",isNotDecreasing(input))
// console.log("hasAdjacent",hasAdjacent(input))

function filterSequences(sequences){
    return sequences.filter(seq => pairNotInLargerGroup(seq))
}

function pairNotInLargerGroup(sequence){
    let atLeastOnePair = false
    for(let i = 0; i < sequence.length; i++){
        if(sequence[i]==sequence[i+1]){
            let digitsInSeq = sequence.filter(d => d==sequence[i])
            if(digitsInSeq.length==2){
                atLeastOnePair = true
            }
        }
    }
    return atLeastOnePair
}
let p1seqs = findSequences(lowerBound,upperBound)

let testSeqs = [numberToArray(112233),numberToArray(123444),numberToArray(111122)]
let p2seqs = filterSequences(p1seqs)

console.log("possible sequences p1",p1seqs.length)
console.log("possible sequences p2",p2seqs.length)

p2seqs.forEach((e)=>{
    console.log(e.join(""))
})


//888699

//888709

//888719

//888729

//888739