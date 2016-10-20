Page({
  data: {
    id: 0,
    content: ''
  },
  onLoad: function (params) {
    this.setData({
      id: params.id
    })
  },
  onReady: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/detail.json',
      success: function (res) {
        wx.setNavigationBarTitle({
          title: res.data.title,
          success: function () {
            that.setData({
              content: res.data.content
            })
          }
        });
      }
    })
  }
})
