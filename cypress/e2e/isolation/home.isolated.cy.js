/// <reference types="cypress" />
import { getFakeLoginResponse } from '../../generators/userGenerator';
import { getUsersMocks } from '../../mocks/getUsers.js';

describe('security isolated', () => {

    it('example fail', () => {
        const user = getFakeLoginResponse();
        cy.setCookie('token', user.token);
        localStorage.setItem('user', JSON.stringify(user));
        
        // cy.intercept('GET', '**/users', { fixture: 'users.json' })
        getUsersMocks.mockUsers();
        cy.visit('http://localhost:8081');
        cy.get('h3').should('have.text', 'Login')
        // cy.url().should('contain', '/login')

    })

})
