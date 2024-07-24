/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let  first = -1;
    let last = -1;
    for (let i =0 ; i <=nums.length -1 ; i++){
        if(nums[i]==target){
            if(first == -1){
                first=i;  
            }
            last = i;
        }
    }
    return [first,last];
};