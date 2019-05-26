class User{
  constructor(){
    this._openid = undefined
    this._nickName = undefined
  }

  set openid(openid){
    this._openid = openid
  }
  get openid(){
    return this._openid
  }

  set nickName(nickName){
    this._nickName = nickName
  }
  get nickName(){
    return this._nickName
  }
}

module.exports = User;