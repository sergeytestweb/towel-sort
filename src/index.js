// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) return [];
    if (matrix.length < 0) return [];
    let newArr = [];
    for (i = 0; i < matrix.length; i++) {
        if (matrix[i].length > 0) {
            if (i > 0 && i % 2 !== 0) {
              matrix[i].reverse();
              for (j = 0; j < matrix[i].length; j++) {
                  newArr.push(matrix[i][j]);                }
            } else {
                    for (j = 0; j < matrix[i].length; j++) {
                      newArr.push(matrix[i][j]);
  
                }
            }
        }
    }
    return newArr;
};
