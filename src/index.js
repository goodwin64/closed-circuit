module.exports = function isCircuitClosed(matrix) {
    for (var i = 1; i < matrix.length - 1; i++) {
        for (var j = 1; j < matrix[i].length - 1; j++) {
            if (isClosedAround(i, j, matrix)) {
                return true;
            }
        }
    }
    return false;
};

function isClosedAround(i, j, matrix) {
    return Boolean(
        matrix[i - 1][j] &&
        matrix[i + 1][j] &&
        matrix[i][j - 1] &&
        matrix[i][j + 1]
    );
}