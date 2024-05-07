export const alerts = {

    verifySuccess: () => {
        cy.get('.alert-success').should('have.text', 'Registration successful')
    },

    verifyFailure: (message: string) => {
    //verifyFailure: (message: string) => {
        cy.get('.alert-danger').should('have.text', message)
    }
}