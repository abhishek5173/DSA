/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var result =0;
    nums.forEach((value) =>{
        if (String(value).length % 2 ==0){
            result++;
        }
    })
    return result
};