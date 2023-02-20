import { LoginPage } from "./log";

const login = new LoginPage()


describe('All legacy database tests', () => {
  it('Legacy database create,upload & delete ', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":r2:"]').type('test_db')
    cy.get('.jss77 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    //   upload db
    cy.get(':nth-child(8) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/tintsystem.zip')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    //   delete
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get(':nth-child(8) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss119 > .MuiButtonBase-root').click()
    cy.get('.swal2-confirm').click()
    })

  it('db creation with null value', ()=>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('.jss77 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })
  it('Legacy database upload without file ', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":r2:"]').type('test_db')
    cy.get('.jss77 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    //   upload db
    cy.get(':nth-child(8) > .hoverTextCursor').click()
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    //   delete
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get(':nth-child(8) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss119 > .MuiButtonBase-root').click()
    cy.get('.swal2-confirm').click()
    })

  it('Legacy database upload with wrong file ', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":r2:"]').type('test_db')
    cy.get('.jss77 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    //   upload db
    cy.get(':nth-child(8) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()
    cy.get('.jss103 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')

    //   delete
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get(':nth-child(8) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss119 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
    })

  it('Legacy database version download & delete', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":r2:"]').type('test_db')
    cy.get('.jss77 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    //   upload db
    cy.get(':nth-child(8) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/tintsystem.zip')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    // download & delete uploaded db

    cy.get('[width="16"]').click()
    cy.get('[width="15.833"]').click()
    cy.get('.jss103 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')

    //   delete
    cy.get('#legacy-databases > .label').click()
    cy.get('#legacy-databases-databases > .label').click()
    cy.get(':nth-child(8) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss119 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
    })

})
 