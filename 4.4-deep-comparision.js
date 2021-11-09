function deepEqual(a, b) {
    let aObj = (typeof(a) == "object") && a != null;
    let bObj = (typeof(b) == "object") && b != null;
    if (!(aObj || bObj)) {
        return a === b;
    }
    else if (aObj && bObj) {
        let all_equal = true;
        for (let property of Object.keys(a)) {
            if (!deepEqual(a[property], b[property])) {
                all_equal = false;
            }
        }
        return all_equal;
    }
    else {
        return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual({x: {hi: "hi"}, y: 2}, {x: 1, y: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(1, {hi: "a"}))