export const loginPage = {

    attemptLogin: () => {
        cy.get('[name=username]').type('wrong')
        cy.get('[name=password]').type('password')
        cy.get('.btn-primary').click()
    }
}