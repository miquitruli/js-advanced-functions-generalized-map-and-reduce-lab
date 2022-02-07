// my own map-like methods
    //map returns an array with all values made negative
    //map returns an array with the original values
    //map returns an array with the original values multiplied by 2
    //map returns an array with the original values squared
function map(array, func) {
   let newArray = []
   for (let i = 0; i < array.length; i++) {
        let element = array[i]
        newArray.push(func(element))
    }   
    return newArray;
}

//my own reduce-like methods
    //reduce returns a running total when not given a starting point
    //reduce returns a running total when given a starting point
    //reduce returns true when all values are true
    //reduce returns false when any value is false
    //reduce returns true when a true value is present
    //reduce returns false when no true value is present

function reduce(array, func, startingValue) {
    let r = !!startingValue ? startingValue : array[0];
    let i = !!startingValue ? 0 : 1;
    
    for (; i < array.length; i++) {
        r = func(array[i], r);
    }
    return r;
}


