const app = getApp()
var TextFile = require('../../models/TextFile.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    file:undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      file:app.globalData.selectedFile
    })
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  changeName:function(event){
    var file = this.data.file
    file.name = event.detail.value
    file.size = file.name.length + file.content.length
  },
  changeContent:function(event){
    var file = this.data.file
    file.content = event.detail.value
    file.size = file.name.length + file.content.length
  }
})