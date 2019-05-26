//index.js
//var modelsPath = "../../models/"
var File = require('../../models/File.js')
var TextFile = require('../../models/TextFile.js')
var FormulaFile = require('../../models/FormulaFile.js')
var User = require('../../models/User.js')

//获取应用实例

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localFileList: [],
    cloudFileList: [],

    createMode:false,
    checkMode:false,
    checkList:[],
    checkedIndex:0,
    checkAll:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadLocalFiles();
    
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
      localFileList:this.data.localFileList,
      createMode:false,
    })
    this.saveFile()
  },
  /**
   * 加载本地文件
   */
  loadLocalFiles() {
    var localFileList = wx.getStorageSync('files') || []
    for(var i = 0,len = localFileList.length;i<len;i++){
      var file = localFileList[i]
      if(file._type == "TextFile"){
        file.__proto__ = TextFile.prototype
      }
    }
    this.setData({
      localFileList: localFileList
    })
  

  },
  /**
   * 编辑文件
   */
  editFile:function(event){
    if(!this.data.checkMode){
      var index = event.currentTarget.dataset.index //文件序号
      var selectedFile = this.data.localFileList.splice(index, 1)[0]
      this.data.localFileList.unshift(selectedFile)
      app.globalData.selectedFile = selectedFile
      this.saveFile();
      console.log(selectedFile)
      if (selectedFile.type == 'TextFile') {
        wx.navigateTo({
          url: '/pages/editor/editor',
        })
      } else {
        wx.navigateTo({
          url: '/pages/formula/formula',
        })
      }

    }
    
  },
  /**
   * 创建新文件
   */
  createNewFile:function(){
    this.setData({
      createMode:true
    })
  },
  saveFile:function(){
    wx.setStorageSync('files', this.data.localFileList)
  }
  ,

  selectorCancle:function(){
    this.setData({
      createMode:false
    })
  },

  createNewText:function(){
    var newTextFile = new TextFile()
    newTextFile.owner = app.globalData.user
    app.globalData.selectedFile = newTextFile
    this.data.localFileList.unshift(newTextFile)
    this.saveFile()
    wx.navigateTo({
      url: '/pages/editor/editor',
    })
  },

  createNewFormula: function () {
    var newFormulaFile = new FormulaFile()
    newFormulaFile.owner = app.globalData.user
    app.globalData.selectedFile = newFormulaFile()
    this.data.localFileList.unshift(newFormulaFile)
    this.saveFile()
    wx.navigateTo({
      url: '/pages/formula/formula',
    })
  },
  switchToCheckMode: function (event) {
    var index = event.currentTarget.dataset.index
    this.setData({
      checkedIndex:index,
      checkList: [index.toString()],
      checkMode: true,
    })
    var query = wx.createSelectorQuery()
    query.select('.fileInfoGroup').boundingClientRect()
    query.exec(res=>{
      //console.log(res[0].height)
    })
    console.log("swithToCheckMode")
  },
  checkBoxChange:function(event){
    console.log(event.detail.value)
    this.setData({
      checkList:event.detail.value
    })
    console.log("checkBoxChange "+event.detail.value)
  },
  checkModeDelete:function(){
    var that = this
    var checkList = this.data.checkList
    var localFileList = this.data.localFileList
    wx.showModal({
      title: '删除',
      content: '是否删除这些文件',
      success(res){
        if(res.confirm){
          var list = []
          for(var i = 0,len = checkList.length;i<len;i++){
            list.push(localFileList[parseInt(checkList[i])])
          }
          localFileList = localFileList.filter(file => !list.includes(file))
          that.setData({
            localFileList:localFileList,
            checkMode:false
          })
          that.saveFile()
        }
      }
    })
  },

  checkModeCancle:function(){
    this.setData({
      checkMode:false,
      checkAll:false,
      checkList:[]
    })
    console.log("checkModeCancle")
  },
  checkModeCheckAll:function(){
    var list = []
    for (let i = 0; i < this.data.localFileList.length; i++) {
      list.push(i)
    }
    this.setData({
      checkList:list,
      checkedIndex:-1,
      checkAll:true
    })
    console.log("checkModeCheckAll" + this.data.checkList)
  },
  checkModeCancleCheckAll:function(){
    this.setData({
      checkAll:false,
    })
  }
})
