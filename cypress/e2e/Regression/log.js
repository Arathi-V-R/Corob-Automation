export class LoginPage{
    Login(username, password) {
        cy.visit('http://43.205.199.162/')
        cy.get('input[name="email"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('.MuiButton-root').should('have.class','MuiButton-root')
        cy.get('.MuiButton-root').should('contain', 'Login')
        cy.get('.MuiButton-root').first().click()

      }
}
