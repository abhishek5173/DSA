/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let result = 0;
   for(let i=nums.length-1; i>=0; i--)
   {
        if(target>nums[i])
        {
            result = i+1;
            break;
        }
        if(target==nums[i])
        {
            result = i;
            break;
        }
   }
   return result; 
};