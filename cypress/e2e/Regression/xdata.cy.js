import { LoginPage } from "./log";

const login = new LoginPage()

describe('All xdata tests', () => {
  it('xdata create,upload & delete', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.get('#x-data > .label').click()
    cy.contains('Buckets').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[name="bucket"]').type('a_test_bucket')
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get(':nth-child(7) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()


    cy.contains('XData').click()
    cy.get('#x-data-buckets > .label').click()


    // Delete
    cy.get(':nth-child(7) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss109 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })

  it('xdata upload to an existing bucket', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.contains('Buckets').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[name="bucket"]').type('a_test_bucket')
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get(':nth-child(7) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    // upload to an existing bucket
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/3-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    cy.contains('XData').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get(':nth-child(7) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss109 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })

  it('xdata creation with null value', ()=>{
    login.Login('admin@admin.com', 'admin')
    cy.contains('Buckets').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
  })

  it('xdata upload without file ', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.contains('Buckets').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[name="bucket"]').type('a_test_bucket')
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get(':nth-child(7) > .hoverTextCursor').click()
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()


    cy.contains('XData').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get(':nth-child(7) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss109 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
    })

  it('xdata upload with wrong file ', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.contains('Buckets').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[name="bucket"]').type('a_test_bucket')
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get(':nth-child(7) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/tintsystem.zip')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()
    cy.get('.jss87 > .MuiButtonBase-root').click()


    cy.contains('XData').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get(':nth-child(7) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss109 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
    })

  it('xdata downloads log', () => {
    login.Login('admin@admin.com', 'admin')
    cy.contains('Buckets').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('[style="margin-left: 30px;"]').click()
  })

  it('xdata upload & download', () =>{
    login.Login('admin@admin.com', 'admin')
    cy.contains('Buckets').click()
    cy.get('#x-data-buckets > .label').click()
    cy.get('.table-header-right-container > :nth-child(1)').should('contain', 'Create New')
    cy.get('.table-header-right-container > :nth-child(1)').click()
    cy.get('input[name="bucket"]').type('a_test_bucket')
    cy.get('.jss31 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()

    // upload
    cy.get(':nth-child(7) > .hoverTextCursor').click()
    cy.get('.box-div > div > .MuiButtonBase-root').selectFile('cypress/fixtures/2-0.xdata')
    cy.get('[style="display: flex; justify-content: end;"] > .MuiButtonBase-root').click()

    // download
    cy.get('.action-icon').click()


    cy.contains('XData').click()
    cy.get('#x-data-buckets > .label').click()

    // Delete
    cy.get(':nth-child(7) > [style="width: 10%; display: flex;"] > .icon-background > .action-icon').click()
    cy.get('.jss109 > .MuiButtonBase-root').click()
    cy.get('.MuiButtonBase-root').should('have.class','MuiButtonBase-root')
    cy.get('.swal2-confirm').click()
  })


})
