Page({
   data: {
    loadingHidden: false,
    refreshHidden: true,
    loadmoreHidden: true,
    oneyuanimg:"/images/juanpi.jpg",
    lowpriceimg:"/images/lowprice.jpg",
    huileftimg:"/images/fation.jpg",
    huirtimg:"/images/fationr.jpg",
    huirbimg:"/images/men.jpg",
    scrollTop:"2",
    current: 0,
    bannerSrc:[
     "/images/banner1.jpg",
     "/images/banner2.jpg",
     "/images/banner3.jpg",
     "/images/banner4.jpg",
     "/images/banner5.jpg"
    ],
    swiper:{
      autoplay:"ture",
      current:0,
      interval:5000,
      indicatorDots:"true"
    },
    navItem:[
      {
        navSrc:"/images/navimg.png",
        navText:"最后疯抢"
      },
      {
        navSrc:"/images/navimg2.png",
        navText:"九块九包邮"
      },
      {
        navSrc:"/images/navimg.png",
        navText:"拼团"
      },
      {
        navSrc:"/images/navimg.png",
        navText:"即将上线"
      },
      {
        navSrc:"/images/navimg.png",
        navText:"签到赚积分"
      }
    ],
    // prolist:[
    //   {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   },
    //    {
    //     src:"//s2.juancdn.com/bao/160919/e/a/57dfc13c151ad12c1e8b457c_800x800.jpg",
    //     manjian:"满两件减15元",
    //     zhuanchang:"资源品牌洗发水专场",
    //     protype:"上新"
    //   }
    // ]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        setTimeout(function () {
          that.setData({
            prolist: res.data,
            loadingHidden: true
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            prolist: res.data.concat(that.data.prolist),
            refreshHidden: true
          });
        }, 1500);
      }
    });
  },
  onPullDownRefresh: function () {
    console.log("refresh");
  },
  actionTolower: function () {
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/more.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            prolist: that.data.prolist.concat(res.data),
            loadmoreHidden: true
          });
        }, 1500);
      }
    });
  },
  switchSlider: function (event) {
   this.setData({
     current: event.target.dataset.index
   })
 },

 changeSlider: function (event) {
   this.setData({
     current: event.detail.current
   });
 }
  });
