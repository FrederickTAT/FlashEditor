//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasLocalFiles:false,
    fileInfo:null,
    localFileList:app.globalData.localFileList,
    selectorHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hasLocalFiles:app.globalData.localFileList.length > 0
    })
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
      selectorHidden:true,
      hasLocalFiles: app.globalData.localFileList.length > 0,
      localFileList: app.globalData.localFileList,
      
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

  /**
   * 编辑文件
   */
  editFile:function(event){
    var fid = event.currentTarget.dataset.fid //文件id
    var index = event.currentTarget.dataset.index //文件序号
    var selectedFile = app.globalData.localFileList.splice(index, 1)[0] 
    console.log(index)
    app.globalData.selectedFile = selectedFile
    if(selectedFile.type == "text"){
      wx.navigateTo({
        url: '/pages/editor/editor',
      })
    }else{
      wx.navigateTo({
        url: '/pages/formula/formula',
      })
    }
    
  },
  /**
   * 创建新文件
   */
  createNewFile:function(){
    this.setData({
      selectorHidden:false
    })
  },

  selectorCancle:function(){
    this.setData({
      selectorHidden:true
    })
  },

  createNewText:function(){
    app.globalData.selectedFile = {
      type:"text",
      title:"",
      content:"",
      owner:""
    }
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },

  createNewFormula: function () {
    app.globalData.selectedFile = {
      type: "formula",
      content: "",
    }
    wx.navigateTo({
      url: '/pages/formula/formula',
    })
  }
})
