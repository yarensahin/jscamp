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



let sayi1=10
sayi1="Yaren"
let student={id:1, name:"Ahmet"}

function save(puan=10, ogrenci) {
    console.log(ogrenci.name+ ": "+ puan)
}
//save(student)
save(undefined,student)


let students=["meryem","seyma","erco"]
console.log(students)

let students2=[student,{id:2,name:"Halit"},"Ankara",{city:"İstanbul"},3]
console.log(students2)


let showProducts= function (id,...products) {
    console.log(id)
    console.log(products[0])
}
console.log(typeof showProducts)
showProducts(10,["Elma","Armut","Karpuz"])

let points=[1,45,8,95,25]
console.log(...points) 
console.log(Math.max(...points))
console.log(..."ABC",..."DEF","H","A")

let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryhigh,max]]=populations 

console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(max)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category={id:1, name1:"İçecek"}
let {id,name1}=category
console.log(id)
console.log(name1)