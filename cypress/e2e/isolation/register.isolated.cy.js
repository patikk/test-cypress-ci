import { getRandomUser } from '../../generators/userGenerator.js'


describe('isolation - register', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/register');
        
    })

    it('register', () => {
        const randomUs = getRandomUser();

        cy.intercept('POST', '**/users/signup', (req) => {
            req.reply({
                statusCode: 201,
                body: {
                    token: 'fakeToken'
                },
              })
        })
        

        cy.intercept('GET', '**/users', { fixture: 'users.json' })

        cy.get('[name="firstName"]').type(randomUs.firstName)
        cy.get('[name="lastName"]').type(randomUs.lastName)
        cy.get('[name="email"]').type(randomUs.email)
        cy.get('[name="username"]').type(randomUs.username)
        cy.get('[name="password"]').type(randomUs.password);
        cy.get('[class="btn btn-primary"]').click();
        
        
        cy.get('.alert-success').should('have.text', 'Registration successful')
        //cy.get('h1').should('contain.text', fakelogin.firstName)

    
    })

   

    
})