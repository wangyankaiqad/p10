import server from './http.js' //导入axios

//首页轮播
const carousel = () => {
   let data = server.post('/resources/carousel')
   return data
}
const login = (msg) => {
   let data = server.post('/users/login', msg)
   return data
}
// 获取购物车的数据
const shoppingCart = (msg) => {
   let data = server.post('/user/shoppingCart/getShoppingCart', msg)
   return data
}
/**手机 */
const getPromoProduct = (msg) => {
   let data = server.post('/product/getPromoProduct', msg)
   return data
}
/**全部商品 */
const getCategory = (msg) => {
   let data = server.post('/product/getCategory', msg)
   return data
}
/**商品 分页 */
const getAllProduct = (msg) => {
   let data = server.post('/product/getAllProduct', msg)
   return data
}

/**商品详情*/
const getDetails = (msg) => {
   let data = server.post('/product/getDetails', msg)
   return data
}
/**详情页轮播图 */
const getDetailsPicture = (msg) => {
   let data = server.post('/product/getDetailsPicture', msg)
   return data
}
/**登录 */
const logins = (msg) => {
   let data = server.post('/users/login', msg)
   return data
}
/**添加到购物车 */
const getShoppingCart = (msg) => {
   let data = server.post('/user/shoppingCart/addShoppingCart', msg)
   return data
}
// 删除购物车
const deleteShoppingCart = (msg) => {
   let data = server.post('/user/shoppingCart/deleteShoppingCart', msg)
   return data
}
/**商品数量 */
const updateShoppingCart=(msg)=>{
   let data = server.post('/user/shoppingCart/updateShoppingCart', msg)
   return data
}
/**订单 */
const getOrder=(msg)=>{
   let data = server.post('/user/order/getOrder', msg)
   return data
}
const register=(msg)=>{
   let data = server.post('/users/register', msg)
   return data
}

export {
   carousel, login, shoppingCart, getPromoProduct,
   getCategory, getAllProduct, getDetails, getDetailsPicture, logins,
   getShoppingCart, deleteShoppingCart,updateShoppingCart,getOrder,register
}
