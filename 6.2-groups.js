class Group {
    constructor() {
        this.group = [];
    }
    add(val) {
        if (!this.group.includes(val))
            this.group.push(val);
    }
    delete(val) {
        let index = this.group.indexOf(val);
        if (index != -1)
            this.group.splice(index, 1);
    }
    has(val) {
        return this.group.indexOf(val) != -1;
    }
    static from(toAdd) {
        let created = new Group();
        for (let e of toAdd) {
            created.add(e);
        }
        return created;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false