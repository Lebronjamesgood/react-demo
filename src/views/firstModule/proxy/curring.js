/**
*    函数柯里化
*    将第1个参数进行复用
*/

//1.参数复用
//正则校验
function check(reg,text){
  return reg.test(text)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true




//柯里化后
function curryingCheck(reg){
  return function(text){
    return reg.test(text)
  }
}

//校验是否数字
var hasNumber = curryingCheck(/\d+/g)
//校验是否为字母
var hasLetter = curryingCheck(/[a-z]+/g)


// 其他地方都可以调用这两个方法

hasNumber('test1') // true
hasNumber('testtest') // false
hasLetter('21212')    //false


//----------------------------------------------------

//2.提前确认


// 实现一个add方法，使计算结果能够满足如下预期：


function add(){
  //将arguments转化成类数组
  let argu = Array.from(arguments)
  console.log('argu1', argu)
  console.log('arguments', arguments)
  //利用闭包储存入参
  let argumentArr = function(){
    console.log('argu12', argu)
    argu.push(...arguments)
    return argumentArr
  }
  console.log("argu",argu)

  argumentArr.toString = function () {
    console.log('argu12', argu)
		return argu.reduce((a, b) => {
			return a + b 
		})
	}
   return argumentArr
}

add(1)(2)(3)wanshang 
add(1, 2, 3)(4)
add(1)(2)(3)(4)(5)
