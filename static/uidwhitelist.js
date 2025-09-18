
async function server_login() {
    const uid = document.getElementById("playerUid").value;
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const res = await fetch(`/login?user=${user}&password=${pass}`);
    const text = await res.text();
    window.alert(text);


  if (text == "Login Success") {
    const response_uid_register = await fetch(`/whitelist?uid=${uid}&username=${user}&password=${pass}`);
    if (response_uid_register.status == "200") {
        console.log("UID is now whitelisted")
    }
  }
}


// disable form submit !
var form_ = document.getElementById("form1");
form_.addEventListener("submit", (e) => {
    e.preventDefault();
})


