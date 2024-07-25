/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let min = nums.sort(function(a,b){return a-b})
    return min[0];
};