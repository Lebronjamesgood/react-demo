import Mock from 'mockjs'

export const fetchGoodsList = () => {
	const goodsList = Mock.mock({
		'list|20': [
			{
				key: '@id()',
				name: '@cname(10, 20)',
				img: '@img(64x64)',
				price: '@float(0.01, 9999.99)',
				stock: '@integer(10, 200)',
				createTime: '@date(yyyy-MM-dd HH:mm:ss)',
				updateTime: '@date(yyyy-MM-dd HH:mm:ss)',
			},
		],
		total: 100,
	})
  //返回延时list对象
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(goodsList)
		}, Mock.Random.integer(500, 1000))
	})
}
