var _dec, _dec2, _class, _class2

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {} //拷贝属性
    Object.keys(descriptor).forEach(function (key) {
        desc[key] = descriptor[key]
    })
    console.log(descriptor, 'descriptor')
    console.log(desc, 'desc')
    desc.enumerable = !!desc.enumerable  //是否是可枚举属性
    desc.configurable = !!desc.configurable //该属性描述符是否可以修改 删除
    // 没有 value 或者 initializer 属性的，都是 get 和 set 方法
    /**这里的 initializer 是 Babel 为了配合 decorator 而产生的一个属性
     * _descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [unenumerable, readonly], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "xxx";
          }
        })
     */
    if ('value' in desc || desc.initializer) { // 初始值设定项存在
        desc.writable = true
    }
    // 处理多个装饰器的执行顺序
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc
    }, desc)
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0
        desc.initializer = undefined
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc)
        desc = null
    }
    return desc
}

/*
*   decorator
*
 */

/*高阶函数*/
// function showName(name) {
//     console.log(name)
// }
//
// /*进行包装*/
// function withLog(fun,...args) {
//     console.log('starting')
//     fun(...args)
//     console.log('ending')
// }
//
// withLog(showName,'Tom')

/*还不够*/
// function withLogStrong(fun) {
//     return function () {
//         console.log('starting')
//         const func = fun.apply(this,arguments)
//         console.log('ending')
//         return func
//     }
// }
//
// const showLog = withLogStrong(showName)
// console.log('===')
// showLog('Tom')
//========

/*类的装饰*/
function log(target) {
    target.work = 'xxx' //静态属性
}

function logQ(...args) {
    return function (target) {
        target.prototype.data = args //实例属性
    }
}

function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        console.log('foo')
    }

}
let Person = (_dec = logQ({
    name: 'Tom',
    age: 12
}), _dec2 = mixins(Foo), log(_class = _dec(_class = _dec2(_class = class Person {
}) || _class) || _class) || _class)
console.log(Person.work)
const Tom = new Person()
console.log(Tom.data)
Tom.foo()

/*方法的装饰*/

function logF(target, name, descriptor) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    let oldValue = descriptor.value

    descriptor.value = function () {
        console.log(`${name} with`, arguments)
        return oldValue.apply(this, arguments)
    }

    return descriptor
}

let Math = (_class2 = class Math {
    add(a, b) {
        return a + b
    }

}, (_applyDecoratedDescriptor(_class2.prototype, "add", [logF], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)
new Math().add(1, 2)
