//app.js
App({
  onLaunch: function () {
    this.loadLogs()
    wx.cloud.init()
    wx.cloud.callFunction({
      name:'getOpenid',
      complete:res =>{
        console.log(res)
      }
    })
  },
  globalData: {
    userOpenid:"",
    hasUserOpenid:false,
    localFileList: [],
    selectedFile:null,
    
  },

  loadLogs:function(){
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  loadLocalFiles(){
    this.globalData.localFileList = wx.getStorage('files') || []
  },

  
})

