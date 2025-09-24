const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const reportRouter = require('./routes/reportRouter')
const ConnectMongo = require('./library/database');
const app = express();

ConnectMongo();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,

}));

app.use('/user',userRouter);
app.use('/report',reportRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
    