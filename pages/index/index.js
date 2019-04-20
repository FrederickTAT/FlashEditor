//index.js
//获取应用实例
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserOpenid:false,
    fileInfo:null,
    localFileList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      localFileList:app.globalData.localFileList,
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
    var localFileList = this.data.localFileList//文件列表
 
    app.globalData.selectedFile = localFileList[index]
    if(index != 0){//移至列表最顶端
      localFileList.unshift(localFileList[index])
      localFileList.splice(index+1,1)
    }
    wx.switchTab({
      url: '/pages/editor/editor',
    })
  },
  /**
   * 创建新文件
   */
  createNewFile:function(){
    var file = {
      id: app.globalData.localFileList.length + 1,
      title: "",
      owner: "",
      content:""
    }
    app.globalData.selectedFile = file
    this.data.localFileList.unshift(file)
    app.globalData.localFileList = this.data.localFileList
    wx.switchTab({
      url: '/pages/editor/editor'
    })
  },
})
