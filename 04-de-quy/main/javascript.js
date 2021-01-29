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
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}
console.log(fibonacci(5))


let bai5 = (n) => {
  if(n == 0) {
      return console.log("Vui lòng kiểm tra số lớn hơn 1") ;
  }else{
      return 1/n
  }
}

console.log(bai5(0))

let bai6 = (n) => {
    if(n == 0) {
        return console.log("Vui lòng kiểm tra số lớn hơn 1") ;
    }else{
        return 1/2*n
    }
}
console.log(bai6(5))

let bai11 = (n) => {
    if(n == 1){
        return 1 
    }else if(n == 0){
        console.log("Số nhỏ hơn ko thì kiểm tra làm gì :)")
    }else{
        return n * bai11(n-1);
    }
}

console.log(bai11(5))