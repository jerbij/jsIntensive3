/*
1) Написать свою реализацию встроенной функции массивов filter.
Назвать функцию myFilter и сделать так,
 чтобы любой массив мог использовать данную функцию как "родную".
 В качестве параметров он должен принимать callback-функцию
 и как необязательный параметр объект, который будет использован
 в качестве this в рамках внутренних вызовов данной callback-функции.

 В конечном итоге ваша реализация myFilter
 должна работать точно также как и встроенный метод filter.
 Callback-функция, переданная в качестве параметра,
 также должна вызываться с теми же параметрами,
 что и оригинал (элемент, индекс, массив).
 */

// function myFilter
Array.prototype.myFilter = function( testLogic, srcArr, thisParam ) {
    if(srcArr === undefined) {
        srcArr = this;
    }

    // 1. Create empty resulting array, to which I'll put elements of source array
    // one by one, that passes testLogic
    const result = [];

    if(thisParam === undefined) {
        thisParam = this;
    }

    // 2. Loop through srcArr, element by element
    srcArr.forEach( (el, idx) => {
        // 3. Call testLogic arrow function on current element of srcArr
        const r = testLogic(el, idx, thisParam)

        // 4. If testLogic arrow function returned true,
        if(r === true) {
            // 5. Add current element of srcArr into result
            result.push(el);
        }
    })

    // 6. Return resulting array!!!
    return result;
}

const numbers = [ 5, 8, 1, 2, 9];
const chosenNumbers = numbers.myFilter( (num) =>  num  < 5);
console.log(chosenNumbers);


