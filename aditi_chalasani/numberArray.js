function largerThan(array, numberToCompare) {
    let finalArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > numberToCompare) {
            finalArray.push(array[i]);
        }
    }

    return finalArray;
}