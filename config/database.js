const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to mongodb ${db.name} at ${db.host} on ${db.port}`)
})