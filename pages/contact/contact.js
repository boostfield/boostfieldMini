
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowDialog: false,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  tapPhone() {
    wx.makePhoneCall({
      phoneNumber: '05923278579'
    })
  },

  tapChat() {

  },

  tapAddress() {
    wx.openLocation({
      latitude: 24.5161486550,
      longitude: 118.1386685371,
      scale: 28,
      name: '在田信息技术有限公司',
      address: '厦门市湖里区枋湖西路189号四海智慧园307'
    })
  },
  
  onShareAppMessage() {
    return {
      title: '在田科技',
      path: 'pages/product/product',
    }
  },

  showDialog: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease"
    })
    this.animation = animation
    animation.translateY(200).step()
    this.setData({
      animationData: animation.export(),
      isShowDialog: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },

  hideDialog: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease"
    })
    this.animation = animation
    animation.translateY(200).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        isShowDialog: false
      })
    }.bind(this), 100)
  }
})