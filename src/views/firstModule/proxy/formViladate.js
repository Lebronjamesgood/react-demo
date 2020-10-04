//校验规则
const rules = {
  name(val){
    return val !== "" && val.length>6
  },
  age(val){
    return val !== "" && val.length>6
  }
}

function formViladator(target, rules){
  return new Proxy(target,{
    _rules:rules,
    set(target,key,value){
      if(target.hasOwnProperty(key)){
        let rules = this.rules[key]
        console.log(rules)
        if (!!rules(value)) {
          return Reflect.set(target,key,value)
        }
        else{
          throw Error(`Cannot set ${key} to ${value}. Invalid.`)
        }
      }
      else{
         throw Error(`${key} is not a valid property`)
      }
    }
  })
}
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
		return formViladator(this, rules)
	}
}

const bill2 = new Person('Bill', 25)


