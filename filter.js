const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.MyFilter = function (cb) {
    let filtered = []
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)  ) {
        filtered.push(this[i])
    }
  }
  return filtered
}


