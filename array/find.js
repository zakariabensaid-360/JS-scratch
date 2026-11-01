const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.MyFind = function (cb) {

  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)) {
        return this[i]
    }
  }
  return undefined
}

