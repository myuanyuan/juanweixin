Page({
  data: {
    percent: 0,
    progressShow: true,

    poster: '/media/xuwei.webp',
    name: '每时每刻',
    author: '许巍',
    src: '/media/now.mp3',
    action: null

  },
  onLoad: function () {
    var timer = setInterval(function () {
      this.setData({
        percent: ++this.data.percent
      });
      if(this.data.percent === 100) {
        this.setData({
          progressShow: false,
          action: {
            method: 'play'
          }
        })
        clearInterval(timer);
      }
    }.bind(this), 100);
  },

  videoErrorCallback: function () {
    console.log('error');
  }
});
