const login = require('./login');

test('Đăng nhập thành công với tài khoản hợp lệ', () => {
    expect(login('admin', '123')).toBe(true);
});

test('Đăng nhập thất bại với mật khẩu sai', () => {
    expect(login('admin', '1234')).toBe(false);
});

test('Đăng nhập thất bại với username sai', () => {
    expect(login('user', '123')).toBe(false);
});
