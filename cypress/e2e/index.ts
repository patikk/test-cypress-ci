declare namespace Cypress {
    interface Chainable {
        /**
         * This function logs user in via backend
         * @param username string
         * @param password string
         */
        login(username: string, password: string): void;
        //register(): void;
        register(user: object): void;
    }
}
