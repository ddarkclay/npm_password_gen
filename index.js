const randomPasswordGenerator = (len = 10) => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (var i = 0, n = charset.length; i < len; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}
     
exports.randomPasswordGenerator = randomPasswordGenerator;