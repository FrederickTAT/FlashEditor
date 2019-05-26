//app.js
var User = require('models/User.js')

App({
  onLaunch: function () {
    this.loadLogs()
    //wx.clearStorage()
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        this.globalData.user.openid = res.result.openid
      }
    })
  },
  globalData: {
    user:new User(),
    selectedFile:undefined,
    selectedFileSaved:false,
    selectedFormula:undefined,
  },

  loadLogs:function(){
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

})

