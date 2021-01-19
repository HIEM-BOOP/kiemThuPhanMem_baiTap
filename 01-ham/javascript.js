/* 1 */
showLog = (message) => {
    console.log(message);
}
/* 2 */
/* Viết hàm Tính tổng; hiệu 2 số  và trả ra kết quả */

tong = (a, b) => {
    let sum = a + b;
    return sum;
}

// 2 
let hieu = (a, b) => {
    let brand = a - b;

    return brand;
}
// 3

let tich = (a, b) => {
    let area = a * b;
    return area;
}

let chia = (a, b) => {
    let divide = a / b;

    b === 0 ? divide = a : divide

    return divide;
}

let binhPhuong = (a) => {
    square = a * a
    return square;
}

let max = (a, b) => {
    let max = a;
    if (a < b) {
        max = b;
    }

    return max;
}


let min = (a, b) => {
    let min = a;
    if (a > b) {
        min = b;
    }
    return min;
}



let trungBinh = (a, b) => {
    let medium = (a + b) / 2

    return medium;
}

let chialaydu = (a, b) => {
    let surplus = a % b;

    return surplus;
}


let coChiaHet = (a, b) => {
    if (a % b === 0) {
        var co = "Dạ,có chia hết"
        return co
    } else if(b % a === 0){
        let ko = "Dạ,không chia hết"
        return ko
    }
}

let chuViChuNhat = (a, b) => {
    let P = 2 * (a + b)
    return P;
}

let dienTichChuNhat = (a, b) => {
    let S = a * b

    parseInt(S)
    return S
}

showLog(dienTichChuNhat(1.5, 2.3));

let chuViHinhTron = (r) => {
    let pi = 3.14;
    let c = r * 2 * pi;
    return c;
}

let dienTichHinhTron = (r) => {
    let pi = 3.14;
    let s = pi * (r * r)

    return s;
}

// Chuỗi 

let noiChuoi = (s1, s2) => {
    let s = s1 + " " + s2;

    return s;
}
showLog(noiChuoi("Hiêm", "Đẹp zai"))

let inHoa = (s1) => {
    let chuyenInHoa = s1.toUpperCase();

    return chuyenInHoa;
}


let coTonTai = (s1, s2) => {

    let ketQua = s1.includes(s2);

    // return ketQua ;   

    return !ketQua ? "Không tồn tại" : "Có tồn tại";
}

showLog(coTonTai("Hiêm", "kiều"))


let doDaiChuoi = (M) => {

    var dodai = M.length;  

    return dodai;
  }

let catChuoi = (M) => {
    var cat = M.substring(1, 3);
  
  
    return cat;
  }

  let kiemTra = (n1,n2) =>{
    var kiem = n1.includes(n2);
  
    return kiem;
  
  
  }  