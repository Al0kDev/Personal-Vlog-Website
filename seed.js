const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/userModel');
const user = require('./models/userModel');
dotenv.config();

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'Alok@1234';

const seedAdmin = async (req,resp)=>{
    try{
        console.log("Connecting to dataabase...............");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected Successfully");

        const existingAdmin = await User.findOne({username: ADMIN_USERNAME});

        if(existingAdmin){
            console.log("Admin user already exist. no action taken");
            return;
        }

        console.log("Admin user not found. creating one.......");
        const adminUser = new user({
            username: ADMIN_USERNAME,
            password: ADMIN_PASSWORD,
        })

        await adminUser.save();

        console.log("-------------------------------");
        console.log("Admin user created successfully");
        console.log(`Username: ${ADMIN_USERNAME}`);
        console.log(`Password: ${ADMIN_PASSWORD}`);
        console.log("-------------------------------")
    }catch(error){
        console.log('error during admin user seeding', error);
    }finally{
        console.log("Disconnecting database...........");
        await mongoose.disconnect();
        console.log("Disconnected database.");
    }

}

seedAdmin();