document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value;
        const fullname = document.getElementById("fullname").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

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

        // lưu vào localStorage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Đăng ký thành công!");

        // chuyển sang trang login
        window.location.href = "login.html";

    });

});