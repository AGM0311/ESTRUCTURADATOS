function mergeSortIterative(arr) {
    if (arr.length <= 1) return arr;

    let step = 1;
    while (step < arr.length) {
        for (let i = 0; i < arr.length; i += 2 * step) {
            let left = arr.slice(i, i + step);
            let right = arr.slice(i + step, i + 2 * step);
            let merged = merge(left, right);
            for (let j = 0; j < merged.length; j++) {
                arr[i + j] = merged[j];
            }
        }
        step *= 2;
    }
    return arr;
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
//recursivo
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
