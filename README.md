# 闪辑  
## 介绍
闪辑(FlashEditor)是以微信小程序为开发平台，基于Latex格式的文本编辑器，内置公式编辑器，可快速便捷的创建、编辑、分享数学公式
## 基本功能
1. 富文本文件本地储存（已完成）
2. 富文本编辑工具（已完成）
3. 基于Latex的公式编辑器（未完成）
4. 富文本文件网络储存（计划中）
5. 文件、文本、公式分享（计划中）

## 使用方法
Clone或Download至本地后用微信小程序导入项目
## 文件目录描述
│  .gitignore  
│  app.js  
│  app.json  
│  app.wxss  
│  project.config.json  
│  readme.md  
│  sitemap.json  
├─assets				//资源文件夹  
│  ├─imgs				//图片资源  
│  └─svg				//svg矢量图  
│          icon.wxss	//图标矢量图  
│          sqrt.svg		//根号矢量图  
├─functions				//云函数  
│  └─getOpenid			//获取用户Openid  
│          index.js  
│          package.json  
├─models				//模型文件夹  
│      File.js			//文件类  
│      FormulaFile.js	//公式文件类  
│      LatexString.js	//Latex字符串类  
│      TextFile.js		//文本文件类  
│      User.js			//用户类  
├─pages					//页面  
│  ├─components			//组件  
│  │  └─math			//用于递归的自定义组件  
│  ├─editor				//富文本编辑器页面  
│  │  └─assets  
│  │          iconfont.wxss  //矢量图  
│  ├─formula			//公式编辑器页面  
│  ├─index				//主页  
│  └─logs				//日志页面  
├─utils					//插件
│  │  html2json.js  
│  │  htmlParse.js  
│  │  util.js  
│  ├─canvas-latex  
│  ├─html2json  
│  └─katex  
└─viewImage  			//成品预览图

##  更新记录
### 2019/6/4
整理文件与文档  
