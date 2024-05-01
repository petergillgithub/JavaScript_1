const accountID = 122234
let accountEmail = "petergillhmg@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountID = 2 // imutable or not editable 


accountEmail = "hc@google.com"
accountPassword =  "0000000"
accountCity = "Amritsar"

console.log(accountID);

/*
Please Do not use Var , Because of issue in block scope and functional scope

*/

console.table([accountID,accountEmail,accountPassword,accountCity])