// ********** Number Veri Turu ile Calismak ********** 
// number veri turu tanimlamak:



let price = 100
let tax = 0.18

let pricetax = price * tax 
let total = price + pricetax
console.log(
    "fiyat",price,
    "KDV oranı", tax,
    "KDV turarı",pricetax, 
    "fiyat", total)

let stringNumber = "11"
console.log(stringNumber)

let newNumber = Number(stringNumber)
console.log(newNumber)

console.log("Number içine bilgi gönderildi",Number("111"))

let counter = 320

counter = counter +1
counter+=1
counter++;
console.log(counter)

counter --;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2
console.log(counter)

console.log(2+3*10)
console.log((2+3)*10)
console.log(3%2)

console.log(2**9) //ÜS ALMA BÖYLE YAPILIR

console.log("Aşağı yuvarlama",Math.floor(1.3342))

console.log("Yukarı yuvarlama",Math.ceil(1.556))

console.log("yakına yurarlama: ",Math.round(1.534))
console.log("Yakına yuvarlama: ",Math.round(1.234))


function getArea(length, width) {
    var area= length*width; // Write your code here
    
    return area;
}


var dortgen = getArea(3,4.5);
console.log("dilkdortgen alanı",dortgen);

function getPerimeter(length, width) {
    let perimeter= 2*(length+width);
    // Write your code here
    
    return perimeter;
}

let alan = getPerimeter(3,4.5);
console.log("Alan",alan);
/*
let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gonderildi:", Number("111"))

// arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 // uzun yontem
counter += 1;
counter ++;
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

// islem onceligi:
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1
console.log( 2 + 3 * 10) // 50 ???????????
console.log( (2 + 3) * 10) // 50 ???????????

// mod(kalan) alma %:
// sayi tek mi cift mi ???
console.log( 17 % 2) // 0 ise cift, 1 ise tek

// 8 urun alan koliye tum urunler sigiyor mu ?
console.log("Koli Kalan Urun Ornegi: ", 18 % 8)

// us alma **:
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

// asagi yuvarlama islemi -> Math.floor:
console.log("Asagi Yuvarlama:", Math.floor(1.9) )  // -> 1

// yukari yuvarlama islemi -> Math.ceil :
console.log("Yukari Yuvarlama:", Math.ceil(1.9) ) // -> 2

// yakina yuvarlama islemi -> Math.round :
console.log("Yakina Yuvarlama: ", Math.round(1.5) ) // 1.4 ->1, 1.5 ->*/