showMessage = (message, n) => {
    for (let i = 0; i < n; i++) {
        console.log(message)
    }
    return message
}
sum = (amount) => {
    let sum = 0;
    for (let index = 0; index <= amount; index++) {
        sum += index;
    }
    console.log(sum)
    return sum;
}
sumOdd = (from, to) => {
    let sum = 0;
    for (let from = 0; from <= to; from++) {
        if (from % 2 !== 0) {
            sum += from;
        }
    }
    console.log(sum)
    return sum
}
listOdds = (amount) => {
    let array = [];
    for (let index = 0; index <= amount; index++) {
        if (index % 2 != 0) {
            array.push(index);
        }
    }
    return array;
}
listOdd = (from, amount) => {
    let array = [];
    let dem = 1;
    for (from; dem <= amount; from++) {
        if (from % 2 !== 0) {
            array.push(from);
            dem++;
        }
    }
    return array
}

isPrime = (n) => {
    let count = 0 ;
    while(n > 2){
        for(let i = 2 ; i <= Math.sqrt(n) ; i++){
            if(n % i == 0){
                count ++ ;
            }
        }   
        if(count == 0){
            return true ;
        }else {
            return false ;
        }
    }

}
