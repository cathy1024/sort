
var start = new Date().getTime();
for (var i = 1; i < 1000; ++i) {
    console.log(i);
}
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('消耗的时间为：' + elapsed + ' 毫秒');