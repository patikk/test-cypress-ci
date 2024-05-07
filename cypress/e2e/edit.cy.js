/// <reference types="cypress" />
import {getRandomUser} from '../generators/userGenerator.js'

let token;
let userRandom;

describe('example to-do app', () => {
    beforeEach(() => {
        userRandom = getRandomUser();
        cy.register(userRandom);
        cy.login(userRandom.username, userRandom.password);
        //cy.getCookie('token').then(cookie=>token=cookie.value);
        cy.getCookie('token').then((cookie) => {
            token = cookie.value
        })
        //cy.logout(userRandom.username);
        // cy.login("admin", "admin");
        cy.get('li').contains(`${userRandom.firstName} ${userRandom.lastName}`).find('.edit').click();
    })


    it('check values', () => {
        //cy.get('li').contains(`${userRandom.firstName} ${userRandom.lastName}`).find('.edit').click();
        cy.get('[name="firstName"]').invoke('val').should('eq', userRandom.firstName)
        cy.get('[name="lastName"]').invoke('val').should('eq', userRandom.lastName)
        cy.get('[name="email"]').invoke('val').should('eq', userRandom.email)
        cy.get('[name="username"]').invoke('val').should('eq', userRandom.username)
        cy.get('[name="roles"]').invoke('val').should('contains', userRandom.roles)
        // inaczej mozna
        //cy.get('[name="roles"]').should('have.value', userRandom.roles.join(','))
        //
    })


    it('should correctly edit an user', () => {
        // given
        const newUser = getRandomUser()

        // when
        cy.get('[name=firstName]').clear().type(newUser.firstName)
        cy.get('[name=lastName]').clear().type(newUser.lastName)
        cy.get('[name=email]').clear().type(newUser.email)
        cy.get('.btn-primary').click()

        // then
        cy.get('.alert').should('have.text', 'Updating user successful')
        cy.get('li').contains(`${newUser.firstName} ${newUser.lastName}`).should('exist')
        cy.get('li').contains(`${userRandom.firstName} ${userRandom.lastName}`).should('not.exist')

        cy.request({
            method: 'GET',
            url: `http://localhost:4001/users/${userRandom.username}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((resp) => {
            const body = resp.body
            expect(body.username).to.eq(userRandom.username)
            expect(body.roles).to.deep.equal(userRandom.roles)
            expect(body.firstName).to.eq(newUser.firstName)
            expect(body.lastName).to.eq(newUser.lastName)
            expect(body.email).to.eq(newUser.email)
        })
    })


    // it('clean up', () => {
        
    // })


    // it('displays two todo items by default', () => {
    //     //cy.url().should(contain, '') 
    //     cy.get('h1').should('contains.text', 'Slawomir');
    //     cy.get('ul li').should('have.length.at.least', 1)



    // })

    // it('add user', () => {
    //     cy.get('#addmore').click();
    //     cy.get('h2').should('have.text', 'Register')
    //     cy.url().should('contain', 'add-user')
    //     // cy.get('#firstName').type("Anna");
    //     // cy.get('#lastName').type("Anna");
    //     // cy.get('#username').type("Anna");
    //     // cy.get('#firstName').type("Anna");



    // })

    // it('logout', () => {
    //     cy.get('#logout').click();

    // })

    // it('should logout', () => {
    //     cy.get('#logout').click()
    //     cy.get('h2').should('have.text', 'Login')
    //     cy.url().should('contain', '/login')
    // })

    // it('should open add more user page', () => {
    //     cy.get('#addmore').click()
    //     cy.get('h2').should('have.text', 'Register')
    //     cy.url().should('contain', 'add-user')
    // })

afterEach(() => {
    //cy.getCookie
    //cy.log('token '+ token);

})

})

