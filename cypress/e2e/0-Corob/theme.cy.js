import { LoginPage } from "./log";

const login = new LoginPage()

describe('All theme tests', () => {
  it('Theme create & delete', () =>{
    login.Login('varsha@gmail.com', 'password')

    // create theme
    cy.get('#themes > .label').click()
    cy.get('.table-header-right-container > .MuiButtonBase-root').should('contain', 'Create New')
    cy.get('.table-header-right-container > .MuiButtonBase-root').click()
    cy.get('input[id=":r2:"]').type('test_theme')
    cy.get('.jss78 > .MuiButtonBase-root').should('contain', 'Create')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // Delete theme
    cy.get('.action-icon').click()
    cy.get('.jss83 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })

  it('Theme version create', () =>{
    login.Login('varsha@gmail.com', 'password')

    // create theme
    cy.get('#themes > .label').click()
    cy.get('.table-header-right-container > .MuiButtonBase-root').should('contain', 'Create New')
    cy.get('.table-header-right-container > .MuiButtonBase-root').click()
    cy.get('input[id=":r2:"]').type('test_theme')
    cy.get('.jss78 > .MuiButtonBase-root').should('contain', 'Create')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload logos & create theme version
    cy.get('.css-10pmp43').click()
    cy.get(':nth-child(2) > .css-1dqbbfy > .box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/images.png')
    cy.get(':nth-child(3) > .css-1dqbbfy > .box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/asian-paints-vector-logo.png')
    cy.get('[style="display: flex;"] > .MuiButton-text').click()
    
    // Delete theme
    cy.get('#themes > .label').click()
    cy.get(':nth-child(3) > [style="width: 10%;"] > .action-icon').click()
    cy.get('.jss124 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })

  it('Theme version show colors', () =>{
    login.Login('varsha@gmail.com', 'password')

    // create theme
    cy.get('#themes > .label').click()
    cy.get('.table-header-right-container > .MuiButtonBase-root').should('contain', 'Create New')
    cy.get('.table-header-right-container > .MuiButtonBase-root').click()
    cy.get('input[id=":r2:"]').type('test_theme')
    cy.get('.jss78 > .MuiButtonBase-root').should('contain', 'Create')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload logos & create theme version
    cy.get('.css-10pmp43').click()
    cy.get(':nth-child(2) > .css-1dqbbfy > .box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/images.png')
    cy.get(':nth-child(3) > .css-1dqbbfy > .box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/asian-paints-vector-logo.png')
    cy.get('[style="display: flex;"] > .MuiButton-text').click()

    // show colors
    cy.get('#fill').click()
  })

  it('Theme version show logos', () =>{
    login.Login('varsha@gmail.com', 'password')

    cy.get('#themes > .label').click()
    cy.get('.css-10pmp43').click()

    // show logos
    cy.get('#picture_1_').click()
  })

  it('Theme version download', () =>{
    login.Login('varsha@gmail.com', 'password')

    cy.get('#themes > .label').click()
    cy.get('.css-10pmp43').click()
    
    // download
    cy.get('[width="16"]').click() 
  })

  it('Theme version apply settings', () =>{
    login.Login('varsha@gmail.com', 'password')

    cy.get('#themes > .label').click()
    cy.get('.css-10pmp43').click()
    cy.get('[style="display: flex;"] > .MuiButton-text').click()
    
    // apply settings
    cy.get(':nth-child(4) > [style="width: 20%;"] > [width="17"]').click()
    cy.get('form > div > .MuiButton-text').click()
  })

  it('Theme version delete', () =>{
    login.Login('varsha@gmail.com', 'password')

    cy.get('#themes > .label').click()
    cy.get('.css-10pmp43').click()
    
    // delete theme version
    cy.get(':nth-child(4) > [style="width: 20%;"] > [width="15.833"]').click()
    cy.get('.jss100 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')

    // Delete theme
    cy.get('#themes > .label').click()
    cy.get(':nth-child(3) > [style="width: 10%;"] > .action-icon').click()
    cy.get('.jss119 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })
})


 