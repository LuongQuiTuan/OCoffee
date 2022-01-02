function showReg() {
    var y = document.getElementById("regwrapper");
    var x = document.getElementsByClassName("regWindow")[0];
    if (y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "flex";
        y.style.display = "block";
    }
}

function showLog() {
    var y = document.getElementById("logwrapper");
    var x = document.getElementsByClassName("logWindow")[0];
    if (y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "flex";
        y.style.display = "block";
    }
}

function closeregForm() {
    document.getElementById("regwrapper").style.display = "none";
    document.getElementsByClassName("regWindow")[0].style.display = "none";
}

function closelogForm() {
    document.getElementById("logwrapper").style.display = "none";
    document.getElementsByClassName("logWindow")[0].style.display = "none";
}

function checkForm() {
    var a, b, c;
    a = document.getElementById("hoten").value;
    b = document.getElementById("txtpassword").value;
    c = document.getElementById("txtpasswordcheck").value;
    d = document.getElementById("txtusername").value;
    e = document.getElementById("sodienthoai").value;
    g = document.getElementById("diachi").value;



    if (a == "") {
        document.getElementById("checkhoten").innerHTML = " -Họ và tên rỗng";
        document.getElementById("hoten").focus();
        //document.getElementById("hoten").select();

        return false;
    } else {
        document.getElementById("checkhoten").innerHTML = "";
    }

    if (d == "") {
        document.getElementById("checkuser").innerHTML = " -Tên đăng nhập rỗng";
        document.getElementById("txtusername").focus();
        return false;
    } else {
        document.getElementById("checkuser").innerHTML = "";
    }
    if (g == "") {
        document.getElementById("checkdiachi").innerHTML = " -Địa chỉ đang rỗng";
        document.getElementById("diachi").focus();
        return false;
    } else {
        document.getElementById("checkdiachi").innerHTML = "";
    }
    if (b == "") {
        document.getElementById("checkpass").innerHTML = " -Mật khẩu rỗng";
        document.getElementById("txtpassword").focus();
        return false;
    }
    if (document.getElementById("txtpassword").value.length < 8) {
        document.getElementById("checkpass").innerHTML = " Mật khẩu phải lớn hơn 8 ký tự";
        return false;
    } else {
        document.getElementById("checkpass").innerHTML = "";
    }

    if (e == "") {
        document.getElementById("checksdt").innerHTML = " -Số điện thoại đang rỗng";
        document.getElementById("sodienthoai").focus();
        return false;
    }
    if (document.getElementById("sodienthoai").value.length < 10) {
        document.getElementById("checksdt").innerHTML = " -Số điện thoại phải có 10 số";
        return false;
    } else {
        document.getElementById("checksdt").innerHTML = "";
    }



    if (b != c) {
        document.getElementById("checkconfirm").innerHTML = " -Mật khẩu không khớp";
        document.getElementById("txtpasswordcheck").focus();
        return false;
    } else {
        document.getElementById("checkconfirm").innerHTML = "";
    }
    return true;
}