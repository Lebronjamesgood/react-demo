import { useEffect, useRef, useState, useCallback } from 'react'
import { isEqual } from 'lodash'


const useService = (service, params) => {
  //useRef保存变量和state不同,state内变量变化会触发dom渲染,单ref内变量不会
  const preParams = useRef(null)
  const [callback,{loading, error,response}] = useServiceCallback(service)

  useEffect(() => {
		//如果上次的参数和传入的参数不同再将参数保存至useRef保存的变量中
		if (!isEqual(params, preParams.current)) {
			preParams.current = params
      //useServiceCallback返回的callback是一个function
      //将新的params传入callback()
			callback(params)
		}
	})
  return  { loading, error, response }
}
export const useServiceCallback = service => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [response, setResponse] = useState(null)
  //自定义hook,useCallback
	const callback = useCallback(
		params => {
			setLoading(true)
			setError(null)
			service(params)
				.then(response => {
					setLoading(false)
					setResponse(response)
				})
				.catch(error => {
					setLoading(false)
					setError(error)
				})
		},
		[service]
	)

	return [callback, { loading, error, response }]
}

export default useService