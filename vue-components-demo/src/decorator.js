/*
*   decorator
*    查看源码 npx babel decorator.js --out-file complied.js
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
    foo() { console.log('foo') }
};


@log
@logQ({
    name:'Tom',
    age:12
})
@mixins(Foo)
class Person {
}

console.log(Person.work)

const Tom = new Person()
console.log(Tom.data)
Tom.foo()


/*方法的装饰*/
function logF(target,name,descriptor) {

    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };

    let oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`${name} with`, arguments);
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}

function dec(id){
    console.log('evaluated', id);
    return () => console.log('executed', id);
}


class Math {
    @logF
    @dec(1)
    @dec(2)
    add(a, b) {
        return a + b;
    }
}

new Math().add(1,2)
