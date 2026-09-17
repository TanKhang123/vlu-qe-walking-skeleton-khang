function login(user, pass) {
  return user === "admin" && pass === "123";
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = login;
}

if (typeof document !== "undefined") {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      message.textContent = login(user, pass)
        ? "Đăng nhập thành công!"
        : "Sai tài khoản hoặc mật khẩu!";
    });
  }
}
