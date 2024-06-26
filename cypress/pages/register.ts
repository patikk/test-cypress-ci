import { User } from "../types/users"

export const registerPage = {
    selectors: {
        login: '',

    },

    attemptRegister: (randomUs: User) => {
        cy.get('[name="firstName"]').type(randomUs.firstName)
        cy.get('[name="lastName"]').type(randomUs.lastName)
        cy.get('[name="email"]').type(randomUs.email)
        cy.get('[name="username"]').type(randomUs.username)
        cy.get('[name="password"]').type(randomUs.password);
        cy.get('[class="btn btn-primary"]').click();
    }
}