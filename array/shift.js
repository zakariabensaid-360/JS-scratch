const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.Myshift = function () {
    if(this.length == 0) {
        return undefined
    }
    const FirstItem = this[0]

    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1]
    }

    return FirstItem
}
