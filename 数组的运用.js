{
  /**
   * map的妙用 两数求和
   * 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
  
  示例: 给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
   */
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  const twoSum = function (nums, target) {
    // 这里我用对象来模拟 map 的能力
    const diffs = {}
    // 缓存数组长度
    const len = nums.length
    // 遍历数组
    for (let i = 0; i < len; i++) {
      // 判断当前值对应的 target 差值是否存在（是否已遍历过）
      if (diffs[target - nums[i]] !== undefined) {
        // 若有对应差值，那么答案get！
        return [diffs[target - nums[i]], i]
      }
      // 若没有对应差值，则记录当前值
      diffs[nums[i]] = i
    }
  }
  const nums = [2, 11, 15, 7]

  /**
   * es6实现版本
   */
  const twoSumES6 = function (nums, target) {
    const diffs = new Map
    const len = nums.length
    for (let i = 0; i < len; i++) {
      if (diffs.has(target - nums[i])) {
        return [diffs.get(target - nums[i]), i]
      }
      diffs.set(nums[i], i)
    }
  }
  console.log("使用对象解法:" + twoSum(nums, 9));
  console.log("使用ES6解法:" + twoSumES6(nums, 9));
}


{
  /**
   * 双指针的灵活运用  
   * 
   */
  // 合并有序数组
  // ES6解法
  const nums1 = [1, 3, 2]
  const nums2 = [5, 7, 6]
  // console.log([...nums1, ...nums2].sort((a, b) => a - b));
  const mergeES6 = function (nums1, nums2) {
    return [...nums1, ...nums2].sort((a, b) => a - b)
  }
  console.log("使用ES6合并有序数组:" +mergeES6(nums1, nums2));
  // 普通双指针做法
  



}
