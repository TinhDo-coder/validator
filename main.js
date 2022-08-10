function Validator(options) {
    //hàm thực hiện validator của form
    function Validate(inputElement, rule) {
        var errorElenment = inputElement.parentElement.querySelector(options.errorFormMessage);
        var errorMessage = rule.check(inputElement.value);
        if (errorMessage) {
            errorElenment.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElenment.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    //lấy element của form cần validator
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.value);

            if (inputElement) {
                //Xử lý khi người dùng blur khỏi input
                inputElement.onblur = function () {
                    Validate(inputElement, rule);
                }
                //xử lý khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElenment = inputElement.parentElement.querySelector(options.errorFormMessage);
                    errorElenment.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}
Validator.isRequired = function (value) {
    return {
        value: value,
        check: function (value) {
            return value ? undefined : 'Vui lòng nhập vào trường này!';
        }
    }
}
Validator.isEmail = function (value) {
    return {
        value: value,
        check: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập vào email hợp lệ!';

        }
    }
}


console.log();
