function addToCart(productName="Elma",quantity) {
    console.log("Sepete eklendi: "+ productName+ " adet: "+ quantity)
}
//addToCart()
addToCart("Armut",10)
addToCart(10) 


let sayHello = () =>{
    console.log("Hello world!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World2")
}
sayHello2();

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

function addToCart3(product) {
    console.log("Ürün: "+ product.productName)
    console.log("Adet: "+ product.quantity)
    console.log("Fiyat: "+ product.unitPrice)
}

let product1={productName:"Elma",unitPrice:10,quantity:5}
addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName) 


function addToCart4(x) {
    console.log(products)
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { 
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(bisey)
    console.log(total)
}

add(20,30,40)

let numbers=[30,10,500,600,120]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]= [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu)
console.log(marmara)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

//let {productName,unitPrice,quantity}={productName:"Elma", unitPrice:10,quantity:5}
//console.log(productName)

let newProductName,newPrice,newQuantity
({productName:newProductName, unitPrice:newPrice,quantity:newQuantity}
    ={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newPrice)
console.log(newQuantity)