function range(start, end, step = 1) {
    let a = [];
    let cond = true;
    for (let i = start; cond; i += step) {
        a.push(i);
        cond = step > 0 ? i < end : i > end;
    }
    return a;
}

function sum(numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55