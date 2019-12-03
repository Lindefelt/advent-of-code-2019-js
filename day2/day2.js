


var input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,1,13,23,27,1,6,27,31,2,31,13,35,1,9,35,39,2,39,13,43,1,43,10,47,1,47,13,51,2,13,51,55,1,55,9,59,1,59,5,63,1,6,63,67,1,13,67,71,2,71,10,75,1,6,75,79,1,79,10,83,1,5,83,87,2,10,87,91,1,6,91,95,1,9,95,99,1,99,9,103,2,103,10,107,1,5,107,111,1,9,111,115,2,13,115,119,1,119,10,123,1,123,10,127,2,127,10,131,1,5,131,135,1,10,135,139,1,139,2,143,1,6,143,0,99,2,14,0,0]

1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,1,13,23,27,1,6,27,31,2,31,13,35,1,9,35,39,2,39,13,43,1,43,10,47,1,47,13,51,2,13,51,55,1,55,9,59,1,59,5,63,1,6,63,67,1,13,67,71,2,71,10,75,1,6,75,79,1,79,10,83,1,5,83,87,2,10,87,91,1,6,91,95,1,9,95,99,1,99,9,103,2,103,10,107,1,5,107,111,1,9,111,115,2,13,115,119,1,119,10,123,1,123,10,127,2,127,10,131,1,5,131,135,1,10,135,139,1,139,2,143,1,6,143,0,99,2,14,0,0


var inputModified = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,1,13,23,27,1,6,27,31,2,31,13,35,1,9,35,39,2,39,13,43,1,43,10,47,1,47,13,51,2,13,51,55,1,55,9,59,1,59,5,63,1,6,63,67,1,13,67,71,2,71,10,75,1,6,75,79,1,79,10,83,1,5,83,87,2,10,87,91,1,6,91,95,1,9,95,99,1,99,9,103,2,103,10,107,1,5,107,111,1,9,111,115,2,13,115,119,1,119,10,123,1,123,10,127,2,127,10,131,1,5,131,135,1,10,135,139,1,139,2,143,1,6,143,0,99,2,14,0,0]

var test1 = [1,0,0,0,99]
var test2 = [2,3,0,3,99]
var test3 = [2,4,4,5,99,0]
var test4 = [1,1,1,4,99,5,6,0,99]


//console.log(inputModified)
function eval(list){
    for(var i = 0 ; i < list.length; i+=4 ){
        var opcode  = list[i]
        var index1 = list[i+1]
        var index2 = list[i+2]
        var index3 = list[i+3]
        if(opcode==1){

            
            list[index3] = list[index1]+list[index2]
        }
        if(opcode==2){
            list[index3] = list[index1]*list[index2]
        }
        if(opcode==99){
            return list
        }
    }
}

// console.log(eval(test1)) //2,0,0,0,99
// console.log(eval(test2)) //2,3,0,6,99
// console.log(eval(test3)) //2,4,4,5,99,9801
// console.log(eval(test4)) //30,1,1,4,2,5,6,0,99


console.log(eval(inputModified)[0])


function FindVerbNoun(list){
    for (var i = 0 ; i < 100; i++){

        for(var j = 0; j < 100; j++){
            var newList = Array.from(list)
            //console.log(i,j)
            newList[1] = i
            newList[2] = j
            result = eval(newList)
            if(result[0]==19690720){
                console.log(i,j)
            }

        }
    }
}

FindVerbNoun(input)