const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema({
    zip: {
        type: Number,
        required: true
    },   
    cuisine: {
        type: Array,
        required: false 
    },
    movieGenre: {
        type: Array,
        required: false
    },
    streamGenre: {
        type: Array,
        required: false
    },
    liveEventType: {
        type: Array,
        required: false
    }

});

module.exports = Preference = mongoose.model("preference", PreferenceSchema);