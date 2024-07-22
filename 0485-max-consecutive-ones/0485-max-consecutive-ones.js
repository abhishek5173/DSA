/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxl = 0;
    for(let i=0; i<nums.length ; i++){
        if(nums[i]==1){
            count++;
            maxl = Math.max(count,maxl)
        }
        else{
            count = 0;
        }
    }
    return maxl;
};