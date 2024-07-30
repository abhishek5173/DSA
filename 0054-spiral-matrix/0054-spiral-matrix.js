/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var spiralOrder = function(mat) {
     let ans = [];
  let n = mat.length;
  let m = mat[0].length; 

 
  let top = 0, left = 0, bottom = n - 1, right = m - 1;

 
  while (top <= bottom && left <= right) {
   
    for (let i = left; i <= right; i++)
      ans.push(mat[top][i]);

    top++;

  
    for (let i = top; i <= bottom; i++)
      ans.push(mat[i][right]);

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--)
       ans.push(mat[bottom][i]);

      bottom--;
    }

    
    if (left <= right) {
      for (let i = bottom; i >= top; i--)
        ans.push(mat[i][left]);

      left++;
    }
  }
  return ans;
};