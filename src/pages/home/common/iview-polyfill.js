if (window.HTMLElement) {
  const HTMLElement = window.HTMLElement
  if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
    Object.defineProperty(HTMLElement.prototype, 'dataset', {
      get () {
        // 获取节点的所有属性
        const { attributes } = this
        const names = []
        // 定义两个数组保存属性名和属性值
        const values = []
        // 定义一个空对象
        const obj = {}
        attributes.forEach((n, i) => {
          // 如果属性名的前面5个字符符合"data-"
          if (n.nodeName.slice(0, 5) === 'data-') {
            // 取出属性名的"data-"的后面的字符串放入name数组中
            names.push(n.nodeName.slice(5))
            // 取出对应的属性值放入value数组中
            values.push(n.nodeValue)
          }
        })
        names.forEach((m, j) => {
          // 遍历name和value数组
          obj[m] = values[j]
          // 将属性名和属性值保存到obj中
        })
        return obj
      }
    })
  }
}
