function login(user, pass) {
    return user === 'admin' && pass === '1234';
}

module.exports = login;
