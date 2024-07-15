/**
 * @param {number} n
 * @return {number}
 */


var fib = function(n) {
     if(n<=1){
        return n;
    }
    const last = fib(n-1)
    const slast = fib(n-2)
    return last+slast;

};
