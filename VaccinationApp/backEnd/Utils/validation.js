
//Check input Email
function isValidEmail(value) {
    return value && value.includes('@');
}

//Check password length
function isValidText(value, minLength = 1) {
    return value && value.trim().length >= minLength;
}

exports.isValidText = isValidText;
exports.isValidEmail = isValidEmail;