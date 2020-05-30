/**数组测试平台类 */

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap; // 交换方法

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1)); // 这里为什么要+1？
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
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

/**使用测试类平台 */

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());