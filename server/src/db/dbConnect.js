const mongoose = require('mongoose');

const dbConnect =  async () => {
    try {
        const conn = mongoose.connect(
            process.env.MONGO_URL,
            {
                // dbName: process.env.MONGO_DB_NAME,
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
        console.log(`DB connected successfully.`)
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

module.exports = dbConnect;
