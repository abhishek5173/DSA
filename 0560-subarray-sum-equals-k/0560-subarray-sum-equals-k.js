/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let hashMap = new Map();
    hashMap.set(0, 1); // Initialize the map with sum 0 occurring once

    for (let num of nums) {
        sum += num;
        if (hashMap.has(sum - k)) {
            count += hashMap.get(sum - k);
        }
        hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
    }

    return count;
};