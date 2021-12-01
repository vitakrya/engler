const fs = require('fs');
let QuickEncrypt = require('quick-encrypt')

// console.log(keys.public) // Public Key that has been generated.

// console.log(keys.private) // Private Key that has been generated.
let publicKey = `-----BEGIN RSA PUBLIC KEY-----
-----END RSA PUBLIC KEY-----`

const content = fs.readFileSync(".env", "utf-8")
console.log(content)
let encryptedText = QuickEncrypt.encrypt(content, publicKey)

fs.writeFileSync(".envencr", encryptedText)
