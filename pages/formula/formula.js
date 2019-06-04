const html2json = require("../../utils/html2json/html2json.js").html2json;
const katex = require("../../utils/katex/katex.js")
//const Widget = require("../../utils/canvas-latex/canvas-latex.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mathJson:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      mathJson: this.mathStrToJson("\\int^{a}"),
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

  mathStrToJson:function(mathString) {
    var mHtml = katex.renderToString(mathString)
    var regPattern = /<span class="katex-mathml"><math>[\s\d\D]*<\/math><\/span>/
    var betterMathHtml = mHtml.replace(regPattern, "")
    regPattern = /<svg[\s\d\D]*<\/svg>/
    var pathPattern = /<path d=\'[\s\d\D]*\'\/>/
    //console.log(pathPattern.exec(betterMathHtml))
    //betterMathHtml = betterMathHtml.replace(regPattern,'')
    //console.log(betterMathHtml)
    betterMathHtml = `<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">c</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.12661100000000003em;"></span><span class="mord">±</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.913389em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mord"><span class="mord mathdefault">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.873389em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><img src="../../../assets/svg/sqrt.svg" /></span></span></span><span class="vlist-s"></span></span><span class="vlist-r"><span class="vlist" style="height:0.12661100000000003em;"><span></span></span></span></span></span></span></span></span>`
    var mJson = html2json(betterMathHtml).nodes[0];
    console.log(mJson);

    return mJson;
  }
})