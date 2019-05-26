var User = require('User.js')
const app = getApp()
const userOpenId = app.globalData.user.openid
class File{
  
  constructor(){
    this._id = getRandom();
    this._name = "";
    this._size = 0;
    this._owner = undefined;
    this._createTime = (new Date()).toLocaleString()
    this._type = 'File'
  }

  set name(name) {
    this._name = name
  }
  get name() {
    return this._name
  }
  set size(size) {
    this._size = size
  }
  get size() {
    return this._size
  }
  set owner(owner) {
    this._owner = owner
  }
  get owner() {
    return this._owner
  }
  get createTime(){
    return this._createTime
  }
  get type() {
    return this._type
  }
}
var getRandom = function(){
  var str = Date.now().toString(36)
   while(str.length < 12){
     str += (Math.floor(Math.random() * 36)).toString(36)
   }
   return str;
}
module.exports = File