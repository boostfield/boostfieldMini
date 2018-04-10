// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {
        img: "https://www.boostfield.com/wp-content/uploads/2018/03/img_home_top.jpg",
        title: "BOOSTFIELD",
        subTitle: "专业互联网解决方案提供商"
      },
      {
        img: "https://www.boostfield.com/wp-content/uploads/2018/03/img_banner_02.png",
        title: "小程序定制开发",
        subTitle: "布局微信新生态，占领流量新高地"
      },
      {
        img: "https://www.boostfield.com/wp-content/uploads/2018/03/img_banner_03.png",
        title: "区块链全套解决方案",
        subTitle: "打造数字经济时代的信任基石"
      }
    ],
    swiperItemCss: 'flex-center'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 设置转发
   */
  onShareAppMessage() {
    return {
      title: '在田科技',
      path: 'pages/product/product',
    }
  },

  tapQrCode() {
    wx.previewImage({
      urls: ['https://www.boostfield.com/wp-content/uploads/2018/03/img_wechat.png'] // 需要预览的图片http链接列表
    })
  },

  bindSwiperChange({ detail }) {
    this.setData({
      swiperItemCss: detail.current == 0 ? 'flex-center' : 'flex-left'
    })
  }
})