// Ham de quy
pow = (n, x) => {
    if (x === 1) {
        return n;
    } else {
        return x * pow(n, x - 1);
    }
}
console.log(pow(2, 1));
// Tong 

sum = (n) => {
    if (n === 1) {
        return n;
    } else {
        return sum(n - 1) + n
    }
}

console.log(sum(5));

factorial = (n) => {
    if (n === 1) {
        return n;
    } else {
        return sum(n - 1) * n
    }
}
console.log(factorial(5))

fibonacci = (n) => {
    if(n <= 1){
        return 1 ;
    }else{
        return fibonacci(n-1) + fibonacci(n-2) ;
    }

}
console.log(fibonacci(5))