// code your solution here
function saturdayFun(arg){
    if (!arg){
        return "This Saturday, I want to roller-skate!"
    }
    else{
        return `This Saturday, I want to ${arg}!`
    }
    
}

function mondayWork(arg){

    if(!arg){
        return "This Monday, I will go to the office."
    }
    else{
        return "This Monday, I will work from home."
    }
}

function print(a, b){
    return `${a}${b}${a}`
}

function wrapAdjective(highlight, text){
    return print(highlight, text)
}

console.log(wrapAdjective("||", "george"))