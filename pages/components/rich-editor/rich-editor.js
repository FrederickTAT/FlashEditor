// pages/components/rich-editor/rich-editor.js

const html2json = require("../../../utils/html2json/html2json.js").html2json;
const katex = require("../../../utils/katex/katex.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mathString: {
      type: String,
      value: "",
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mathJson: {},
  },
  pageLifetimes: {
    show() {
      this.setData({
        mathJson: this.mathToStr(this.data.mathString)
      })

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    mathToStr(mathString) {
      console.log("Component math Loaded");
      var mHtml = katex.renderToString(mathString)
      var regPattern = /<span class="katex-mathml"><math>[\s\d\D]*<\/math><\/span>/;
      var betterMathHtml = mHtml.replace(regPattern, "")
      console.log(betterMathHtml)
      var mJson = html2json(mHtml);
      console.log(mJson);

      return mJson;
    }
  },
})
