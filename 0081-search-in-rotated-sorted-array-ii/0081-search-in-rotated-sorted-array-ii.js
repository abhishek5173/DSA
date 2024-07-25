/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
      let n = nums.length; // size of the array.
    let low = 0, high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        //if mid points the target
        if (nums[mid] === target) return true;

        //Edge case:
        if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }

        //if left part is sorted:
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                //element exists:
                high = mid - 1;
            }
            else {
                //element does not exist:
                low = mid + 1;
            }
        }
        else { //if right part is sorted:
            if (nums[mid] <= target && target <= nums[high]) {
                //element exists:
                low = mid + 1;
            }
            else {
                //element does not exist:
                high = mid - 1;
            }
        }
    }
    return false;
};