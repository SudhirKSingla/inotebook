const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&directConnection=true&tls=false";
//deprecated
// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("connected to mongo succesfully")
//     })
// }

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(() => 
        console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;