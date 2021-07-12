function IdCheck() {
  if (name.value === "") {
    errorName.style.display = "block";
  } else {
    errorName.style.display = "none";
  }
}
function PassCheck() {
  if (sifre.value === "") {
    errorPassword.style.display = "block";
  } else if (sifre.value.length > 7) {
    errorPassword.style.display = "none";
  } else {
    errorPassword.style.display = "block";
    alert("Şifreniz en az 8 karakter olmalıdır!");
  }
}

function mailCheck() {
  if (mail.value === "") {
    errorMail.style.display = "block";
  } else {
    errorMail.style.display = "none";
  }
}

function CheckBox() {
  if (checkBox.checked) {
    errorBox.style.display = "none";
  } else {
    errorBox.style.display = "block";
  }
}

function ButtonCheck() {
  if (sifre.value === "" || mail.value === "" || name.value === "") {
    alert("Lütfen zorunlu alanları doldurunuz!");
  } else {
    return;
  }
}
