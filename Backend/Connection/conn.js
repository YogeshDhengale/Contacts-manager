const MongoClient = require('mongodb').MongoClient;

const connectDB = () => {

    const uri = process.env.uri
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to MongoDB Atlas')
        }
        
    })
}

module.exports = connectDB