import { LoginPage } from "./log";

const login = new LoginPage()

describe('All xdata tests', () => {
  it('xdata create,upload & delete', () =>{
    login.Login('arathi.vr@simelabs.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":rm:"]').type('test_bucket')
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get('.hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()


    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get('.action-icon').click()
    cy.get('.jss126 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })

  it('xdata upload to an existing bucket', () =>{
    login.Login('varsha@gmail.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":rb:"]').type('test_bucket')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get('.hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    // upload to an existing bucket
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/3-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get('.action-icon').click()
    cy.get('.jss126 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })

  it('xdata creation with null value', ()=>{
    login.Login('varsha@gmail.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })

  it('xdata upload without file ', () =>{
    login.Login('varsha@gmail.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":rb:"]').type('test_bucket')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get('.hoverTextCursor').click()
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()


    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get('.action-icon').click()
    cy.get('.jss126 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
    })

  it('xdata upload with wrong file ', () =>{
    login.Login('varsha@gmail.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":rb:"]').type('test_bucket')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get('.hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/tintsystem.zip')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()
    cy.get('.jss104 > .MuiButtonBase-root').click()


    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get('.action-icon').click()
    cy.get('.jss126 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
    })

  it('xdata downloads log', () => {
    login.Login('arathi.vr@simelabs.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('[style="margin-left: 30px;"]').click()
  })

  it('xdata upload & download', () =>{
    login.Login('varsha@gmail.com', 'password')
    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[id=":rb:"]').type('test_bucket')
    cy.get('.jss78 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get('.hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    // download
    cy.get('.action-icon').click()


    cy.get('#x-data > .label').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get('.action-icon').click()
    cy.get('.jss126 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })


})
