/**
 * @param {number[]} nums
 * @param {number} d
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, d) {
   let temp = [];
    if (d>nums.length) {
      d = d%nums.length
    }
    let  n=0;
   for (let i = nums.length-1; i >= 0; i--) {
       
       
         if (n<d) {
          temp.push(nums[i])
          n++
         }
         
       }
       
       temp.reverse(); 
       for (let i = nums.length-1; i>=d; i--) {
         nums[i] = nums[i-d];
         
       }
     
       let j=0;
      for (let i = 0; i < temp.length; i++) {
        nums[i]=temp[j]
        j++
      }
      return nums;
};
