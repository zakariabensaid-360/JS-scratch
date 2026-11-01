const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.MyForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)  
  }
}
numbers.MyForEach((number, i, arr)=> {
console.log(number, i, arr)
})