const router = require('express').Router();
const todo_controller = require('../controllers/todo.controller');
let base_response = require('./base_response')

router.post('/create', async function (req, res, next) {
    try {
        let body = req.body;

        let data = await todo_controller.create_todo(body);
        
        //revert response to user
        base_response.send_response(res, data);

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;