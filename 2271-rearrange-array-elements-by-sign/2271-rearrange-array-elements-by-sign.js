/**
 * @param {number[]} nums
 * @return {number[]} ans
 */
var rearrangeArray = function(nums) {
    let n = nums.length;
    let ans = new Array(n);
    let p = 0;
    let ne =1;
    for(let i=0; i<n ; i++){
        if(nums[i] < 0 ){
            ans[ne] = nums[i]
            ne +=2;
    }
    else{
        ans[p]= nums[i]
        p+= 2;
    }
    }
    return ans
};