const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.MytoString = function () {
  if (this.length === 0) return "";

  let str = this[0];

  for (let i = 1; i < this.length; i++) {
    str += "," + this[i];
  }

  return str;
};
