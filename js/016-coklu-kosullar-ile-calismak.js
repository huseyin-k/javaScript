// ********** Coklu Kosullarla Calismak **********





let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasini:")

if(userName && age >= 18){
    console.log("Ehliyet ALabilirsiniz")
}
else if(!userName){
    console.log("Kullanici Adiniz yok.")
}
else if(!(age >= 18)){
    console.log("Yaş bilginiZ yok veya 18 yaşından küçüksünüz.")
}
/*
let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanici Adiniz Yok"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
}*/