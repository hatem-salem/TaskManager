const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: {
        required: [true, "must provide name"],
        type: String,
        trim: true,
        maxlength: [20, "name must be less than 20 characters"]
    },
    completed: { required: true, type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);