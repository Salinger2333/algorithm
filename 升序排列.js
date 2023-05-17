// 牛客  升序
// 冒泡
for (var i = 0; i < arr.length - 1; i++) {

  for (var j = 0; j < arr.length - 1 - i; j++) {

    if (arr[j] > arr[j + 1]) {

      var temp = arr[j];

      arr[j] = arr[j + 1];

      arr[j + 1] = temp;

    }

  }

}

console.log(arr);


// 选择排序

var minIndex;

var temp;

for (let i = 1; i < arr.length; i++) {

  minIndex = i - 1;

  for (let j = i; j < arr.length; j++) {

    if (arr[j] < arr[minIndex]) minIndex = j;

  }

  if (minIndex != i - 1) {

    temp = arr[i - 1];

    arr[i - 1] = arr[minIndex];

    arr[minIndex] = temp;

  }
}
console.log(arr);

// 插入
for (let i = 1; i < arr.length; i++) {

  for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {

    let temp = arr[j];

    arr[j] = arr[j + 1];

    arr[j + 1] = temp;

  }
}
console.log(arr);

// compareFn(a, b) 返回值	      排序顺序
// > 0	                  a 在 b 后，如 [b, a]
// < 0	                  a 在 b 前，如 [a, b]
// === 0	                保持 a 和 b 原来的顺序