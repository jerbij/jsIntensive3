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



