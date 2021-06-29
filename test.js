console.log('123')

class Person {
  constructor(name) {
    console.log('init')
    this.name   = name    | '未知'
    this.age    = 18
    this.skills = ['大宝剑', '蛮王冲撞']
  }
  getName() {
    console.log(this.name)
  }
}

let p = new Person('张三')
p.getName()

console.log(p)
