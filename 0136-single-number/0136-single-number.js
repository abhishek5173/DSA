/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i=0; i<nums.length ; i++){
        let num = nums[i]
        let count = 0;
        for (let j=0; j<nums.length ; j++){
            if(nums[j] == num){
                count++;
            }
        }
        if(count == 1){
            return num;
        }
    }
    
};