
function sum(a,b){
    if(b !== undefined){
        return a+b;
    }
    
    return function(b){
        return a+b;
    }
}

console.log(sum(2,3))
console.log(sum(2)(3))