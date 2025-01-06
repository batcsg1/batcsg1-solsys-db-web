//Solar System Database File

//Import required backend modules
import express from 'express';
import sql from 'mssql';
import cors from 'cors';

//Create the express app
const app = express();

//Define the server port
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database configuration
const dbConfig = {
    user: 'sa',
    password: 'Kronos2005',
    server: '192.168.20.100',
    database: 'Solar_System',
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

// Test database connection
sql.connect(dbConfig)
    .then(() => console.log('Connected to SQL Server'))
    .catch(err => console.error('Database connection failed:', err));

// Example API endpoint to query db for data, to respond to the frontend client with, when client makes GET request
app.get('/data', async (req, res) => {
    //Data that app will respond back with
    try {
        const pool = await sql.connect(dbConfig); //Connecting to SQL Server
        const result = await pool.request().query('SELECT * FROM Planets');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server is currently unavailable. Please try again later.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Solar System Database running on http://localhost:${port}`);
});