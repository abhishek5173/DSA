/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
var count = 0;
var result = 0;

nums.forEach((value) => {
    if(value == 1){
    count++
        result = Math.max(result, count)
    } else if(value !== 1){
        count = 0
    }
})
return result
};