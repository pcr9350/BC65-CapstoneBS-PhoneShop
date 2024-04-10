// Kiểm tra rỗng
function kiemTraRong(value, idErr, message) {
    if (value === "") {
        getEle(idErr).innerHTML = message;
        return false;
    } else {
        getEle(idErr).innerHTML = "";
        return true;
    }
};

//kiểm tra số
function kiemTraSo(value, idErr, message) {
    const re = /^[0-9]+$/;
    var isNumber = re.test(value);

    if (isNumber) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    }
};

//kiểm tra trùng
function kiemTraTrung(id, arr, idErr, message) {
    var viTri = arr.findIndex(function(nv) {
        return nv.idNV === id;
    });

    if (viTri != -1) {
        // tìm thấy => bị trùng 
        getEle(idErr).innerHTML = message;
        return false;
    } else {
        // không tìm thấy 
        getEle(idErr).innerHTML = "";
        return true;
    }
};

// kiểm tra độ dài chuỗi 
function kiemTraDoDai(value, idErr, min, max, message) {
    var length = value.length;
    if (length >= min && length <= max) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    };
};

//kiểm tra chữ
function kiemTraChuoi(value, idErr, message) {
    const re = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
    var isString = re.test(value);

    if (isString) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    }
};

//kiểm tra email
function kiemTraEmail(value, idErr, message) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isString = re.test(value);

    if (isString) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    }
};

//kiểm tra mật khẩu
function kiemTraMatKhau(value, idErr, message) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var isString = re.test(value);

    if (isString) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    };
};

//kiểm tra ngày làm
function kiemTraNgayLam(value, idErr, message) {
    const re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var isString = re.test(value);

    if (isString) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    };
};

//kiểm tra trong khoảng (dành cho lương cơ bản hoặc giờ làm)
function kiemTraTrongKhoang(value, idErr, min, max, message) {
    if (value >= min && value <= max) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    };
};

//kiểm tra URL image
function kiemTraURLImage(value, idErr, message) {
    const re = /^(?:(?<scheme>[^:\/?#]+):)?(?:\/\/(?<authority>[^\/?#]*))?(?<path>[^?#]*\/)?(?<file>[^?#]*\.(?<extension>[Jj][Pp][Ee]?[Gg]|[Pp][Nn][Gg]|[Gg][Ii][Ff]))(?:\?(?<query>[^#]*))?(?:#(?<fragment>.*))?$/gm;
    var isString = re.test(value);

    if (isString) {
        getEle(idErr).innerHTML = "";
        return true;
    } else {
        getEle(idErr).innerHTML = message;
        return false;
    };
}