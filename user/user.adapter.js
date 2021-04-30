const UserModel = require("./user.model");

const fetchAllUsers = async () => {
    try {
        let result = await UserModel.find({});
        const responseObject = {
            "data": result,
            "dataLength": result.length,
            "messageCode": "SUCCESS"
        };
        return responseObject;
    }
    catch (err) {
        console.log(`Error occured at Fetch All Users API @user.adapter.js @fetchAllUsers - ${err}`);
        const responseObject = {
            "message": "DATABASE ERROR - " + err,
            "messageCode": "ERROR"
        };
        return responseObject;
    }
}

const getUserById = async (id) => {
    try {
        let result = await UserModel.findById(id);
        const responseObject = {
            "data": result,
            "dataLength": 1,
            "messageCode": "SUCCESS"
        }
        return responseObject;
    }
    catch (err) {
        console.log(`Error occured at Get User by ID API @user.adapter.js @getUserById - ${err}`);
        const responseObject = {
            "message": "DATABASE ERROR - " + err,
            "messageCode": "ERROR"
        };
    }
}

const getUserByEmailId = async (emailId) => {
    try {
        let result = await UserModel.find({ "emailId": emailId });
        const responseObject = {
            "data": result,
            "dataLength": 1,
            "messageCode": "SUCCESS"
        }
        return responseObject;
    }
    catch (err) {
        console.log(`Error occured at Get User by Email API @user.adapter.js @getUserByEmailId - ${err}`);
        const responseObject = {
            "message": "DATABASE ERROR - " + err,
            "messageCode": "ERROR"
        };
    }
}

const createUser = async (req) => {
    try {
        let result = await UserModel(req).save();
        const responseObject = {
            "data": result,
            "dataLength": 1,
            "messageCode": "SUCCESS"
        }
        return responseObject;
    }
    catch (err) {
        console.log(`Error occured at Create User API @user.adapter.js @createUser - ${err}`);
        const responseObject = {
            "message": "DATABASE ERROR - " + err,
            "messageCode": "ERROR"
        };
        return responseObject;
    }
}

const updateUser = async (id, req) => {
    try {
        let query = { _id: id };
        let result = await UserModel.updateOne(query, req);
        const responseObject = {
            "data": result,
            "dataLength": 1,
            "messageCode": "SUCCESS"
        }
        return responseObject;
    }
    catch (err) {
        console.log(`Error occured at Update User API @user.adapter.js @updateUser - ${err}`);
        const responseObject = {
            "message": "DATABASE ERROR - " + err,
            "messageCode": "ERROR"
        };
        return responseObject;
    }
}

const deleteUser = async (id) => {
    try {
        let query = { _id: id };
        let result = await UserModel.deleteOne(query);
        const responseObject = {
            "data": result,
            "dataLength": 1,
            "messageCode": "SUCCESS"
        }
        return responseObject;
    }
    catch (err) {
        console.log(`Error occured at Delete User API @user.adapter.js @deleteUser - ${err}`);
        const responseObject = {
            "message": "DATABASE ERROR - " + err,
            "messageCode": "ERROR"
        };
    }
}

module.exports = {
    fetchAllUsers,
    getUserById,
    getUserByEmailId,
    createUser,
    updateUser,
    deleteUser
};