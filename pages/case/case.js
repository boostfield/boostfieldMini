const Service = require('../../service/Service')
const { navigateTo } = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cases: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Service.getCases().then((data) => {
      console.log(data)
      this.setData({
        cases: data,
      })
    })
  },

  itemClick(e) {
    const { id } = e.currentTarget.dataset
    navigateTo('../detail/detail?', { 'id': id})
  }
})