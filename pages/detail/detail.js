const Service = require('../../service/Service')
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Service.getCaseDetail(options.id).then((data) => {
      // this.setData({
      //   nodes: data.content.rendered
      // })
      var that = this;
      WxParse.wxParse('article', 'html', data.content.rendered, that, 5);
    })
  }
})