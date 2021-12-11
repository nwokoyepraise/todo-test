const todo = require('../models/todo');

module.exports.create_todo = async function (body) {
    try {
        let user_id = body.user_id,
        description = body.description,
        title = body.title;

        //create todo
        let data = await todo.create_todo(user_id, title, description);

        return {status: true, data: data};
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't create todo at this moment..." }
    }
}