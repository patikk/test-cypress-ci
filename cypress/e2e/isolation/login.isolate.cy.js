/// <reference types="cypress" />
import { getFakeLoginResponse } from '../../generators/userGenerator.js'
import { getUsersMocks } from '../../mocks/getUsers.js';
import { loginMocks } from '../../mocks/postSignIn.js';


describe('isolation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
        
    })

    it('login with success', () => {
        const fakelogin = getFakeLoginResponse();
        // cy.intercept('POST', '**/users/signin', (req) => {
        //     req.reply({
        //       statusCode: 200,
        //       body: fakelogin,
               
        //     })
        //   })
        loginMocks.mockSuccess(fakelogin);

        // cy.intercept('GET', '**/users', { fixture: 'users.json' })
        getUsersMocks.mockUsers();
          
        cy.get('[name="username"]').type(fakelogin.username);
        cy.get('[name="password"]').type("password");
        cy.get('[class="btn btn-primary"]').click();
        //cy.get('h1').should('contains.text', 'Slawomir');
        cy.get('h1').should('contain.text', fakelogin.firstName)

    
    })

    it('should fail to login', () => {
        const message = "Invalid username/password supplied"
        // cy.intercept('POST', '**/users/signin', (req) => {
        //     req.reply({
        //         statusCode: 422,
        //         body: {
        //             timestamp: "2024-05-06T15:48:46.127+00:00",
        //             status: 422,
        //             error: "Unprocessable Entity",
        //             message: message,
        //             path: "/users/signin"
        //         }
        //     })
        // })
        loginMocks.mockFailure(message);

        cy.get('[name=username]').type('wrong')
        cy.get('[name=password]').type('password')
        cy.get('.btn-primary').click()

        cy.get('.alert-danger').should('have.text', message)
    })


    
})