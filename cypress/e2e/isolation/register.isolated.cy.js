import { alerts } from '../../components/alerts.js';
import { getRandomUser } from '../../generators/userGenerator.js'
import { getUsersMocks } from '../../mocks/getUsers.js';
import { registerMock } from '../../mocks/postSignUp.js';
import { registerPage } from '../../pages/register.js';


describe('isolation - register', () => {
    beforeEach(() => {
        cy.visit('/register');
        
    })

    it('should register with success', () => {
        const randomUs = getRandomUser();

        // cy.intercept('POST', '**/users/signup', (req) => {
        //     req.reply({
        //         statusCode: 201,
        //         body: {
        //             token: 'fakeToken'
        //         },
        //       })
        // })
        registerMock.mockSuccess();
        

        // cy.intercept('GET', '**/users', { fixture: 'users.json' })
        getUsersMocks.mockUsers();

        // cy.get('[name="firstName"]').type(randomUs.firstName)
        // cy.get('[name="lastName"]').type(randomUs.lastName)
        // cy.get('[name="email"]').type(randomUs.email)
        // cy.get('[name="username"]').type(randomUs.username)
        // cy.get('[name="password"]').type(randomUs.password);
        // cy.get('[class="btn btn-primary"]').click();
        registerPage.attemptRegister(randomUs)
        
        // cy.get('.alert-success').should('have.text', 'Registration successful')
        alerts.verifySuccess();
        cy.url().should('contain', '/login')
    
    })

   

    
})