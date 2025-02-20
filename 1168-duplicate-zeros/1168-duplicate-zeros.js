/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let i =0;
    while(i < n){
        if(arr[i] == 0){
            arr.splice((i+1),0,0)
            arr.pop()
            i++
        }
        i++;
    }
};