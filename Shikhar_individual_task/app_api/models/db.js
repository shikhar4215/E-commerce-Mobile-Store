//const { Callbacks } = require('jquery');
const mongoose=require('mongoose');

const dburi1='mongodb+srv://admin:admin@task4.7vnro.mongodb.net/Mobiledb?retryWrites=true&w=majority';

mongoose.connect(dburi1,{dbName:'Mobiledb'});

mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connected to ${dburi1}`);
});
mongoose.connection.on('error',err=>{
    console.log(`Mongoose connection error:`,err);
});
mongoose.connection.on('disconnected',()=>{
    console.log(`Mongoose disconnected through ${msg}`);
    Callback();
});

const gracefulShutdown = (msg,Callback)=>{
    mongoose.connection.close( ()=>{
        console.log(`Mongoose disconnected through ${msg}`);
        Callback();
    });
};

process.once('SIGRUS2',()=>{
    gracefulShutdown('nodemon restrat',()=>{
        process.kill(process.pid,'SIGRUS2');
    });
});

process.on('SIGINT',()=>{
    gracefulShutdown('app termination',()=>{
        process.exit(0);
    });
});

process.on('SIGTERM',()=>{
    gracefulShutdown.apply('Heroku app termonation',()=>{
        process.exit(0);
    });
});
require(`./mobile`);