let login = document.getElementById("login");
login.addEventListener("click",(e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    console.log("hiiiii");
    getLocalStorage(email,password);
})

function getLocalStorage (email,password) {

    let users = JSON.parse(localStorage.getItem("userCred")) || [];

    let user = users.find(user => user.email === email && user.pass === password);

    if (user) {
        // alert(`Welcome back, ${user.fname}!`);
        Swal.fire({
            title: "Login Success!",
            text: `Welcome back, ${user.fname}!`,
            imageUrl: "https://img.freepik.com/premium-vector/vector-illustration-about-concept-mobile-app-account-successfully-registered-successful-login_675567-6141.jpg",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "Custom image"
        });
    } else {
        // alert("Invalid email or password!");
        Swal.fire({
            title: "Invalid email or password!",
            icon: "error"
        });
    }
}