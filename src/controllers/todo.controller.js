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

        if (!res1 || !res1._id) {
            return { status: false, status_code: 404, message: "todo not found" }
        }

        if (res1.user_id !== user_id) {
            return { status: false, status_code: 406, message: "user is not owner of todo" }
        }
        //update todo
        let data = await todo.update_todo_details(todo_id, title, description);

        return { status: true, data: data };
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't update todo at this moment..." }
    }
}

module.exports.update_todo_status = async function (body) {
    try {
        let user_id = body.user_id,
            todo_id = body.todo_id,
            status = body.status?.toLowerCase();

        if (status !== 'new' && status !== 'pending' && status !== 'done') {
            return { status: false, status_code: 406, message: "status invalid" }
        }

        let res1 = await todo.get_todo(todo_id);

        if (!res1 || !res1._id) {
            return { status: false, status_code: 404, message: "todo not found" }
        }

        if (res1.user_id !== user_id) {
            return { status: false, status_code: 401, message: "user is not owner of todo" }
        }
        //update todo
        let data = await todo.update_todo_status(todo_id, status);

        return { status: true, data: data };
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't update todo at this moment..." }
    }
}

module.exports.delete_todo = async function (body) {
    try {
        let user_id = body.user_id,
            todo_id = body.todo_id;

        let res1 = await todo.get_todo(todo_id);

        if (!res1 || !res1._id) {
            return { status: false, status_code: 404, message: "todo not found" }
        }

        if (res1.user_id !== user_id) {
            return { status: false, status_code: 406, message: "user is not owner of todo" }
        }

        //delete todo
        let data = await todo.delete_todo(todo_id);

        if (data.deletedCount != 1) {
            return { status: false, status_code: 500, message: "Oops! Can't delete todo at this moment..." }
        }

        return { status: true, data: { message: 'success' } };
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't delete todo at this moment..." }
    }
}

module.exports.get_all = async function (query) {
    try {
        let user_id = query.user_id,
            page = Number(query.page) || 0;

        let data = await todo.get_todo_all(page)

        return { status: true, data: data };
    } catch (error) {
        console.error(error);
        return { status: false, status_code: 500, message: "Oops! Can't update todo at this moment..." }
    }
}