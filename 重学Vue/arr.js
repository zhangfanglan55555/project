let arr = [1, 2, 3, 4, 5];
arr.b = '100'; //数组的私有属性
// 编程式
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// 声明式：不关心如何实现，不能return,写不写return都会执行完
arr.forEach(function (item) {
    // （item，index),index一般不用
    console.log(item)
})
for (let key in arr) {
    console.log(typeof key); //key会变成字符串类型，可以遍历到数组的私有属性
}
for (let val of arr) {
    // 支持return 并且是值of数组（不能遍历对象）
    // 对象可以使用Object.keys将对象的key作为新的数组
}
// 强制遍历对象
let obj = {
    school: 'zfpx',
    age: 8
}
for (let val of Object.keys(obj)) {
    console.log(obj[val]); //
}
/**
 * 1)forEach不支持return
 * 
 */
/**
 * 面试：forEach, for...in...,for,for..of..的区别：
 *  
 */

//  2) filter 是否操作原数组：不会   返回结果：过滤后的新数组   
//    回调函数的返回结果：如果返回true表示这一项放到新数组中（删除）
// 
[1, 2, 3, 4, 5].filter(function (item) {
    return item > 3
})
//[4,5]

// 3)map 映射：将原有的数组映射成一个新数组
//    是否操作原数组：不会   返回结果：新数组   
//    回调函数的返回结果：回调函数中返回什么这一项就是什么（更新）
[1, 2, 3].map((item) => {
    return item + 1
});
//[2,3,4]


// 4)includes()返回的是boolean
let arr3 = [1, 2, 3, 4]
arr3.includes(5); //false

// 5)find:返回找到的那一项,不会改变原数组 回调函数中返回true表示找到了，找到后停止循环,找不到返回undefined
// 找到具体的某一项用find
let result = arr3.find(function (item, index) {
    return item.toString().indexOf(5) > -1
})

// 6) some 找true,找到true后停止，返回true，找不到返回false
// 7）  every 找false，找到false后停止，返回false
arr3.some((item) => {
    return item === 5
})

// 8)reduce  4个参数,返回的是叠加后的结果，原数组不变，回调函数返回的结果：
[1, 2, 3, 4, 5].reduce(function (prev, next, index, item) {
    /**
     * prev:代表的是数组的第一项 
     * next:是数组的第二项
     * index:索引
     * item:当前数组
     */
    console.log(arguments);
    return 100; //本次的返回值，会作为下一次的prev
})
// {'0':1,'1':2,'2','3':[1,2,3,4,5]}
// {'0':undefined,'1':3,'2','3':[1,2,3,4,5]}
/**第一次： 
* prev:代表的是数组的第一项 
* next:是数组的第二项
* index:索引
* item:当前数组
第二次：prev是undefined,next是数组的第三项
*/
// 获得sum2中price*count的累加值30*2+20*3+60*4
let sum2 = [{
    price: 30,
    count: 2
}, {
    price: 20,
    count: 3
}, {
    price: 60,
    count: 4
}];
sum2.reduce(function (prev, next) {
    console.log(prev)
    return prev + next.price * next.count;
}, 0); //默认指定第一次的prev

// 多维数组转为一维数组
let moreArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let newArr = moreArr.reduce(function (prev, next) {
    return prev.concat(next)
})
console.log(newArr)