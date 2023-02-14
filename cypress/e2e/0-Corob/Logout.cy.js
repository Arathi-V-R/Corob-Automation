import { LoginPage } from "./log";

const login = new LoginPage()

describe('Logout test', () => {
    it('Logout', () =>{
        login.Login('arathi.vr@simelabs.com', 'password')
        cy.get('.css-ise9rk > div').click()
    })
})