function dominantDirection(text) {
    let counts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");

    let ltr_count = 0, rtl_count = 0, ttb_count = 0;
  
  	for (let e of counts) {
        if (e.name == "ltr") {
            ltr_count += e.count;
        }
        if (e.name == "rtl") {
            rtl_count += e.count;
        }
        if (e.name == "ttb") {
            ttb_count += e.count;
        }
    }

    if (ltr_count > rtl_count && ltr_count > ttb_count) {
        return "ltr";
    }
    if (rtl_count > ltr_count && rtl_count > ttb_count) {
        return "rtl";
    }
    if (ttb_count > ltr_count && ttb_count > rtl_count) {
        return "ttb";
    }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
        counts.push({name, count: 1});
        } else {
        counts[known].count++;
        }
    }
    return counts;
}