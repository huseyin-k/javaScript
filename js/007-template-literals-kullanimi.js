// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "Hüseyin"

const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log(email)

let info = `Merhaba ${username} sitemize hoşgeldin...
mail adresin: ${email} 

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2+3)*10}
gunun saat bilgisi: ${new Date().getHours()}

kısa isminiz: ${username[0]}.`

console.log(info)





/*
let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)*/