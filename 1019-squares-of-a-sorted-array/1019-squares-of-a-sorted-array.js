/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length -1;
    let index = nums.length -1;
    let result = new Array(nums.length).fill(0)

    while(left <= right){
        let leftsq = nums[left]**2;
        let rightsq = nums[right]**2;
        
        if(leftsq > rightsq){
            result[index] = leftsq
            left++;
        }else{
            result[index]= rightsq
            right--;
        }
        index--
    }
    return result
};