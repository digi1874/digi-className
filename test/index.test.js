import className from '../src/main'

const handler = className.handler
const el = document.createElement('div')
// 测试过滤原型对象
Object.prototype.testForin = 'test'

it('测试 property 值为 className', () => {
  expect(className.property).toBe('className')
})

it('测试处理程序', () => {
  // 字符串
  handler(el, 'className1')
  expect(el.className).toBe('className1')

  // 对象
  handler(el, { className1: true, className2: false, className3: true })
  expect(el.className).toBe('className1 className3')

  // 数组
  handler(el, ['className1', ['className2', true], ['className3', false], { className4: true, className5: false, className6: true }])
  expect(el.className).toBe('className1 className2 className4 className6')
})
