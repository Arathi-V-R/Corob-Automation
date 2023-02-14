import { LoginPage } from "./log";

const login = new LoginPage()

describe('All xdata analytics tests', () => {
    it('Xdata analytics with data', () =>{
        login.Login('arathi.vr@simelabs.com', 'password')
        cy.get('#x-data > .label').click()
        cy.get('#x-data-analytics1 > .label').click()
        cy.get('.table-container > :nth-child(3)').click()

        cy.get('input[id=":rq:"]').type('09/01/2022')
        cy.get('input[id=":rr:"]').type('11/01/2022')
        cy.get(':nth-child(9) > .MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.get('.jss81 > .MuiButtonBase-root').should('contain', 'Export')
        cy.get('.jss81 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
        cy.get('.jss78 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    })

    it('Xdata analytics without data', () =>{
        login.Login('arathi.vr@simelabs.com', 'password')
        cy.get('#x-data > .label').click()
        cy.get('#x-data-analytics1 > .label').click()
        cy.get('.table-container > :nth-child(3)').click()
        cy.get(':nth-child(5) > .hoverTextCursor').click()

        cy.get(':nth-child(9) > .MuiFormControlLabel-root > .MuiTypography-root').click()
        cy.get('.jss81 > .MuiButtonBase-root').should('contain', 'Export')
        cy.get('.jss81 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
        cy.get('.jss78 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    })
})