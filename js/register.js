document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value;
        const fullname = document.getElementById("fullname").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let lowerCaseLetter = /[a-z]/g;
        let upperCaseLetter = /[A-Z]/g;
        let number = /[0-9]/g;

        if (!username || !fullname || !phone || !email || !password) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const user = {
            username: username,
            fullname: fullname,
            phone: phone,
            email: email,
            password: password
        };

        if (password.length < 6) {
            alert("Mật khẩu phải lớn hơn 6 chữ số");
            return;
        }

        if (!password.match(upperCaseLetter)) {
            alert("Mật khẩu cần ít nhất một chữ cái in hoa!");
            return;
        }

        if (!password.match(lowerCaseLetter)) {
            alert("Mật khẩu cần ít nhất một chữ thường!");
            return;
        }
        // lưu vào localStorage
        localStorage.setItem("user", JSON.stringify(user));

        //Kiểm tra email đã được đăng ký chưa
        if (user[email]) {
            alert("Email này đã được dăng ký!");
            return;
        } else {
            user[email] = {
                email: email,
                password: password
            };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Đăng ký thành công!");
            window.location.href = "login.html";//Chuyển hướng đến trang đăng nhập
        }

    });

});