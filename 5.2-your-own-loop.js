function loop(value, test, update, body) {
    if (!test(value)) {
        return;
    }
    else {
        body(value);
        loop(update(value), test, update, body);
    }
}

function loopUsingLoops(value, test, update, body) { //i.e. cheating
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
console.log(" --- ");
loopUsingLoops(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1