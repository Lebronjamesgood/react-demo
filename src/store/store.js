/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2020-11-17 14:10:24
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-23 16:13:52
 */
import { createStore, applyMiddleware } from 'redux'
import reducer from "./reduce"
import thunk from 'redux-thunk'


const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))
export default store