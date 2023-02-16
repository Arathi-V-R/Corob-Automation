export class LoginPage{
    Login(username, password) {
        cy.visit('https://staging.corob-cloud.com/sign-in')
        cy.get('input[name="email"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('.MuiButton-root').should('have.class','MuiButton-root')
        cy.get('.MuiButton-root').should('contain', 'Login')
        cy.get('.MuiButton-root').first().click()

      }
}
