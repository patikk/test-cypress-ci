/// <reference types="cypress" />
import { getRandomUser } from '../generators/userGenerator'

let token: string | undefined;
const userRandom = getRandomUser();


    describe('example to-do app', () => {
        beforeEach(() => {
          cy.visit('http://localhost:8081')
        })
      
        it('displays two todo items by default', () => {
            cy.get('[name=username]').type('admin')
            cy.get('[name=password]').type('admin')
            cy.get('.btn-primary').click()
    
            cy.get('h1').should('contain.text', 'Slawomir')
        })
      
      })


/*
describe('example to-do app', () => {
    beforeEach(() => {
        // cy.visit('http://localhost:8081');
        // cy.get('[name="username"]').type("admin");
        // cy.get('[name="password"]').type("admin");
        // cy.get('[class="btn btn-primary"]').click();

        //1.request HTMLOutputElement
        //2a. ustawiamy odp w local Storage
        //2b. ustawiamy token z odp w ciasteczku

        // przenieisienie ponizeszego do commands.js:
        // cy.request({
        //     method: 'POST',
        //     url: 'http://localhost:4001/users/signin', // baseUrl is prepend to URL
        //     //form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        //     body: {
        //         username: 'admin',
        //         password: 'admin',
        //     },
        // }).then((resp) => {
        //     localStorage.setItem('user', JSON.stringify(resp.body));
        //     cy.setCookie('token', resp.body.token);
        //     cy.visit('http://localhost:8081');
        // })

        // i wywlujemy to z commands:
        cy.login('admin', 'admin');
    })

    it('register', () => {
        //const userRandom = getRandomUser();
        cy.register(userRandom);
        cy.login(userRandom.username, userRandom.password);
        //cy.getCookie('token').then(cookie=>token=cookie.value);
        cy.getCookie('token').then((cookie) => {
            token = cookie.value
        });
        //cy.logout(userRandom.username);
        // cy.login("admin", "admin");
        //cy.cleanup(userRandom.username, token);
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
        cy.log('token ' + token);
        // cy.request({
        //     method: 'DELETE',
        //     //`${generateRandomString(8)}@ergo.com`,
        //     url: `http://localhost:4001/users/${userRandom.username}`, // baseUrl is prepend to URL
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }).then((resp) => {
        //     cy.log("resp " + resp.status)
            
        //     //cy.get('[class="text-primary delete"]').should('contains.text', userRandom.username).click();
        // })

    })

})*/

