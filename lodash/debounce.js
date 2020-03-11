// install lodash - > npm i lodash 
// document lodash https://www.npmjs.com/package/lodash
const _ = require('lodash');

function validateEmail() {
    var nameInput = emailInput.value;
    if(nameInput.length < 5)   {
        alert('require name > 5 charat')
    }
    
}

var emailInput = document.getElementById("inputName");
// emailInput.addEventListener("keyup", _.debounce(validateEmail, 500));
$(emailInput).on('keyup', _.debounce(function (e) {
    switch (e.keyCode) {
      case 13:
            validateEmail()
    }
  }, 500));