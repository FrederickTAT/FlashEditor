const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    file:{},
    titleInputFocus:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      file: app.globalData.selectedFile
    })
    app.globalData.selectedFileSaved = false
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      titleInputFocus:app.globalData.selectedFile.title == "",
      file:app.globalData.selectedFile
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.saveFiles()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if (!app.globalData.selectedFileSaved) {
      this.saveFiles()
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  changeTitle:function(event){
    if (app.globalData.selectedFile.title != event.detail.value){
      app.globalData.selectedFile.title = event.detail.value
      
    }

  },
  changeContent:function(event){
    if(app.globalData.selectedFile.content != event.detail.value){
      app.globalData.selectedFile.content = event.detail.value
    }
  },
  saveFiles:function(){
    let title = app.globalData.selectedFile.title
    let content = app.globalData.selectedFile.content
    if (title == "") {
      if (content == "") {
        app.globalData.selectedFile = undefined
      } else {
        app.globalData.selectedFile.title = "无标题 - " + content.slice(0, 5)
      }

    }
    if (app.globalData.selectedFile != undefined ) {
      app.globalData.localFileList.unshift(app.globalData.selectedFile)
      wx.setStorageSync('files', app.globalData.localFileList)
      app.globalData.selectedFileSaved = true
    }
  }
})