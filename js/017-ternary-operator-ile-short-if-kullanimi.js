// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz


let userName = prompt("Kullanıcı bilginizi yaziniz")

let info = document.querySelector("#info")

info.innerHTML =` ${    userName ? userName :"Kullanici  Bilginiz bulunamadı:("}`









/*
let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("

info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`*/