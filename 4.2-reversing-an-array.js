function reverseArray(array) {
    let newArray = []
    for (let e of array) {
        newArray.unshift(e);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let hold;
    let halflen = Math.floor(array.length / 2);
    for (let i = 0; i < halflen; i++) {
        hold = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = hold;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]