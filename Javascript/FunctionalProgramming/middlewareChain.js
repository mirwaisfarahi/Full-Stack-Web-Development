// MIDDLEWARE CHAIN

// Middleware componenets
const parseRequest = (request) => {
    // parse the request
    const parsedRequest = request + " -> Request Parsed";
    return parsedRequest;
}

const authinticateUser = (request) => {
    // Authenticate the user
    const authenticatedUser = request + " -> Request Authenticated";
    return authenticatedUser;
}

const validateInput = (request) => {
    // Validate the input
    const validatedInput = request + " -> Request Validated";
    return validatedInput;
}

const generateResponse = (reequest) => {
    // Generated the response
    const response = reequest + " -> Response Generated";
    return response;
}

// Create a middleware chain
const middlewareChain = [
    parseRequest,
    authinticateUser,
    validateInput,
    generateResponse
];

// Process the request using middleware chain
const processRequest = (request) => {
    let result = request;
    for(const middleware of middlewareChain) {
        result = middleware(result);
    }

    return result;
};

// Usage
const request = "middleware chain";
const response = processRequest(request);
console.log(response);