//app.js
App({
  onLaunch: function () {
    this.loadLogs()
    this.loadLocalFiles()
    wx.cloud.init()
    wx.cloud.callFunction({
      name:'getOpenid',
      complete:res =>{
        this.globalData.userOpenid = res.result.openid
      }
    })
  },
  globalData: {
    userOpenid:undefined,
    localFileList: [],
    cloudFileList: [],
    selectedFile:undefined,
    selectedFileSaved:false,
  },

  loadLogs:function(){
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  loadLocalFiles(){
    this.globalData.localFileList = wx.getStorageSync('files') || []
  },

})

