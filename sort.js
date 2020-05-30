function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


/**冒泡排序 */
function bubbleSort(arr) {
    var len = arr.length;
    for (var outer = len; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner+1]) {
                swap(arr, inner, inner + 1);
            }
        }
        console.log(arr.toString());
    }
}

/**选择排序 */
function selectionSort(arr) {
    var min;
    for (var outer = 0; outer <= arr.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= arr.length - 1; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        swap(arr, outer, min);
        console.log(arr.toString());
    }
}


selectionSort([5, 3, 8, 1, 7, 2]);

/**插入排序 */
function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while(inner > 0 && (arr[inner-1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
}