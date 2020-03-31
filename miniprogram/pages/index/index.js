//index.js
const app = getApp()

Page({
  data: { 
    'name':'Lao Chen, Good'
  },

  onLoad: function() {
    
  },
  onShow:function(){
    wx.login({
      success: function(){
        wx.getUserInfo({
          success:function(res){

          }
        })
      }

    })
  }
})

  

