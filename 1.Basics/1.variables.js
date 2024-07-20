const userId = 1112233;
let accountEmail = "unknown@gmail.com"
var accountPass = "11111"

//userId = 1233111 // TypeError: Assignment to constant variable.

accountEmail = "iknow@gmail.com"
accountPass = "233331"

console.log(userId)

console.table([userId,accountEmail,accountPass])