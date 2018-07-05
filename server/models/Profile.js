const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const ProfileSchema = new Schema({
    //creating a relationship
    user : {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle : {
        type: String,
        required: true,
        max:40
    },
    company: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    bio: {
        type: String,
    },
    githubusername: {
        type: String,
    },
    social: {
        youtube: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,

        },
        linkedin: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);