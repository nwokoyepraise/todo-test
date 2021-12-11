const todo_model = require('./todo.model');

module.exports.create_todo = async function (user_id, title, description) {
    try {
        return await todo_model.create({ user_id: user_id, title: title, description: description });
    } catch (error) {
        console.error(error);
    }
}

