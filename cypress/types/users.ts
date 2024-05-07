import { Roles } from "./roles";

export interface User {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    roles: Roles[],
    password: string,
}