import React, { useState } from 'react'
import {Table,Avatar} from "antd"
import { fetchGoodsList } from './hookService/shoopListService'
import useService from "./hookService/myHook"

const columns = [
  {
    title: "商品名称",
    key: "name",
    dataIndex: "name",
    render: (name, row) => (
      <React.Fragment>
        <Avatar src={row.img} />
        &nbsp;&nbsp;
        {name}
      </React.Fragment>
    )
  },
  {
    title: "商品价格",
    key: "price",
    dataIndex: "price",
    render: price => `¥ ${parseFloat(price).toFixed(2)}`
  },
  {
    title: "商品库存",
    key: "stock",
    dataIndex: "stock"
  },
  {
    title: "创建时间",
    key: "createTime",
    dataIndex: "createTime"
  },
  {
    title: "更新时间",
    key: "updateTime",
    dataIndex: "updateTime"
  }
];
const GoodListTable = ()=>{
  console.log(fetchGoodsList())
  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  //自定义hook 支持传入一个函数和一个参数病返回一个对象
  const { loading = false, error, response = {} } = useService(fetchGoodsList, {
		pageSize,
		currentPage,
  })
  //将返回的response赋值给list和total
  const {list = [],total} = response || {}
  return (
		<div>
			<Table
				loading={loading}
				dataSource={list}
				columns={columns}
				bordered
				pagination={{
					pageSize,
					current: currentPage,
					total,
					onChange: (pageNo, pageSize) => {
            //useState修改state里的currentPage和pageSize
						setCurrentPage(pageNo)
						setPageSize(pageSize)
					},
				}}
			/>
		</div>
	)

}

export default GoodListTable
