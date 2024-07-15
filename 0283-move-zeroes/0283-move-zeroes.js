/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     for (let i = 0; i < nums.length; i++) {
    if (nums[i]==0) {
      
       let j=-1;
       for (let i = 0; i < nums.length; i++) {
         if (nums[i]==0) {
           j=i;
           break;
         }
       }
       for (let i = j+1; i < nums.length; i++) {
         if (nums[i] != 0) {
           let temp = nums[j];
           nums[j]=nums[i]
           nums[i] = temp;
           j++;
         }
         
       }
       return nums;
    }
  
   }
   return nums;
};