const express = require ('express');
const app = express();
const env = require('dotenv')
const mongoose = require('mongoose');

//routes file importing
const userRoutes = require('./routes/users/users')
const adminRoutes = require('./routes/users/admin');
const superAdminRoutes = require('./routes/users/superAdmin');
const scrapCategory = require('./routes/scrapCategory/scrapCategory');

env.config();

//mongoDB
    mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.lxhhh.mongodb.net/${process.env.MONGO_DB_NAME }?retryWrites=true&w=majority`, {useNewUrlParser:true, 
                    useUnifiedTopology:true,
                    useCreateIndex:true
               })
    .then(() => console.log('--connected to db--'))
    .catch(err => console.error('====Unable to connect====',err))
    
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', superAdminRoutes);
app.use('/api', scrapCategory);

const port = process.env.PORT || 3000

app.listen (port, () => {
    console.log(`Server is running on port no:  ${port}`)
})