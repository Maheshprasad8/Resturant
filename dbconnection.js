import mongoose from 'mongoose';

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "Restaurant", // Fixed typo in "Restaurant"
    })
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("An error occurred while connecting to the database:", err.message);
    });
};
