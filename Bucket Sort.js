function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;

    let minValue = Math.min(...arr),
        maxValue = Math.max(...arr),
        bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1,
        buckets = new Array(bucketCount).fill().map(() => []);

    arr.forEach(val => {
        let bucketIndex = Math.floor((val - minValue) / bucketSize);
        buckets[bucketIndex].push(val);
    });

    arr.length = 0;
    buckets.forEach(bucket => {
        insertionSort(bucket); // Usamos un ordenamiento dentro de cada bucket
        arr.push(...bucket);
    });

    return arr;
}
//recursivo
