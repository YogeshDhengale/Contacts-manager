const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


const contactSchema = new Schema({
    name: {
        type: String,
        required: true
       
    },

    designation: {
        type: String,
        required: true
        
    },

    company: {
        type: String,
        required: true
        
    },

    industry: {
        type: String,
        required: true,
        
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: Number,
        required: true,
        unique: true
    },

    country: {
        type: String,
        required: true
        
    },

})



module.exports = mongoose.model('User', userSchema)

module.exports  = mongoose.model('contacts' , contactSchema)
