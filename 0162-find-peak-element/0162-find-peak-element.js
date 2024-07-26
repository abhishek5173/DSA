/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (let i=0; i<nums.length; i++){
        if((nums[i]> nums[i-1] && nums[i]> nums[i+1]) || (nums[i]> nums[i-1] || nums[i]> nums[i+1])){
            return i;
        }
        else if(nums.length ==2){
            if(nums[i]>nums[i-1]){
                return i;
            }
        }
    }
    
    return 0;
};