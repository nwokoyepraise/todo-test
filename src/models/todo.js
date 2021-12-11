const todo_model = require('./todo.model');

module.exports.create_todo = async function (user_id, title, description) {
    try {
        return await todo_model.create({ user_id: user_id, title: title, description: description });
    } catch (error) {
        console.error(error);
    }
}

module.exports.update_todo = async function (_id, title, description) {
    try {
        return await todo_model.findOneAndUpdate({ _id: _id},{ title: title, description: description }, {new: true});
    } catch (error) {
        console.error(error);
    }
}

module.exports.get_todo = async function (_id) {
    try {
        return await todo_model.findOne({ _id: _id}).lean();
    } catch (error) {
        console.error(error);
    }
}
