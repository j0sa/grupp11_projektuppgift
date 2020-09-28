window.onload = function () {
    let submit = document.getElementById("submit");
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    function validateName(name) {
        const reg = /^([a-z0-9]*[a-zA-Z\u0080-\uFFFF]){3}[a-z0-9]*$/i;

        if (reg.test(String(name.value).toLowerCase())) {
            console.log(name.id + " is valid");
            name.style.outline = "3px solid green";
        } else {
            console.log(name.id + " is not valid");
            name.style.outline = "3px solid red";
        }
    }

    function validateEmail(email) {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (reg.test(String(email.value).toLocaleLowerCase())) {
            console.log(email.id + " is valid");
            email.style.outline = "3px solid green";
        } else {
            console.log(email.id + " is not valid");
            email.style.outline = "3px solid red";
        }
    }

    function validateTel(tel) {
        const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        if (reg.test(String(tel))) {
            console.log(tel.id + " is valid");
            tel.style.outline = "3px solid green";
        } else {
            console.log(tel.id + " is not valid");
            tel.style.outline = "3px solid red";
        }
    }

    function validateMessage(message) {
        if (message.value != "") {
            console.log(message.id + " is valid");
            message.style.outline = "3px solid green";
        } else {
            console.log(message.id + " is not valid");
            message.style.outline = "3px solid red";
        }
    }

    fname.oninput = function () {
        console.log(this.value);
        validateName(fname);
    }
    lname.oninput = function () {
        console.log(this.value);
        validateName(lname);
    }
    tel.oninput = function () {
        console.log(this.value);
        validateTel(tel);
    }
    email.oninput = function () {
        console.log(this.value);
        validateEmail(email);
    }
    message.oninput = function () {
        console.log(this.value);
        validateMessage(message);
    }

    submit.onclick = function () {
        let contactInformation = {
            fname: fname.value,
            lname: lname.value,
            tel: tel.value,
            email: email.value
        };

        localStorage.setItem("contactinformation", JSON.stringify(contactInformation));
    }

    if (localStorage.getItem("contactinformation")) {
        let contactInformationString = localStorage.getItem("contactinformation");
        let contactInformation = JSON.parse(contactInformationString);

        console.log(contactInformation);

        fname.value = contactInformation.fname;
        lname.value = contactInformation.lname;
        tel.value = contactInformation.tel;
        email.value = contactInformation.email;
    }
};
