const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    // your code here
    for (i=0; i< arrayToSearchThrough.length; i++){
        if(arrayToSearchThrough[i]===valueToFind){
            console.log(i)
            return i
        }
    }
    return undefined
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let answer=[]
    for (i=0; i<arrayToSearchThrough.length; i++){
        if (arrayToSearchThrough[i]=== valueToFind){
            answer.push(i)
        }
    }
    console.log(answer)
    return answer
};