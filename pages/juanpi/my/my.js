Page({
   data:{
      actionSheet:{
        actionSheetHidden: true,
        actionSheetItems: ['马上登陆', '注册账号'],
      },
      modal:{
        modalHidden: true,
        modalHidden2: true
      }
    },
    actionSheetTap: function(e) {
        this.setData({
        'actionSheet.actionSheetHidden': false
        })
    },
    actionSheetChange: function(e) {
        this.setData({
        'actionSheet.actionSheetHidden':true
        })
    },
    bindItemTap:function(e){
        console.log('tap ' + e.currentTarget.dataset.name)
    },
    modalTap: function(e) {
      this.setData({
       'modal.modalHidden': false
    })
  },
    modalChange: function(e) {
      this.setData({
      'modal.modalHidden': true
    })
  },
    modalTap2: function(e) {
       this.setData({
      'modal.modalHidden2': false
    })
  },
    modalChange2: function(e) {
        this.setData({
       'modal.modalHidden2': true
    })
  }
    
})