Array.prototype.myFlat = function(depth = 1) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            const flattened = this[i].myFlat(depth - 1);
            temp.push(...flattened);
        } else {
            temp.push(this[i]);
        }
    }

    return temp;
};
