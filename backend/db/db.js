const mongoos = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://sharonroseh53:D5o7Z5l0AxUk2ouV@cluster0.leodp.mongodb.net/?retryWrites=true&w=majority')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB