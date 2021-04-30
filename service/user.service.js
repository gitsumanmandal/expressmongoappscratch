module.exports = {
    "FetchAllUsers": async (repository) => {
        try {
            let result = await repository.fetchAllUsers();
            //**Add your custom logic if any and append any data to the response from here */
            return {
                "data": result.data,
                "dataLength": result.dataLength,
                "message": result.message,
                "messageCode": result.messageCode,
                "customisedData": "Nothing Customised"
            };
        }
        catch (err) {
            console.log(`Error occured at Fetch All Users API @user.service.js @FetchAllUsers - ${err}`);
            const responseObject = {
                "message": "ERROR - " + err,
                "messageCode": "ERROR"
            };
            return responseObject;
        }
    },
    "GetUserById": async (repository, id) => {
        try {
            let result = await repository.getUserById(id);
            //**Add your custom logic if any and append any data to the response from here */
            return {
                "data": result.data,
                "dataLength": result.dataLength,
                "message": result.message,
                "messageCode": result.messageCode,
                "customisedData": "Nothing Customised"
            };
        }
        catch (err) {
            console.log(`Error occured at Get User by ID API @user.service.js @GetUserById - ${err}`);
            const responseObject = {
                "message": "ERROR - " + err,
                "messageCode": "ERROR"
            };
            return responseObject;
        }
    },
    "GetUserByEmail": async (repository, emailId) => {
        try {
            let result = await repository.getUserByEmailId(emailId);
            //**Add your custom logic if any and append any data to the response from here */
            return {
                "data": result.data,
                "dataLength": result.dataLength,
                "message": result.message,
                "messageCode": result.messageCode,
                "customisedData": "Nothing Customised"
            };
        }
        catch (err) {
            console.log(`Error occured at Get User by Email API @user.service.js @GetUserByEmail - ${err}`);
            const responseObject = {
                "message": "ERROR - " + err,
                "messageCode": "ERROR"
            };
            return responseObject;
        }
    },
    "CreateUser": async (repository, req) => {
        try {
            let result = await repository.createUser(req);
            //**Add your custom logic if any and append any data to the response from here */
            return {
                "data": result.data,
                "dataLength": result.dataLength,
                "message": result.message,
                "messageCode": result.messageCode,
                "customisedData": "Nothing Customised"
            };
        }
        catch (err) {
            console.log(`Error occured at Add User API @user.service.js @CreateUser - ${err}`);
            const responseObject = {
                "message": "ERROR - " + err,
                "messageCode": "ERROR"
            };
            return responseObject;
        }
    },
    "UpdateUser": async (repository, id, req) => {
        try {
            let result = await repository.updateUser(id, req);
            //**Add your custom logic if any and append any data to the response from here */
            return {
                "data": result.data,
                "dataLength": result.dataLength,
                "message": result.message,
                "messageCode": result.messageCode,
                "customisedData": "Nothing Customised"
            };
        }
        catch (err) {
            console.log(`Error occured at Update User API @user.service.js @UpdateUser - ${err}`);
            const responseObject = {
                "message": "ERROR - " + err,
                "messageCode": "ERROR"
            };
            return responseObject;
        }
    },
    "DeleteUser": async (repository, id) => {
        try {
            let result = await repository.deleteUser(id);
            //**Add your custom logic if any and append any data to the response from here */
            return {
                "data": result.data,
                "dataLength": result.dataLength,
                "message": result.message,
                "messageCode": result.messageCode,
                "customisedData": "Nothing Customised"
            };
        }
        catch (err) {
            console.log(`Error occured at Delete User API @user.service.js @DeleteUser - ${err}`);
            const responseObject = {
                "message": "ERROR - " + err,
                "messageCode": "ERROR"
            };
            return responseObject;
        }
    },
}