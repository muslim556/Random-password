const password = document.getElementById("password");
const alert = document.querySelector("#alert");
const error_alert = document.querySelector("#error_alert");

function genPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 10;
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  if (password.value === "") {
    error_alert.classList.add("show_error_alert");
    setTimeout(() => {
      error_alert.classList.remove("show_error_alert");
    }, 1000);
  } else {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
    alert.classList.add("show_alert");
    password.value = "";
    setTimeout(() => {
      alert.classList.remove("show_alert");
    }, 2000);
  }
}
