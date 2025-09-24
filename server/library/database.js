const mongoose = require('mongoose');
const ConnectMongo = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crime_reports');
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}
module.exports = ConnectMongo;