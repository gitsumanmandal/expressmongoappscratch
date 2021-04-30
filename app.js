var express = require('express');
var app = express();

const { UserRepository } = require("./repository");
const { FetchAllUsers, GetUserById, GetUserByEmail, CreateUser, UpdateUser, DeleteUser } = require("./service/user.service");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//**List Users API */
app.get('/listUsers', async (req, res) => {
   try {
      res.status(200).send(
         await FetchAllUsers(UserRepository)
      );
   }
   catch (err) {
      console.log(`Error occured at Fetch All Users API Entry Level @ /listUsers - ${err}`);
      const responseObject = {
         "message": "ERROR - " + err,
         "messageCode": "ERROR"
      };
      res.status(400).send(responseObject);
   }
});

//**Get User by User Id API */
app.get('/userById/:id', async (req, res) => {
   try {
      res.status(200).send(
         await GetUserById(UserRepository, req.params['id'])
      );
   }
   catch (err) {
      console.log(`Error occured at Get User Details by ID API Entry Level @ /user - ${err}`);
      const responseObject = {
         "message": "ERROR - " + err,
         "messageCode": "ERROR"
      };
      res.status(400).send(responseObject);
   }
});

//**Get User by User Email API */
app.get('/userByEmail', async (req, res) => {
   try {
      res.status(200).send(
         await GetUserByEmail(UserRepository, req.query.emailId)
      );
   }
   catch (err) {
      console.log(`Error occured at Get User Details by Email API Entry Level @ /user - ${err}`);
      const responseObject = {
         "message": "ERROR - " + err,
         "messageCode": "ERROR"
      };
      res.status(400).send(responseObject);
   }
});

//**Create User API */
app.post('/addUser', async (req, res) => {
   try {
      res.status(200).send(
         await CreateUser(UserRepository, req.body)
      );
   }
   catch (err) {
      console.log(`Error occured at Add User API Entry Level @ /addUser - ${err}`);
      const responseObject = {
         "message": "ERROR - " + err,
         "messageCode": "ERROR"
      };
      res.status(400).send(responseObject);
   }
});

//**Update User API */
app.put('/updateUser/:id', async (req, res) => {
   try {
      res.status(200).send(
         await UpdateUser(UserRepository, req.params['id'], req.body)
      );
   }
   catch (err) {
      console.log(`Error occured at Update User API Entry Level @ /updateUser - ${err}`);
      const responseObject = {
         "message": "ERROR - " + err,
         "messageCode": "ERROR"
      };
      res.status(400).send(responseObject);
   }
});

//**Delete User by ID API */
app.delete('/removeUser/:id', async (req, res) => {
   try {
      res.status(200).send(
         await DeleteUser(UserRepository, req.params['id'])
      );
   }
   catch (err) {
      console.log(`Error occured at Delete User API Entry Level @ /removeUser - ${err}`);
      const responseObject = {
         "message": "ERROR - " + err,
         "messageCode": "ERROR"
      };
      res.status(400).send(responseObject);
   }
});

const server = app.listen(8081, () => {
   var host = server.address().address;
   var port = server.address().port;
   console.log(`App listening at http://${host}:${port}`);
});