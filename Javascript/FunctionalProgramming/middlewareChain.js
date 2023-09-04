// MIDDLEWARE CHAIN
// 1. Simple Example
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

// 2. next() function in middleware
const middleware1 = (next) => {
    console.log("Middleware 1");
    next();
};

const middleware2 = (next) => {
    console.log("Middleware 2");
    next();
};

const finalHandler = () => {
    console.log("Final Handler");
};

// Define the middleware stack
const middlewareStack = [middleware1, middleware2, finalHandler];

// Execute the middleware stack
const executeMiddlewareStack = () => {
    const executeNextMiddleware = (index) => {
        if(index < middlewareStack.length) {
            const middleware = middlewareStack[index];
            middleware(() => executeNextMiddleware(index + 1));
        }
    }

    executeNextMiddleware(0);
};

executeMiddlewareStack();