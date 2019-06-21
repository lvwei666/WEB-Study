// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lvwei666-pv2y1'

cloud.init()
const db = cloud.database({env})
// 云函数入口函数
exports.main = async (event, context) => {
    const userInfo = event.userInfo;
    return await db.collection('dynamic').add({
      data: {
        content: event.content,
        images: event.imagePath,
        createBy: userInfo.openId,
        createTime: new Date()
      }
    })
}