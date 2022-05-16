Array.prototype.myFilter = function( testLogic, srcArr, thisParam ) {
    if(srcArr === undefined) {
        srcArr = this;
    }

    const result = [];

    if(thisParam === undefined) {
        thisParam = this;
    }

    srcArr.forEach( (el, idx) => {
        if(testLogic(el, idx, thisParam)) {
            result.push(el);
        }
    })

    return result;
}

const numbers = [ 5, 8, 1, 2, 9];
const chosenNumbers = numbers.myFilter( (num) =>  num  < 5);
console.log(chosenNumbers);


