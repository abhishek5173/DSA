/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let position = 0;
    for(let i=0 ; i < nums.length ; i++){
        if (nums[i]==target){
            return i

        }
    }
    for(let i=0 ; i < nums.length ; i++){
        position = Math.max(nums[i],target)
        if(position>target){
            return i;
        }
    }
     return nums.length;
};