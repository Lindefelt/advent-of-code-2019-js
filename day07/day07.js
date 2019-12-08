
function eval(list,input){
    let i = 0
    let _input = 0
    while(i < list.length){
        let instruction  = parseInstruction(list[i])
        let opcode = instruction.opcode
        let arg1 = instruction.c == 1 ? list[i+1] : list[list[i+1]]
        let arg2 = instruction.b == 1 ? list[i+2] : list[list[i+2]]
        let arg3 = list[i+3]   //arg3 is always in position mode
        //Addition
        if(opcode==1){
            list[arg3] = arg1+arg2
            i+=4
        }
        //Multiplication
        if(opcode==2){
            list[arg3] = arg1*arg2
            i+=4
        }
        //Store
        if(opcode==3){
            list[list[i+1]]=input[_input]
            _input++
            i+=2
        }
        //Output
        if(opcode==4){
            output=arg1
            i+=2
        }
        //jump if true
        if(opcode==5){
            if(arg1!=0){
                i=arg2
            }
            else{
            i+=3
            }
        }
        //jump if false
        if(opcode==6){
            if(arg1==0){
                i=arg2
            }
            else{
            i+=3
            }
        }
        //less than
        if(opcode==7){
            if(arg1<arg2){
                list[arg3] = 1
            }else[
                list[arg3] = 0
            ]
            i+=4
        }
        //equals
        if(opcode==8){
            if(arg1==arg2){
                list[arg3] = 1
            }else[
                list[arg3] = 0
            ]
            i+=4
        }
        //Exit
        if(opcode==99){
            return output
        }
    }
}

function parseInstruction(instruction){
    instruction = "0000"+instruction//instruction > 9 ?""+instruction : "0"+instruction
    let a = instruction[instruction.length-5]
    let b = instruction[instruction.length-4]
    let c = instruction[instruction.length-3]
    let d = instruction[instruction.length-2]
    let e = instruction[instruction.length-1]
    return {a:parseInt(a),b:parseInt(b),c:parseInt(c), opcode :parseInt(d+e)}

}

function calculateSignal(program,sequence){
    output = 0;
    for(phase of sequence){
        output = eval(program,[phase,output])
    }
    return output
}

function findMaxSignal(program){
    let permutations = generatePermutations()
    let maxSignal = 0
    let maxPhase
    for(p of permutations){
        newProgram = Array.from(program)
       let signal = calculateSignal(newProgram,p)
        if(signal>maxSignal){
            maxSignal = signal
            maxPhase = p 
        }
    }
    return maxSignal
}

//Heaps Method
function generatePermutations(){
    let permutation = [0,1,2,3,4],
        length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1,
        k,
        p

    while(i<length){
        if(c[i]<i){
            k = i%2 && c[i]
            p = permutation[i]
            permutation[i] = permutation[k]
            permutation[k] = p
            ++c[i]
            i=1
            result.push(permutation.slice())
        }else{
            c[i] = 0
            ++i
        }
    }
    return result
}

let testProgram1 = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
let testSequence1 = [4,4,4,4,4]
let testProgram2 = [3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0]
let testSequence2 = [0,1,2,3,4]
let testProgram3 = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0]
let testSequence3 = [1,0,4,3,2]

let program = [3,8,1001,8,10,8,105,1,0,0,21,30,47,60,81,102,183,264,345,426,99999,3,9,1002,9,5,9,4,9,99,3,9,1002,9,5,9,1001,9,4,9,1002,9,4,9,4,9,99,3,9,101,2,9,9,1002,9,4,9,4,9,99,3,9,1001,9,3,9,1002,9,2,9,101,5,9,9,1002,9,2,9,4,9,99,3,9,102,4,9,9,101,4,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,99]

//console.log(calculateSignal(testProgram1,testSequence1))
//console.log(calculateSignal(testProgram2,testSequence2))
//console.log(calculateSignal(testProgram3,testSequence3))
//console.log(findMaxSignal(testProgram3))

console.log("part 1:",findMaxSignal(program))
