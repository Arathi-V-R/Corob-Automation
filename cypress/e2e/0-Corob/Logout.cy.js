import { LoginPage } from "./log";

const login = new LoginPage()

describe('Logout test', () => {
    it('Logout', () =>{
        login.Login('admin@admin.com', 'admin')
        cy.get('.css-ise9rk > div').click()
    })
})