const Service = require('../../service/Service')
const { navigateTo } = require('../../utils/util.js')

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
    swiperItemCss: 'flex-center',
    cases: [],
    isShowDialog: false,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Service.getCases().then((data) => {
      this.setData({
        cases: data
      })
    })
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
  },

  tapPhone() {
    wx.makePhoneCall({
      phoneNumber: '05923278579'
    })
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

  itemClick(e) {
    const { id, link } = e.currentTarget.dataset
    navigateTo('../detail/detail?', { 'id': id, 'link': link })
  },

  // showDialog: function () {
  //   // 显示遮罩层
  //   var animation = wx.createAnimation({
  //     duration: 300,
  //     timingFunction: "ease"
  //   })
  //   this.animation = animation
  //   animation.translateY(200).step()
  //   this.setData({
  //     animationData: animation.export(),
  //     isShowDialog: true
  //   })
  //   setTimeout(function () {
  //     animation.translateY(0).step()
  //     this.setData({
  //       animationData: animation.export()
  //     })
  //   }.bind(this), 100)
  // },

  // hideDialog: function () {
  //   // 隐藏遮罩层
  //   var animation = wx.createAnimation({
  //     duration: 300,
  //     timingFunction: "ease"
  //   })
  //   this.animation = animation
  //   animation.translateY(200).step()
  //   this.setData({
  //     animationData: animation.export(),
  //   })
  //   setTimeout(function () {
  //     animation.translateY(0).step()
  //     this.setData({
  //       animationData: animation.export(),
  //       isShowDialog: false
  //     })
  //   }.bind(this), 100)
  // },
  // testRoute () {
  //   navigateTo('../route/route')
  // }
})