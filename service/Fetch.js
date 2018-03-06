const Fetch = (function () {
  const request = function (method = 'GET', url, data, loadingConfig, isShowLoading = false) {
    data = {
      ...data
    }
    if (isShowLoading) {
      wx.showLoading(loadingConfig)
    }
    return new Promise((resolve, reject) => {
      wx.request({
        method,
        url,
        data,
        success(res) {
          if (Number(res.statusCode) === 200) {
            // 请求成功
            resolve(res.data)
          } else {
            //  其他情况弹出提示
            wx.showToast({
              title: res.errMsg,
              duration: 1000,
              icon: 'none'
            })
          }
        },
        fail(res) {
          // 请求失败
          reject(res)
        },
        complete() {
          // 完成请求， 无论statusCode为多少
          setTimeout(() => {
            wx.hideLoading()
          }, 200)
        }
      })
    })
  }

  const getRequest = function (url, data = {}) {
    return request('GET', url, data)
  }

  const postRequest = function (url, data = {}) {
    return request('POST', url, data)
  }

  const getRequestWidthLoading = function (url, data, loadingConfig = {}) {
    const config = { ...loadingConfig, title: '加载中' }
    return request('GET', url, data, config, true)
  }

  const postRequestWidthLoading = function (url, data, loadingConfig = {}) {
    const config = { ...loadingConfig, title: '加载中' }
    return request('POST', url, data, config, true)
  }

  return {
    get: getRequest,
    post: postRequest,
    getLoading: getRequestWidthLoading,
    postLoading: postRequestWidthLoading
  }
})()

module.exports = Fetch