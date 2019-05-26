var User = reuqire('User.js')

var user = new User();
user.openid = "123";
user.nickName = "456";
console.log(user.openid);
console.log(user.nickName);