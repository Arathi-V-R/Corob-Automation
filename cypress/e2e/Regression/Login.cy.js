import { LoginPage } from "./log";

const login = new LoginPage()

describe('All login tests', () => {
    it('Login with valid credentials', () =>{
        login.Login('arathi.vr@simelabs.com', 'password')
    })
    it('Login with invalid email', () =>{
        login.Login('zxcvbnm@simelabs.com', 'password')
    })
    it('Login with invalid password', () =>{
        login.Login('arathi.vr@simelabs.com', '123456')
    })
    it('Login without email', () =>{
        login.Login(' ', 'password')
    })
    it('Login without password', () =>{
        login.Login('arathi.vr@simelabs.com', ' ')
    })
})