/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count =0;
    var result =0;
    nums.forEach((value) =>{
        while(value !== 0){
           value = Math.floor(value/10)
            count++
        }
        if(count % 2 == 0){
            result++
        }
        count = 0;
    })
    return result
};