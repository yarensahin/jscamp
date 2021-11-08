//sayıların asallığını kontrol eden fonksiyon
function findPrime(... numbers) {
    if(numbers[i]<=1 ||numbers[i]==0 || numbers[i]==1){
        console.log(numbers[i]+ " is not a prime number")    
    }
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 2; j < numbers[i]; j) {
            if(numbers[i]%j==0){
                console.log(numbers[i]+ " is not a prime number")
                break
            }
        }
        console.log(numbers[i]+ " is a prime number")
    }
    
}
findPrime(6,2,1,7)

//arkadaş sayılar
function friendNumbers(number1,number2) {
    total1=0
    total2=0
    for (let i = 0; i <number1; i++) {
        if(number1%i==0){
            total1+=i
        }
    }
    for (let j = 0; j < number2; j++) {
        if(number2%j==0){
            total2+=j
        }
    }
    if(total1==number2 && total2==number1){
        console.log("Friend Numbers")
    }
}
//1000 e kadar olan mükemmel sayılar
function perfectNumber() {
    let x=0
    for (let number=1 ; number < 1000; number++) {
        for (let i = 1; i < number; i++) {
            if(number%i==0){
                x+=i
            }      
        }
    }
    if(x==number){
        console.log(number+ " is a perfect number")
    }
}
perfectNumber()

//1 den 1000 e kadar asal sayılar
function isPrime() {
    for (let i = 1; i< 1000; i++) {
        if (i==1){
            continue
        }
        for (let j = 2; j< i; j++) {
            if(i%j==0){
                continue
            }
        }   
        console.log(i)   
    }
}