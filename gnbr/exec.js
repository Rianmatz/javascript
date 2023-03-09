function param(n) {
   if (n == 1) {
    return 1
   } else {
    return n * param(n-1)
   }
}
console.log(param(7))
