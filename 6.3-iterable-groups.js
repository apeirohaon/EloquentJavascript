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
    numOfElements() {
        return this.group.length;
    }
    getElement(i) {
        return this.group[i];
    }
    static from(toAdd) {
        let created = new Group();
        for (let e of toAdd) {
            created.add(e);
        }
        return created;
    }
    [Symbol.iterator] = () => new GroupIterator(this);
}

class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }

    next() {
        if (this.i == this.group.numOfElements())
            return {done: true};
        let value = this.group.getElement(this.i);
        this.i++;
        return {value, done: false};
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c