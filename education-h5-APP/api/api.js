const api =(params)=>{
	let URL='http://m.mengxuegu.com/api/'
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title:'加载中'
		})
		uni.request({
			url:URL+params.url,
			method:params.method || 'GET',
			data:params.data||'',
			success:res=>{
				uni.hideLoading()
				resolve(res.data)
			}
		})
	})
}

export default api