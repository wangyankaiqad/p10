import api from '@/api/api.js'


// 列表
const getTitle = async()=>{
	let data=await api({
		url:'/article/api/category/label/list'
	})
	return data
}
// 热门
const getRe = async()=>{
	let data=await api({
		url:'/course/api/course/search',
		method:'post',
	})
	return data
}
// 轮播图
const getlun = async()=>{
	let data=await api({
		url:'/article/api/advert/show/1',
	})
	return data
}


export{
	getTitle,getRe,getlun
}



