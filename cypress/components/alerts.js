export const alerts = {

    verifySuccess: () => {
        cy.get('.alert-success').should('have.text', 'Registration successful')
    },

    verifyFailure: () => {

    }
}