/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
      const rows = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < rows - 1; i++) {
        for (let j = i + 1; j < rows; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (let i = 0; i < rows; i++) {
        matrix[i].reverse();
    }

    return matrix;
};