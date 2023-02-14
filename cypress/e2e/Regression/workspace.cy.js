import { LoginPage } from "./log";

const login = new LoginPage()


describe('All workspace tests', () => {
  it('Create workspace user with data', () =>{
      login.Login('admin@admin.com', 'admin')
      cy.get('.table-header-right-container > .MuiButtonBase-root').should('contain', 'Create New')
      cy.get('#workspace-users > .label').click()
      cy.get('.table-header-right-container > .MuiButtonBase-root').click()
      cy.get('input[id=":r2:"]').type('new@gmail.com')
//      cy.get('input[id=":r3:"]').type('SML')
      cy.get('input[id=":r4:"]').type('password')
      cy.get('input[id=":r5:"]').type('password')
      cy.get(':nth-child(5) > .MuiTypography-root').click()
      cy.get(':nth-child(9) > .MuiButtonBase-root').should('contain', 'Create')
      cy.get(':nth-child(9) > .MuiButtonBase-root').click()
      cy.get('.swal2-confirm').click()
      cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })

  it('Create workspace user without data', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('.table-header-right-container > .MuiButtonBase-root').should('contain', 'Create New')
    cy.get('#workspace-users > .label').click()
    cy.get('.table-header-right-container > .MuiButtonBase-root').click()
    cy.get(':nth-child(9) > .MuiButtonBase-root').should('contain', 'Create')
    cy.get(':nth-child(9) > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })

  it('Create workspace user with invalid data', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('.table-header-right-container > .MuiButtonBase-root').should('contain', 'Create New')
    cy.get('#workspace-users > .label').click()
    cy.get('.table-header-right-container > .MuiButtonBase-root').click()
    cy.get('input[id=":r2:"]').type('newusergmail.com')
//    cy.get('input[id=":r3:"]').type('SML')
    cy.get('input[id=":r4:"]').type('password')
    cy.get('input[id=":r5:"]').type('zxcvbn')
    cy.get(':nth-child(5) > .MuiTypography-root').click()
    cy.get(':nth-child(9) > .MuiButtonBase-root').should('contain', 'Create')
    cy.get(':nth-child(9) > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })

  it('Edit workspace user with changes', () =>{
      login.Login('admin@admin.com', 'admin')
      cy.get('#workspace-users > .label').click()
      cy.get(':nth-child(4) > [style="width: 13%; display: flex;"] > [aria-label="Change"]').click()
      cy.get(':nth-child(5) > .MuiTypography-root').click()
      cy.get(':nth-child(6) > .MuiTypography-root').click()
      cy.get('.jss78 > .MuiButtonBase-root').should('contain', 'Update')
      cy.get('.jss78 > .MuiButtonBase-root').click()
      cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
      cy.get('.swal2-confirm').click()
    })

  it('Edit workspace user without make changes', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#workspace-users > .label').click()
    cy.get(':nth-child(4) > [style="width: 13%; display: flex;"] > [aria-label="Change"]').click()
//    cy.get('.jss32 > .MuiButtonBase-root').click()
    cy.get('.jss78 > .MuiButtonBase-root').should('contain', 'Update')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })

  it('Delete workspace user ', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#workspace-users > .label').click()
    cy.get(':nth-child(4) > [style="width: 13%; display: flex;"] > [aria-label="delete"] > .action-icon').click()
    cy.get('.jss86 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.jss86 > .MuiButtonBase-root').click()
    cy.get('.swal2-confirm').click()
  })
})