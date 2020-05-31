/**数组测试平台类 */

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.toString = toString;
    this.setData = setData;
    this.swap = swap; // 交换方法
    this.bubbleSort = bubbleSort; // 冒泡排序
    this.selectionSort = selectionSort; // 选择排序
    this.insertionSort = insertionSort; // 插入排序

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1)); // 这里为什么要+1？
    }
}

function toString() {
    var restr = '';
    for (var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + ' ';
        if (i > 0 & i % 10 == 0) {
            restr += '\n'
        }
    }
    return restr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

/**冒泡排序 */
function bubbleSort() {
    var len = this.dataStore.length;
    for (var outer = len; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner+1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}

/**选择排序 */
function selectionSort() {
    var min;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
    }
}

/**插入排序 */
function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while(inner > 0 && (this.dataStore[inner-1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

/**使用测试类平台 */

var numElements = 10000;
var nums = new CArray(numElements);
nums.setData();
// console.log(nums.toString());

var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log(numElements + ' 个元素执行【冒泡排序】消耗的时间为：' + elapsed + ' 毫秒');

start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(numElements + ' 个元素执行【选择排序】消耗的时间为：' + elapsed + ' 毫秒');

start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(numElements + ' 个元素执行【插入排序】消耗的时间为：' + elapsed + ' 毫秒');