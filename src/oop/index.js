class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}


let customer= new Customer(1,"123456");
customer.name="Murat"
console.log(customer.name)

Customer.bisey="bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}


let products=[
    {id:1, name:"Acer Laptop", unitPrice:10000},
    {id:1, name:"Asus Laptop", unitPrice:15000},
    {id:1, name:"HP Laptop", unitPrice:10000},
    {id:1, name:"Dell Laptop", unitPrice:10000},
    {id:1, name:"Casper Laptop", unitPrice:10000},
]
console.log("<ul>")
products.map(product=>console.log("<li>"+product.name+"</li>"))
console.log("</ul>")


products.map(product=>{
    console.log(product)
    console.log("<li>"+product.name+"</li>")
})

let filteredProducts=products.filter(product=>product.unitPrice>=15000)
console.log(filteredProducts)


let carTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(carTotal)

let carTotal2=products
            .filter(p=>p.unitPrice>=13000)
            .map(p=>{
                p.unitPrice=p.unitPrice*1.18
                return p
            })
            .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(carTotal2)