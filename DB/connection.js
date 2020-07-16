const mongoose = require('mongoose');

const URI = 'mongodb+srv://LouisEiermann:SLh3JmEw3Xkp3Mcc@cluster0-yq9ma.mongodb.net/Koanify?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
