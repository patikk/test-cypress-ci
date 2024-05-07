// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import {getRandomUser} from '../generators/userGenerator'

// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 

    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin', // baseUrl is prepend to URL
        body: {
            username: username,
            password: password,
        },
    }).then((resp) => {
        localStorage.setItem('user', JSON.stringify(resp.body));
        cy.setCookie('token', resp.body.token);
        
    })
    cy.visit('http://localhost:8081');
    cy.log("login hip hip")

    // cy.visit('http://localhost:8081');
    //     cy.get('[name="username"]').type("username");
    //     cy.get('[name="password"]').type("password");
    //     cy.get('[class="btn btn-primary"]').click();

})


// Cypress.Commands.add('register', () => { 

//     const userRandom = getRandomUser();
//     cy.request({
//         method: 'POST',
//         url: 'http://localhost:4001/users/signup', // baseUrl is prepend to URL
//         body: userRandom
//         //{
//         //     firstName: userRandom.firstName,
//         //     lastName: userRandom.lastName,
//         //     username: userRandom.username,
//         //     password: userRandom.password,
//         //     roles: userRandom.roles,
//         //     email: userRandom.email
//         // },
//     }).then((resp) => {
//         cy.log("resp " + resp.status)
//         if(resp.status == '201') {
//             cy.log("hip hip hurra")
//         }
//         cy.login(userRandom.username, userRandom.password);
        
//         //cy.get('[class="text-primary delete"]').should('contains.text', userRandom.username).click();
//     })

// })

Cypress.Commands.add('register', (user) => { 

    //const userRandom = getRandomUser();
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signup', // baseUrl is prepend to URL
        body: user
        //{
        //     firstName: userRandom.firstName,
        //     lastName: userRandom.lastName,
        //     username: userRandom.username,
        //     password: userRandom.password,
        //     roles: userRandom.roles,
        //     email: userRandom.email
        // },
    }).then((resp) => {
        cy.log("resp " + resp.status)
        if(resp.status === 201) {
            cy.log("hip hip hurra")
        }
       // cy.login(userRandom.username, userRandom.password);
        
        //cy.get('[class="text-primary delete"]').should('contains.text', userRandom.username).click();
    })

})

//logout
Cypress.Commands.add('logout', () => { 

    //const userRandom = getRandomUser();
    cy.get('#logout').click();

})

//cleanup
// Cypress.Commands.add('cleanup', (user, token) => { 

//     //const userRandom = getRandomUser();
//     cy.log("logout");
//     //cy.get('[class="text-primary delete"]').should('contains.text', user).click();
//     cy.request({
//         method: 'DELETE',
//         //`${generateRandomString(8)}@ergo.com`,
//         url: `http://localhost:4001/users/${user}`, // baseUrl is prepend to URL
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//         //body: user
//         //{
//         //     firstName: userRandom.firstName,
//         //     lastName: userRandom.lastName,
//         //     username: userRandom.username,
//         //     password: userRandom.password,
//         //     roles: userRandom.roles,
//         //     email: userRandom.email
//         // },
//     }).then((resp) => {
//         cy.log("resp " + resp.status)
//         // if(resp.status == '201') {
//         //     cy.log("hip hip hurra")
//         // }
//        // cy.login(userRandom.username, userRandom.password);
        
//         //cy.get('[class="text-primary delete"]').should('contains.text', userRandom.username).click();
//     })

// })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })