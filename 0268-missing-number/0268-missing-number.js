/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
      var  n = nums.length;
    var sum = (n*(n+1))/2 ;
    var s2 = 0;
    for (let i = 0; i < n; i++) {
      s2 += nums[i] 
    }
    return (sum-s2);
};