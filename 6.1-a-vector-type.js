class Vect {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(v1) {
        return new Vect(this.x + v1.x, this.y + v1.y);
    }
    minus(v1) {
        return new Vect(this.x - v1.x, this.y - v1.y);
    }
    get length() {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }
}

console.log(new Vect(1, 2).plus(new Vect(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vect(1, 2).minus(new Vect(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vect(3, 4).length);
// → 5