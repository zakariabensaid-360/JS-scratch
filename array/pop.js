const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.Mypop = function () {
    if(this.length == 0) {
        return undefined
    }
    const LastItem = this[this.length - 1]
    this.length = this.length - 1

    return LastItem
}