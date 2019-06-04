const app = getApp()
var TextFile = require('../../models/TextFile.js')
var file = new TextFile();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formats:{},
    title:file.name,
    readOnly:false,
    hideBars:{
      textbar:true,
      linebar:true,
    }
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
    console.log(file)
    file = app.globalData.selectedFile
    this.setData({
      title:file.name
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
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
      that.editorCtx.setContents({
        delta: file.content,
        success: function () {
          console.log("load content successed")
        }
      })
    }).exec()
  },
  changeName:function(event){
    file.name = event.detail.value
    file.size = file.name.length + file.content.length
  },
  showbar:function(event){
    const that = this;
    var name = event.target.dataset.name
    var hidebars = this.data.hideBars
    console.log(hidebars)
    for(var bars in hidebars){
      if(bars != name){
        hidebars[bars]=true;
      }
    }
    hidebars[name] = !hidebars[name]
    this.setData({
      hideBars:hidebars
    })
  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    this.editorCtx.format(name, value)
  }, 
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  undo() {
    this.editorCtx.undo()
  },
  redo() {
    this.editorCtx.redo()
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  }, 
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        console.log(res.tempFilePaths[0])
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          alt: res.tempFilePaths[0],
          success: function () {
            
            console.log('insert image success')
          }
        })
      }
    })
  },
  changeContent:function(e){
    file.content = e.detail.delta
    console.log(file)
  },
  insertFormula:function(){
    
  }
})