var File = require('File.js')
class TextFile extends File{
  constructor(){
    super()
    this._content = ""
    this._type = "TextFile"
  }
  set content(content){
    this._content = content
  }
  get content(){
    return this._content
  }
}

module.exports = TextFile