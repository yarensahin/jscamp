console.log("Merhaba Kodlama.io")

let dolarDun=9.20
let dolarBugun=9.30

dolarDun="9.20"

{
    let dolarDun=9.10
}

const euroDun= 11.2
//euroDun=11 -> const olduğu için yapılmaz.

console.log(dolarDun)
console.log(euroDun)

let konutKredileri= ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log("<ul>")
for (let i=0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")