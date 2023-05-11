console.log('Hello');

// Bài 1: Quản lý Sinh Viên
/* 
* Input: Điểm chuẩn của trường, Khu vực ưu tiên, Đối tượng ưu tiên, Điểm môn 1, Điểm môn 2, Điểm môn 3
* Progress: So sánh điểm của 1 trong 3 môn phải >= 5, sau đó, Tính điểm tổng của 3 môn + với điểm khu vực và đối tượng, so sánh tổng diểm > điểm chuẩn thì đậu, ngược lại là rớt
* Output: Kết quả đậu rớt và điểm tổng
*/

function diemTong(mon1, mon2, mon3, kV, dT) {
    var diemT = mon1 + mon2 + mon3 + kV + dT;
    return diemT;
}

function xetDiemChuan() {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var khuVuc = document.getElementById('khuVuc').value * 1;
    var doiTuong = document.getElementById('doiTuong').value * 1;

    var diemMon1 = document.getElementById('diemMon1').value * 1;
    var diemMon2 = document.getElementById('diemMon2').value * 1;
    var diemMon3 = document.getElementById('diemMon3').value * 1;
    var ketQua3Mon = 0;
    
    if (diemMon1 >= 5 && diemMon2 >= 5 && diemMon3 >= 5 && diemTong(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong) >= diemChuan) {
        ketQua3Mon = diemTong(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);
        document.querySelector('.bai1').innerHTML = "Bạn đã đậu. Tổng điểm: " + ketQua3Mon;
    } else if (diemMon1 >= 5 && diemMon2 >= 5 && diemMon3 >= 5 && diemTong(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong) < diemChuan) {
        ketQua3Mon = diemTong(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong);
        document.querySelector('.bai1').innerHTML = "Bạn đã rớt. Tổng điểm: " + ketQua3Mon;
    } else {
        document.querySelector('.bai1').innerHTML = "Bạn đã rớt vì Một trong 3 môn dưới 5";
    }
    
}

// Bài 2: Tính tiền điện

/* 
* Input: Họ tên và số Kw điện
* Progress: khai báo hằng số cho từng mức phí tiêu thụ điện, so sánh từng khoảng mức phí VD số kw <= 50 thì đóng mức phí 1
* Output: Xuất ra họ tên và số tiền điện
*/
const soKwDau = 500;
const soKwHai = 650;
const soKwBa = 850;
const soKwBon = 1100;
const soKwConLai = 1300;

function tinhTienDien() {
    var hoten = document.getElementById('ten').value;
    var soKw = document.getElementById('soKw').value * 1;

    var tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * soKwDau;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 50 * soKwDau + (soKw - 50)*soKwHai ;
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 50* (soKwDau + soKwHai) + (soKw - 100)*soKwBa;
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = 50* (soKwDau + soKwHai) + 100*soKwBa + (soKw - 200)*soKwBon;
    } else  if (soKw > 350) {
        tienDien = 50* (soKwDau + soKwHai) + 100*soKwBa + 150*soKwBon + (soKw - 350)*soKwConLai;
    }
    document.querySelector('.bai2').innerHTML = "Họ tên: " + hoten + "  ; Số tiền điện: " + tienDien.toLocaleString();
}


// Bài 3: Tính thuế thu nhập cá nhân

/* 
* Input: Nhập họ tên, tổng thu nhập trong năm, số người phụ thuộc
* Progress: tính mức thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người*1.6tr, so sánh các điều kiện đóng theo từng mức thuế và tính tiền thuế = mức thu nhập chịu thuế * số % theo từng mức đóng
* Output: Xuất ra họ tên và tiền thuế phải đóng
*/
function thuNhapChiuThue(thuNhap, soNguoi) {
    var thuNhapChiuTax = thuNhap - 4e+6 - (soNguoi * 1.6e+6);
    return thuNhapChiuTax;
}

function tinhTienThue() {
    var tenNguoi = document.getElementById('tenNguoi').value;
    var tongThuNhap = document.getElementById('tongThuNhap').value * 1;
    var soNguoiPT = document.getElementById('soNguoiPT').value *1;

    var thuNhapTax = thuNhapChiuThue(tongThuNhap, soNguoiPT);
    var tienThue = 0;
    if (thuNhapTax <= 0) {
        alert('Số tiền ko hợp lệ');
    } else if (thuNhapTax <= 60e+6) {
        tienThue = thuNhapTax * 0.05;
    } else if (thuNhapTax > 60e+6 && thuNhapTax <= 120e+6) {
        tienThue = 60e+6 * 0.05 + (thuNhapTax - 60e+6) * 0.1;
    } else if (thuNhapTax > 120e+6 && thuNhapTax <= 210e+6) {
        tienThue = 60e+6 * 0.15 + (thuNhapTax - 120e+6) * 0.15;
    } else if (thuNhapTax > 210e+6 && thuNhapTax <= 384e+6) {
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + (thuNhapTax - 210e+6) * 0.2;
    } else if (thuNhapTax > 384e+6 && thuNhapTax <= 624e+6) {
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapTax - 384e+6)*0.25;
    } else if (thuNhapTax > 624e+6 && thuNhapTax <= 960e+6) {
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapTax - 624e+6)*0.3;
    } else if (thuNhapTax > 960e+6) {
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapTax - 960e+6)*0.35;
    }
    document.querySelector('.bai3').innerHTML = "Họ tên: " + tenNguoi + "  ; Số tiền thuế: " + tienThue.toLocaleString() + " VNĐ";
}

// Bài 4: Tính tiền cáp

/* 
* Input: Chọn loại khách hàng, nhập mã KH, nhập số kênh cao cấp và nhập số kết nối(nếu có)
* Progress: Dùng Onchage để phân loại khách hàng, nếu khách hàng là nhà dân thì tiền cáp = 4.5 + 20.5 + 7.5 * số kênh cao cấp, nếu khách hàng là doanh nghiệp và <= 10 tổng số kênh kết nối thì tiền cáp = 15 + 75 + 50 * số kênh cao cấp; > 10 thì tiền cáp = 15 + 75 + (tổng số kênh kết nối - 10) * 5 + 50 * số kênh cao cấp
* Output: Xuất ra mã khách hàng và tiền cáp
*/
function chonLoaiKH() {
    var loaiKH = document.getElementById('loaiKH').value * 1;
    if (loaiKH == 2) {
        document.getElementById('soKN').disabled = false;
    } else {
        document.getElementById('soKN').disabled = true;
        // soKN = true;
    }
}

function tinhTienCap() {
    var maKH = document.getElementById('maKH').value;
    var soKenhCC = document.getElementById('soKenhCC').value * 1;
    var soKN = document.getElementById('soKN').value*1;
    var loaiKH1 = document.getElementById('loaiKH').value * 1;

    var tienCap = 0;

    if (loaiKH1 != 2) {
        tienCap = 4.5 + 20.5 + 7.5*soKenhCC;
    } else if (soKN < 1) {
        alert("Số kết nối không đúng");
    } else if (loaiKH1 == 2 && soKN <= 10) {
        tienCap = 15 + 75 + 50*soKenhCC;
    } else if (loaiKH1 == 2 && soKN > 10) {
        tienCap = 15 + 75 + (soKN - 10)*5 + 50*soKenhCC;
    } 
    document.querySelector('.bai4').innerHTML = "Mã KH là: " + maKH + "; Tiền cáp là: " + " $" + tienCap;

}
