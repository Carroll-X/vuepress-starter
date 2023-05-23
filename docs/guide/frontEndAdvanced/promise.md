---
title: Promise/A+译文
date: 2022-04-01
tags: 
  - JavaScript
  - Promise
categories: 
 - JavaScript
---

## 1.术语

1.1. `promise` 是一个对象或者函数，并且拥有符合本规范的 `then` 方法。

1.2. `thenable` 是定义 `then` 方法的对象或者函数。

1.3. `value` 是任意合法的 JavaScript 值，（包括 undefined，thenable，promise）

1.4 `exception` 是使用`throw`语句抛出的值

1.5 `reason` 表示一个`promise` 被拒绝的原因。

## 2.要求

### 2.1. Promise 状态（states）

一个 Promise 的状态必须为以下三种状态之一：**等待态（Pending）** 、**完成态（Fulfilled**） 和 **拒绝态（Rejected）** 。

- 2.1.1. 当 **promise** 是**准备态（Pending）** 时
    - 2.1.1.1. 可以改变为 完成态（Fulfilled）或者 拒接态（Rejected）
- 2.1.2 当 **promise** 是 **完成态（Fulfilled）** 时

    - 2.1.2.1 promise 不能改变为其他状态

    - 2.1.2.2 必须有一个 **值（value）** ，并且不能改变

- 2.1.3 当 **promise** 是 **拒接态（Rejected）** 时

    - 2.1.3.1 promise 不能改变为其他状态

    - 2.1.3.2 必须有一个 **原因（reason）** ， 并且不能改变

这里的不能改变指的是恒等（即可用 `===` 判断相等），而不是意味着更深层次的不能改变（指当 value 或 reason 不是基本值时，只要求其引用地址相等，但属性值可被更改）

### 2.2. `then` 方法

 一个 `promise` 必须提供一个 `then` 方法来**接收它当前 完成的值（value） 或者 拒绝的原因（reason）**
 每一个 `promise` 的 `then` 方法 都接收 两个参数：
 ```js
    promise.then(onFulfilled, onRejected)
 ```
 

- 2.2.1. `onFulfilled`和`onRejected` 都是可选参数：

    -   2.2.1.1 如果 `onFulfilled` 不是函数，则必须忽略
    
    -   2.2.1.2 如果 `onRejected` 不是函数，则必须忽略

- 2.2.2. 如果 `onFulfilled` 是一个函数：

    - 2.2.2.1 此函数必须在 `promise` 完成（Fulfilled）后被调用，以 `promise` 的值（value）作为它的第一个参数

    - 2.2.2.2 此函数在 `promise` 完成（Fulfilled）之前一定不能被调用

    - 2.2.2.3 此函数只能被调用一次

- 2.2.3. 如果 `onRejected` 是一个函数：

    - 2.2.3.1 此函数必须在 `promise` 拒绝（Rejected）后被调用，以 `promise` 拒绝的原因（reason）作为它的第一个参数

    - 2.2.3.2 此函数在 `promise` 拒绝（Rejected）之前一定不能被调用

    - 2.2.3.3 此函数只能被调用一次

- 2.2.4. 在执行上下文堆栈仅包含**平台代码**之前，不得调用 `onFulfilled` 和 `onRejected` [注释3.1]

- 2.2.5. `onFulfilled` 和 `onRejected` 必须被作为函数调用（即 没有 this 值）[注释3.2]

- 2.2.6. `then` 方法可以在同一个 `promise` 里调用多次

    - 2.2.6.1 如果/当 `promise` 完成（Fulfilled）时，所有相应的 `onFulfilled` 回调必须按照 then 的顺序依次执行。

    - 2.2.6.2 如果/当 `promise` 拒绝（Rejected）时，所有相应的 `onRejected` 回调必须按照 `then` 的顺序依次执行。

- 2.2.7. `then` 方法必须返回一个 `promise` [注释3.3]
    
    ```js
        promise2 = promise1.then(onFulfilled, onRejected);
    ```
    - 2.2.7.1 如果 `onFulfilled` 或 `onRejected` 返回一个值 `x`，则运行下面的 **Promise 解决过程**：`[[Resolve]](promise2, x)` [注释2.3]

    - 2.2.7.2 如果 `onFulfilled` 或者 `onRejected` 抛出一个异常 `e` ，则 `promise2` 必须拒绝（Rejected），并返回异常 `e` 的原因（reason）

    - 2.2.7.3 如果 `onFulfilled` 不是函数且 `promise1` 完成（Fulfilled）执行， `promise2` 必须完成（Fulfilled）执行，并返回和 `promise1` 相同的值（value

    - 2.2.7.4 如果 `onRejected` 不是函数且 `peomise1` 是拒绝（Rejected）状态，`promise2` 也必须拒绝（Rejected），并返回和 `promise1` 相同的原因（reason）

### 2.3. Promise 解决过程

**Promise 解决过程** 是一个抽象的操作，其需输入一个 `promise`和一个值（value），我们表示为 `[[Resolve]](promise, x)`，如果 `x` 有 `then` 方法且看上去像一个 `Promise` ，解决程序即尝试使 `promise` 接受 `x` 的状态；否则其用 `x` 的值来执行 `promise` 。

这种 `thenable` 的特性使得 `Promise` 的实现更具有通用性：只要其暴露出一个遵循 `Promise/A+` 协议的 `then` 方法即可；这同时也使遵循 `Promise/A+` 规范的实现可以与那些不太规范但可用的实现能良好共存。

运行 `[[Resolve]](promise, x)` 需遵循以下步骤：

- 2.3.1. 如果 `promise` 和 `x` 指向同一对象，以 `TypeError` 为原因拒绝执行 `promise`

- 2.3.2. 如果 `x` 是一个 `promise` , 那么就采用他的状态[注释3.4]：

    - 2.3.2.1 如果 `x` 处于等待态（pending）, `promise` 需保持为等待态（pending）直至 `x` 为完成态（Fulfilled）或拒绝（Rejected）

    - 2.3.2.2 如果 `x` 处于完成态（Fulfilled），用相同的值（value）完成（Fulfill） `promise`

    - 2.3.2.3 如果 `x` 处于拒绝态（Rejected），用相同的原因（reason）拒绝（reject）`promise`

- 2.3.3. 另外，如果 `x` 是对象或者函数

    - 2.3.3.1. 把 `x.then` 赋值给 `then` [注释3.5]

    - 2.3.3.2. 如果取 `x.then` 的值时抛出错误 `e` ，则以 `e` 为原因（reason）拒绝（reject） `promise`

    - 2.3.3.3. 如果 `then` 是一个函数，那么把 `x` 当做 `this` 调用它，第一个参数 `resolvePromise` ，第二个参数 `rejectPromise`，其中：

        - 2.3.3.3.1 如果使用值（value） `y` 为参数来调用 `resolvePromise` ，则运行 `[[Resolve]](promise, y)`

        - 2.3.3.3.2 如果调用 `rejectPromise` 的参数是原因（reason）是 `r` 时，则使用原因（reason）`r` 来拒绝（reject）`promise`

        - 2.3.3.3.3 如果 `resolvePromise` 和 `rejectPromise` 同时被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用

        - 2.3.3.3.4 如果调用 `then` 抛出了异常e，

            - 2.3.3.3.4.1 如果已经调用了 `resolvePromise` 或 `rejectPromise`，则忽略。

            - 2.3.3.3.4.2 否则，以 `e` 为原因 `reason` 拒绝（reject）`promise`

        
    - 2.3.3.4. 如果 `then` 不是一个函数，则以 `x` 为参数完成（fulfill）`promise`

- 2.3.4. 如果 `x` 不为对象或者函数，以 `x` 为参数完成（fulfill） `promise`


如果一个 `promise` 是用一个参与循环 `thenable` 链的 `thenable` 来解析的，那么 `[[Resolve]]（promise，thenable）` 的递归性质最终会导致再次调用 `[[Resolve]]（promise，thenable）`，遵循上述算法将导致无限递归。我们鼓励但不要求实现检测这种递归，并以 `TypeError` 错误为理由（reason）拒绝（reject） `promise`


## 3. 注释

- 3.1. 这里的 **“平台代码“** 指的是引擎、环境和 `promise` 实现代码。在实践中，该要求确保在调用 `then` 方法被调用的那一轮的事件循环之后，使用新堆栈异步执行 `onFulfilled` 和 `onRejected` 。这可以通过“宏任务”机制（如setTimeout 或 setImmediate ）或“微任务”机制（如 MutationObserver 或 process.nextTick ）实现。由于 `promise` 实现被认为是平台代码（**注：** 即都是 JavaScript），因此它本身可能包含一个任务调度队列或调用处理程序的“trampoline”。

- 3.2. 也就是说在 **严格模式（strict）** 中，函数 `this` 的值为 `undefined` ；在非严格模式中其为全局对象。

- 3.3. 代码实现在满足所有要求的情况下，可以允许 `promise2 === promise1` 。每个实现都要文档说明其是否允许以及在何种条件下允许 `promise2 === promise1` 。

- 3.4. 总体来说，如果 `x` 符合当前实现，我们才认为它是真正的 `promise` 。本规则允许那些特例实现接受符合已知要求的 `Promises` 状态。

- 3.5. 这步我们先是存储了一个指向 `x.then` 的引用，然后测试并调用该引用，以避免多次访问 `x.then` 属性。这种预防措施确保了该属性的一致性，因为其值可能在检索调用时被改变。

- 3.6 实现不应该对 `thenable` 链的深度设限，并假定超出本限制的递归就是无限循环。只有真正的循环递归才应能导致 `TypeError` 异常；如果一条无限长的链上 `thenable` 均不相同，那么递归下去永远是正确的行为。