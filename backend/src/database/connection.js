import sql from 'mssql'
const dbSettings = {
    user: 'sa',
    password: 'iancho',
    server: 'DESKTOP-4U4SQR5\\SQLEXPRESSIAN',
    database: 'database',
    stream: false,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }    
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error)
    {
        console.log(error)
    }
}

export {sql}


const mongoose = require("mongoose");


export async function getConnectionMongo(){
        try {
            const pool =  mongoose.connect("mongodb://localhost:27017/slimFit", {
                useNewUrlParser: true,
                useUnifiedTopology: true
                });
            return pool
        } catch (error)
        {
            console.log(error)
        }
    }