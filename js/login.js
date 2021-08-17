document.getElementById("login-sbmit").addEventListener("click", function () {
    // get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user pass
    const passwordField = document.getElementById("user-pass");
    const userPass = passwordField.value;
    // console.log(userPass);

    // check email and password
    if (userEmail == "mamun@gmail.com" && userPass == "mamun") {
        // console.log("valid");
        window.location.href = "bank.html";
    }
});
