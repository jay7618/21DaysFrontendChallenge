let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let passf = document.getElementById("passf").value;
    Validation(fname,lname,number,email,pass,passf);
})

function Validation (fname,lname,number,email,pass,passf) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = emailRegex.test(email);

        const passRegex = /^.{8,16}$/
        let isPass = passRegex.test(pass)

    // console.log(fname,lname,number,email,pass,passf);
    
        if(fname.trim() == "") {
            // alert("First Name Is required !!!");
            Swal.fire({
                title: "First Name Is required !!!",
                icon: "error"
            });
            return;
        }

        if(lname.trim() == "") {
            // alert("Last Name Is required !!!");
            Swal.fire({
                title: "Last Name Is required !!!",
                icon: "error"
            });
            return;
        }

        if(!isValid) {
            // alert("Enter Valid Email...!!!");
            Swal.fire({
                title: "Enter Valid Email...!!!",
                icon: "error"
            });
            return;
        }

        if(number.length < 9 || number.length >  10) {
            // alert("Enter Valid Number...!!");
            Swal.fire({
                title: "Enter Valid Number...!!",
                icon: "error"
            });
            return;
        }

        if(!isPass) {
            if(pass.length <= 5) {
                Swal.fire({
                    title: "Enter Minimu 6 lenght of Password..!!",
                    icon: "error"
                });
                // alert("Enter Minimu 6 lenght of Password..!!")
                return;
            } else if (pass.length >= 17) {
                Swal.fire({
                    title: "Enter Maximum 16 lenght of Password..!!",
                    icon: "error"
                });
                    // alert("Enter Maximum 16 lenght of Password..!!")
                return;
            }
            // alert("Enter Minimu 6 lenght of Password..!!")
            // return;
            if(pass.trim() !== passf.trim()) {
                Swal.fire({
                    title: "Passwords do not match!",
                    icon: "error"
                });
                return;
            }
        }
        setLocalStorage(fname,lname,number,email,pass,passf);
        Swal.fire({
            title: "Registration successful!",
            icon: "success"
        });
        clearFileds();
}

function clearFileds (fname,lname,number,email,pass,passf) {
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("number").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pass").value = ""
    document.getElementById("passf").value = ""

}

function setLocalStorage (fname,lname,number,email,pass,passf) {

    let users = JSON.parse(localStorage.getItem("userCred")) || [];

    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        // alert("Email is already registered!");
        Swal.fire({
            title: "Email is already registered!",
            icon: "error"
        });
        return;
    }

    // let users = JSON.parse(localStorage.getItem("userCred")) || [];

    let newUser = {
        fname : fname,
        lname : lname,
        number : number,
        email : email,
        pass : pass
    }

    users.push(newUser);

    localStorage.setItem("userCred",JSON.stringify(users))
}

