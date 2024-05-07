import { User } from "../types/users";

// declare namespace Cypress {
//     interface Chainable {
declare global {
    namespace Cypress {
        interface Chainable {
            //     interface Chainable {
            /**
             * This function logs user in via backend
             * @param username string
             * @param password string
             */
            login(username: string, password: string): void;
            //register(): void;
            register(user: User): void;
            logout(): void;
        }
    }
}
