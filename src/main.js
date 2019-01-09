const arrayTag = toString.call([])

// 处理对象类型
const handlerObjectClass = object => {
  const classNames = []
  for (const name in object) {
    if (object.hasOwnProperty(name)) {
      const boolean = object[name]
      // 值为true，添加
      boolean && classNames.push(name)
    }
  }
  return classNames
}
// 处理数组类型
const handlerArrayClass = array => {
  let classNames = []
  for (let i = 0; i < array.length; i ++) {
    const item = array[i]
    if (typeof item !== 'object') {
      // 值为非typeof对象，添加值
      classNames.push(item)
    } else if (toString.call(item) === arrayTag) {
      // 值为数组，第1个值为className，第2个值为判断值
      item[1] && classNames.push(item[0])
    } else {
      // 其他对象类型
      classNames = [].concat(classNames).concat(handlerObjectClass(item))
    }
  }

  return classNames
}

class className {
  get property () {
    // 属性名
    return 'className'
  }

  // 处理程序
  handler (element, value) {
    if (typeof value !== 'object') {
      // 非typeof对象类型，直接赋值
      element.className = value
    } else {
      // typeof对象类型
      // 存储多个classNames
      let classNames = []
      // value的类型
      const valueTag = toString.call(value)
      if (valueTag === arrayTag) {
        // 数组类型处理
        classNames = [].concat(classNames).concat(handlerArrayClass(value))
      } else {
        // 其他对象类型
        classNames = [].concat(classNames).concat(handlerObjectClass(value))
      }
      // 赋值
      element.className = classNames.join(' ')
    }
  }
}

export default new className()
