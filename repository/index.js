const mongoose = require("mongoose");

//**Create DB Connection here */
(async function connect() {
    mongoose.connection
        .on("error", console.log)
        .on("disconnected", connect)

    return await mongoose.connect("mongodb+srv://sumanAdmin:ZZFHfzEVIq93gqSU@cluster0.uckxo.mongodb.net/sumanmandaltech?retryWrites=true&w=majority", {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
})();

module.exports = {
    UserRepository: require("../user/user.adapter")
}