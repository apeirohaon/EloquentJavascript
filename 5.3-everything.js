function every1(array, test) {
    let every = true;
    for (i = 0; i < array.length; i++) {
        if (!test(array[i]))
            every = false;
    }
    return every;
}

function every2(array, test) {
    return !array.some(a => !test(a));
}

function every3(array, test) {
    if (array.length == 0) {
        return true;
    }
    else {
        return test(array[0]) && every3(array.splice(1), test);
    }
}

function test(f) {
    console.log(f([1, 3, 5], n => n < 10));
    // → true
    console.log(f([2, 4, 16], n => n < 10));
    // → false
    console.log(f([], n => n < 10));
    // → true
    console.log("-----")
}

test(every1)
test(every2)
test(every3)