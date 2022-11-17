describe("Test Cypress en la catedra virtual UM", () => {

    it("test 1", () => {
        cy.visit('https://virtual.um.edu.ar/login/index.php')
        cy.get('#username').type('j.locamuz')
        cy.get('#password').type('kala59104')
        cy.get('#loginbtn').click()
        cy.get('[data-key="1802"]').click({force: true})
        cy.get('[href="https://virtual.um.edu.ar/mod/questionnaire/view.php?id=210589"]').click()
        cy.contains('Responda a las preguntas...').click({force: true})
        cy.get('[value="4049"]').click()
        cy.get('[name="q1788"]').select('Tercero')
        cy.get('[value="Enviar encuesta"]').click()
        cy.get('[class="btn btn-secondary"]').click()

    })
}
)