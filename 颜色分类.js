// 【颜色分类】
// 问题描述: 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排 列。 
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。 


let arr = []


function sortColor(str) {

  for(let j = 0;j < str.length;j++ ) {
    if(str[j] === 0 ) {
      arr[0].push(str[j])
    }
      
    else if(str[j] ===1) {
      arr[1].push(str[j])
    }
      
    else if (str[j] ===2) {
      arr[1].push(str[j])
    }
      
  }

}

sortColor([2 ,0 ,2 ,1 ,1 ,0 ])

var STR = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      STR += arr[i][j] + " ";
    }
  }
  console.log(STR);