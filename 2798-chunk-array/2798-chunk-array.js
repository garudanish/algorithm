/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const { result } = arr.reduce((acc, cur) => {
        const currentResult = acc.result
        const lastElement = currentResult[currentResult.length - 1];

        if (!lastElement) {
            currentResult.push([cur]);
            return acc;
        }

        if (lastElement.length < size) {
            lastElement.push(cur);
            return acc;
        }

        currentResult.push(([cur]));
        return acc;
    }, {
        result: []
    });

    return result;    
};

