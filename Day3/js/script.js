function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Tolong Masukkan Nama Kamu");
  } else if (email == "") {
    return alert("Tolong Masukkan Email Kamu");
  } else if (phone == "") {
    return alert("Tolong Masukkan Phone Kamu");
  } else if (subject == "") {
    return alert("Tolong Masukkan Pilihan Kamu");
  } else if (message == "") {
    return alert("Tolong Masukkan Pesan Kamu");
  }

  const emailDestination = "hi.dafa.060700@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailDestination}?subject=${subject}&body= Halo Nama Saya ${name}, saya ingin ${message}, bisakah kamu hubungi saya, ${phone}, `
  a.click()
  
  const data = {
    name,
    email,
    phone,
    subject,
    message
  }
  console.log(data)
}
