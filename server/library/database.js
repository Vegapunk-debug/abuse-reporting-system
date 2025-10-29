const mongoose = require('mongoose');
const ConnectMongo = async() => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/crime_reports');
        await mongoose.connect('mongodb+srv://rohitnairmuttathethu_db_user:MGm9ZPeeg%.2gxd@crimereport.40nf2yn.mongodb.net/?retryWrites=true&w=majority&appName=CrimeReport');
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}
module.exports = ConnectMongo;