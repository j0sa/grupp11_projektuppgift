/* function CustomValidation() {
    this.invalidities = [];
    this.validityChecks = [];
}

CustomValidation.prototype = {
    addInvalidity: function (message) {
        this.invalidities.push(message);
    },
    getInvalidities: function () {
        return this.invalidities.join('. \n');
    },
    checkValidity: function (input) {
        for (var i = 0; i < this.validityChecks.length; i++) {

            var isInvalid = this.validityChecks[i].isInvalid(input);
            if (isInvalid) {
                this.addInvalidity(this.validityChecks[i].invalidityMessage);
            }

            var requirementElement = this.validityChecks[i].element;
            if (requirementElement) {
                if (isInvalid) {
                    requirementElement.classList.add('invalid');
                    requirementElement.classList.remove('valid');
                } else {
                    requirementElement.classList.remove('invalid');
                    requirementElement.classList.add('valid');
                }

            } // end if requirementElement
        } // end for
    }
};

var usernameValidityChecks = [
    {
        isInvalid: function (input) {
            return input.value.length < 3;
        },
        invalidityMessage: 'This input needs to be at least 3 characters',
        element: document.querySelector('label[for="name"] .input-requirements li:nth-child(1)')
    },
    {
        isInvalid: function (input) {
            var illegalCharacters = input.value.match(/[^a-zA-Z0-9]/g);
            return illegalCharacters ? true : false;
        },
        invalidityMessage: 'Only letters and numbers are allowed',
        element: document.querySelector('label[for="name"] .input-requirements li:nth-child(2)')
    }
];

var passwordValidityChecks = [
    {
        isInvalid: function (input) {
            return input.value.length < 8 | input.value.length > 100;
        },
        invalidityMessage: 'This input needs to be between 8 and 100 characters',
        element: document.querySelector('label[for="password"] .input-requirements li:nth-child(1)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[0-9]/g);
        },
        invalidityMessage: 'At least 1 number is required',
        element: document.querySelector('label[for="password"] .input-requirements li:nth-child(2)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[a-z]/g);
        },
        invalidityMessage: 'At least 1 lowercase letter is required',
        element: document.querySelector('label[for="password"] .input-requirements li:nth-child(3)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[A-Z]/g);
        },
        invalidityMessage: 'At least 1 uppercase letter is required',
        element: document.querySelector('label[for="password"] .input-requirements li:nth-child(4)')
    },
    {
        isInvalid: function (input) {
            return !input.value.match(/[\!\@\#\$\%\^\&\*]/g);
        },
        invalidityMessage: 'You need one of the required special characters',
        element: document.querySelector('label[for="password"] .input-requirements li:nth-child(5)')
    }
];

var passwordRepeatValidityChecks = [
    {
        isInvalid: function () {
            return passwordRepeatInput.value != passwordInput.value;
        },
        invalidityMessage: 'This password needs to match the first one'
    }
];

function checkInput(input) {

    input.CustomValidation.invalidities = [];
    input.CustomValidation.checkValidity(input);

    if (input.CustomValidation.invalidities.length == 0 && input.value != '') {
        input.setCustomValidity('');
    } else {
        var message = input.CustomValidation.getInvalidities();
        input.setCustomValidity(message);
    }
}

var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var passwordRepeatInput = document.getElementById('password_repeat');

usernameInput.CustomValidation = new CustomValidation();
usernameInput.CustomValidation.validityChecks = usernameValidityChecks;

passwordInput.CustomValidation = new CustomValidation();
passwordInput.CustomValidation.validityChecks = passwordValidityChecks;

passwordRepeatInput.CustomValidation = new CustomValidation();
passwordRepeatInput.CustomValidation.validityChecks = passwordRepeatValidityChecks;

var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        checkInput(this);
    });
}

submit.addEventListener('click', function () {
    for (var i = 0; i < inputs.length; i++) {
        checkInput(inputs[i]);
    }
}); */

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

/* if (document.forms["contactform"].addEventListener) {
    document.forms["contactform"].addEventListener("submit", saveToLocalStorage, false);
} else if (document.forms["contactform"].attachEvent) {
    document.forms["contactform"].attachEvent('onsubmit', saveToLocalStorage);
} */

/* document.forms["contactform"].addEventListener("submit", function (e) {
    if (!isValid) {
        e.preventDefault();    //stop form from submitting
    }
}); */
