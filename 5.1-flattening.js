function flattening(array) {
    if (!containsObjects(array)) {
        return array;
    }
    else {
        let concat = (a, b) => a.concat(b)
        return array.map(flattening).reduce(concat);
    }
}

function containsObjects(array) {
    let contains = false;
    for (let element of array) {
        if (typeof(element) == "object") {
            contains = true;
        }
    }
    return contains;
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays));
// → [1, 2, 3, 4, 5, 6]