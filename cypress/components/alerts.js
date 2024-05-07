export const alerts = {

    verifySuccess: () => {
        cy.get('.alert-success').should('have.text', 'Registration successful')
    },

    verifyFailure: (message) => {
    //verifyFailure: (message: string) => {
        cy.get('.alert-danger').should('have.text', message)
    }
}