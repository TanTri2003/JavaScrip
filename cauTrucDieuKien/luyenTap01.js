function bai1() {
    let a = +document.getElementById("numbera").value;
    let b = +document.getElementById("numberb").value;
    if (a % b == 0) {
        document.getElementById('ketQua1').innerHTML = "a chia hết cho b";
    } else document.getElementById('ketQua1').innerHTML = "a không chia hết cho b";
}
function bai2() {
    let tuoi = +document.getElementById("tuoi").value;
    if (tuoi == 15) {
        document.getElementById('ketQua2').innerHTML = "học sinh đủ điều kiện vào học lớp 10";
    } else document.getElementById('ketQua2').innerHTML = "học sinh không đủ điều kiện vào học lớp 10";
}
function bai3() {
    let a = +document.getElementById("soA").value;
    if (a > 0) {
        document.getElementById('ketQua3').innerHTML = `${a} lớn hơn 0`;
    } else document.getElementById('ketQua3').innerHTML = `${a} nhỏ hơn 0`;
}
function bai4() {
    let a = +document.getElementById("number_a").value;
    let b = +document.getElementById("number_b").value;
    let c = +document.getElementById("number_c").value;
    let max = a;
    let number = 'a';
    if (max < b) {
        max = b;
        number = 'b';
    }
    if (max < c) {
        max = c;
        number = 'c';
    }
    document.getElementById('ketQua4').innerHTML = `so lon nhat la: ${number} = ${max}`;
}
function bai5() {
    let kiemTra = +document.getElementById("diemA").value;
    let giưaKy = +document.getElementById("diemB").value;
    let cuoiKy = +document.getElementById("diemC").value;
    let diem = (kiemTra+giưaKy+cuoiKy)/3;
        if (diem >= 8) {
            document.getElementById('ketQua5').innerHTML = `${diem}.đ loại giỏi`;
        }else if(diem >= 6.5){
            document.getElementById('ketQua5').innerHTML = `${diem}.đ loại khá`;
        }else if(diem >= 5){
            document.getElementById('ketQua5').innerHTML = `${diem}.đ loại trung bình`;
        }else if(diem >= 3.5){
            document.getElementById('ketQua5').innerHTML = `${diem}.đ loại yếu`;
        }else document.getElementById('ketQua5').innerHTML = `${diem}.đ loại kém`;
}
function bai6() {
    let doanhThu = +document.getElementById("doanhThu").value;
    if (doanhThu > 5000000) {
        document.getElementById('ketQua6').innerHTML = `Hoa hồng được nhận là ${(10/100)*doanhThu}`;
    }else if (doanhThu > 2000000) {
        document.getElementById('ketQua6').innerHTML = `Hoa hồng được nhận là ${(6/100)*doanhThu}`;
    }else (doanhThu > 0) 
    document.getElementById('ketQua6').innerHTML = `Hoa hồng được nhận là ${(3/100)*doanhThu}`;
}
function bai7() {
    let phiThueBao = +document.getElementById("number1").value;
    let soPhut = +document.getElementById("number2").value;
    if (soPhut >= 1) {
        document.getElementById('ketQua7').innerHTML = `Cước phí điện thoại:  ${phiThueBao + 1000} VNĐ`  ;
    } else if (soPhut > 50) {
        document.getElementById('ketQua7').innerHTML = `Cước phí điện thoại:  ${phiThueBao + 600} VNĐ`  ;
    } else if (soPhut > 150) {
        document.getElementById('ketQua7').innerHTML = `Cước phí điện thoại:  ${phiThueBao + 400} VNĐ`  ;
    } else {
        document.getElementById('ketQua7').innerHTML = `Cước phí điện thoại:  ${phiThueBao + 200} VNĐ`  ;
    }
}