import mongoose from "mongoose";
export const connectDb = (ConnString) => {
    mongoose.connect(ConnString, {
    })

    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));
}
