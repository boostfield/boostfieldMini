// const qs = {
//   stringify(obj) {
//     let ret = ''
//     for (let attr in obj) {
//       ret += '&' + attr + '=' + obj[attr]
//     }
//     return ret.slice(1, ret.length)
//   }
// }

// /**
//  * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面
//  */
// function navigateTo(url, query = {}) {
//   const queryKeyToArray = Object.keys(query)
//   let targetUrl = url

//   if (queryKeyToArray.length > 0) {
//     targetUrl = targetUrl + qs.stringify(query)
//   }

//   wx.navigateTo({
//     url: targetUrl,
//   })
// }

// /**
//  * 关闭当前页面，跳转到应用内的某个页面。
//  */
// function redirectTo(url, query = {}) {
//   const queryKeyToArray = Object.keys(query)
//   let targetUrl = url

//   if (queryKeyToArray.length > 0) {
//     targetUrl = targetUrl + qs.stringify(query)
//   }

//   wx.redirectTo({
//     url: targetUrl,
//   })
// }

// /**
//  * 显示消息提示框
//  */
// function showToast(defaultConf = {}) {
//   const config = {
//     icon: 'success',
//     ...defaultConf
//   }
//   wx.showToast(config)
// }

// /**
//  * 隐藏消息提示框
//  */
// function hideToast() {
//   wx.hideToast()
// }

// module.exports = {
//   qs,
//   navigateTo,
//   redirectTo,
//   showToast,
//   hideToast
// }