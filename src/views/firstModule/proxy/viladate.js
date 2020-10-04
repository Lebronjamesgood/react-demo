//

let validator = {
  set:(obj,prop,value)=>{
    if (prop === 'name') {
			if (value === '') {
				throw new TypeError('名称不能为空')
			}
		}
    obj[prop] = value
    return true
  }
}
let form = new Proxy({},validator)
form.name = ""  //报错 VM41:5 Uncaught TypeError: 名称不能为空  //可以为做检验
form.name = "zjw"

let handler = {
	set: (obj, key, value) => {
    if (key in obj) {
      return false
    }
    return obj.setItem(value)
  },
	get: (obj, key) => {
    return obj[key] || obj.getItem(key) || undefined
  },
}
let docCookies = new Proxy({}, handler)
docCookies.cookie1 = '123'

