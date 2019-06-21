// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lvwei666-pv2y1'
cloud.init()
const db = cloud.database({env})
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const groupNum = await db.collection('user-group').where({
    userId: wxContext.OPENID
  }).get()
  const storeUser = await db.collection('user').where({
    openId: wxContext.OPENID
  }).get()
  return {
    groupNum: groupNum.data.length,
    storeUser: storeUser.data[0]
  }
}