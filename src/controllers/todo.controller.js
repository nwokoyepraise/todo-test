const todo = require('../models/todo');

module.exports.create_todo = async function (body) {
    try {
        let user_id = body.user_id,
            description = body.description,
            title = body.title;

        //create todo
        let data = await todo.create_todo(user_id, title, description);

        return { status: true, data: data };
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't create todo at this moment..." }
    }
}

module.exports.update_todo_details = async function (body) {
    try {
        let user_id = body.user_id,
            todo_id = body.todo_id,
            description = body.description,
            title = body.title;

        let res1 = await todo.get_todo(todo_id);

        if (res1.user_id !== user_id) {
            return { status: false, status_code: 406, message: "user is not owner of todo" }
        }
        //update todo
        let data = await todo.update_todo(todo_id, title, description);

        return { status: true, data: data };
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't update todo at this moment..." }
    }
}