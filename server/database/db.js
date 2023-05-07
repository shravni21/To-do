import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {

    const MONGODB_URI = `mongodb+srv://taifullahansari:a31DxYfVInYpHMHN@cluster0.tivkjon.mongodb.net/`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ');
    })
}

export default Connection;
