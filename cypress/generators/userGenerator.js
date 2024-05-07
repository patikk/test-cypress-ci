export const getFakeLoginResponse = () => {
    return {
        username: generateRandomString(8),
        firstName: generateRandomString(8),
        lastName: generateRandomString(8),
        email: `${generateRandomString(8)}@ergo.com`,
        roles: ["ROLE_CLIENT", "ROLE_ADMIN"],
        token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfQ0xJRU5UIn1dLCJpYXQiOjE3MTQ5OTQxOTgsImV4cCI6MTcxNDk5NDQ5OH0.PfyMKMIgNV5C7b8LycISZG_H9LwHTljj5AFrX0jbJtk",
    }
};

export const getRandomUser = () => {
    return {
        ...getCommonFields(),
        // username: generateRandomString(8),
        // firstName: generateRandomString(8),
        // lastName: generateRandomString(8),
        // email: `${generateRandomString(8)}@ergo.com`,
        // roles: ["ROLE_CLIENT"],
        password: generateRandomString(8),
    }
}

export const getCommonFields = () => {
    return {
        username: generateRandomString(8),
        firstName: generateRandomString(8),
        lastName: generateRandomString(8),
        email: `${generateRandomString(8)}@ergo.com`,
        roles: ["ROLE_CLIENT", "ROLE_ADMIN"],
        password: generateRandomString(8),
    }
}

const generateRandomString = (length) => {
    return Array(length)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2)).join('');
}
