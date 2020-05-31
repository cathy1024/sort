function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


/**冒泡排序 */
function bubbleSort(arr) {
    for (var outer = arr.length; outer >= 2; --outer) {
        console.log(arr.toString());
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner+1]) {
                swap(arr, inner, inner + 1);
            }
        }
    }
    console.log(arr.toString());
}

// bubbleSort([9, 2, 6, 3, 8, 0]);

/**选择排序 */
function selectionSort(arr) {
    var min;
    for (var outer = 0; outer < arr.length - 1; ++outer) {
        console.log(arr.toString());
        min = outer;
        for (var inner = outer + 1; inner < arr.length; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        swap(arr, outer, min);
    }
    console.log(arr.toString());
}

// selectionSort([9, 2, 6, 3, 8, 0]);

/**插入排序 */
function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        console.log(arr.toString());
        temp = arr[outer];
        inner = outer;
        while(inner > 0 && (arr[inner-1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
    console.log(arr.toString());
}

insertionSort([9, 2, 6, 3, 8, 0]);