describe('My First Test', () => {
  it('Login - Error', () => {
    cy.visit('https://virtual.um.edu.ar/login/index.php')
    cy.get('#username')
      .type('fake@email.com')
    cy.get('#password')
      .type('pato123')

    cy.get('#loginbtn').click()
    cy.get('#loginerrormessage').should("have.text", "Acceso inválido. Por favor, inténtelo otra vez.")
   })   
   it('Login - OK', () => {
    cy.visit('https://virtual.um.edu.ar/login/index.php')
    cy.get('#username')
      .type('j.locamuz')
    cy.get('#password')
      .type('kala59104')
    cy.get('#loginbtn').click()
    cy.get(".userpicture.defaultuserpic")    
    })
})