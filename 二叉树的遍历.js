// 定义二叉树

const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}

/**
 * 先序,中序,后续遍历对应的是根节点的位置
 */

// 先序遍历
function preOrder(root) {


  if (!root) {
    return
  }

  console.log('当前子节点为:', root.val)

  preOrder(root.left)
  preOrder(root.right)

}





