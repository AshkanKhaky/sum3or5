function sum3or5(number) {
    return number % 3 ==0 || number % 5 ==0;
}


let sum = 0

 for (let i = 1; i <= 10; i++) {
     if (sum3or5(i)){
        sum += i
     }
 }

 console.log(sum)
 