const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ub5rddy.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conexão com banco realizada com sucesso!"));
}

module.exports = connectToDatabase;
