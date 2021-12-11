const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todo = new schema({
    user_id: {
        type: String,
        required: [true, 'user_id required'],
        ref: "User"
    },
    title: {
        type: String,
        required:[true, 'title required']
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'new'
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("todo", todo, "todo");