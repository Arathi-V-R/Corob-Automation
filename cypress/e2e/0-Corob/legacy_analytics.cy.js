import { LoginPage } from "./log";

const login = new LoginPage()

describe('All legacy analytics tests', () => {
    it('Legacy analytics with data', () =>{
        login.Login('admin@admin.com', 'admin')
        cy.get('#legacy-databases > .label').click()
        cy.get('#legacy-databases-analytics > .label').click()
        cy.get(':nth-child(4) > .hoverTextCursor').click()

        cy.get('input[id=":rq:"]').type('09/01/2022')
        cy.get('input[id=":rr:"]').type('11/01/2022')
        cy.get('.jss81 > .MuiButtonBase-root').should('contain', 'Export')
        cy.get('.jss81 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
//        cy.get('.jss88 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    })

    it('Legacy analytics without data', () =>{
        login.Login('admin@admin.com', 'admin')
        cy.get('#legacy-databases > .label').click()
        cy.get('#legacy-databases-analytics > .label').click()
        cy.get(':nth-child(4) > .hoverTextCursor').click()
        
        cy.get('.jss81 > .MuiButtonBase-root').should('contain', 'Export')
        cy.get('.jss81 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
//        cy.get('.jss88 > .MuiButtonBase-root').click()
        cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    })
})