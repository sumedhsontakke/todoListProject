var text = "abcd";
var key = CryptoJS.enc.Base64.parse("#base64Key#");
var iv  = CryptoJS.enc.Base64.parse("#base64IV#");

//console.log("Initial String:: "+text);

var encrypted = CryptoJS.AES.encrypt(text, key, {iv: iv});
console.log("Encrypted String:: "+encrypted.toString());

var decrypted = CryptoJS.AES.decrypt(encrypted, key, {iv: iv});
console.log("Decrypted String:: "+decrypted.toString(CryptoJS.enc.Utf8));
temp = (decrypted.toString(CryptoJS.enc.Utf8));
console.log(temp);
setTimeout(function(){
document.getElementById("image").setAttribute( 'src', temp);	
},500)


