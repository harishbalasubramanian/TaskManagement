const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/task-manager';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
// Sets up the MongoDB database
mongoose
    .connect(mongoURI, options)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err)
    });