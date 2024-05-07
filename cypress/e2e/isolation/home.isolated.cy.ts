/// <reference types="cypress" />
import { getFakeLoginResponse } from '../../generators/userGenerator';
import { getUsersMocks } from '../../mocks/getUsers';

describe('security isolated', () => {

    beforeEach(() => {
        const user = getFakeLoginResponse();
        cy.setCookie('token', user.token);
        localStorage.setItem('user', JSON.stringify(user));
        
        // cy.intercept('GET', '**/users', { fixture: 'users.json' })
        getUsersMocks.mockUsers();
        
    })

    it('should display home page - pass', () => {
        // when (tested action)
        cy.visit('http://localhost:8081')

        // then (assertion)
        cy.get('li').should('have.length.at.least', 2)
    })

    // it('should display home page - fail', () => {
    //     // when (tested action)
    //     cy.visit('http://localhost:8081')

    //     // then (assertion)
    //     cy.get('li').should('have.length', 1)
    // })

})
