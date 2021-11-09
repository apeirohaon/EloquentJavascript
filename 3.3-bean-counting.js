function countChar(string, char) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char)
            count++;
    }
    return count;
}

let countBs = string => countChar(string, "B");

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4