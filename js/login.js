document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector('input[type="password"]').value;

        // lấy dữ liệu user đã lưu
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Chưa có tài khoản! Hãy đăng ký.");
            return;
        }

        if (username === user.username && password === user.password) {
            alert("Đăng nhập thành công!");

            // chuyển trang
            window.location.href = "index.html";
        } else {
            alert("Sai username hoặc mật khẩu!");
        }

    });

});