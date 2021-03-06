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

router.put('/update/details', async function (req, res, next) {
    try {
        let body = req.body;

        let data = await todo_controller.update_todo_details(body);
        
        //revert response to user
        base_response.send_response(res, data);

    } catch (error) {
        console.error(error);
    }
});

router.put('/update/status', async function (req, res, next) {
    try {
        let body = req.body;

        let data = await todo_controller.update_todo_status(body);
        
        //revert response to user
        base_response.send_response(res, data);

    } catch (error) {
        console.error(error);
    }
});

router.delete('/delete', async function (req, res, next) {
    try {
        let body = req.body;

        let data = await todo_controller.delete_todo(body);
        
        //revert response to user
        base_response.send_response(res, data);

    } catch (error) {
        console.error(error);
    }
});

router.get('/get_all', async function (req, res, next) {
    try {
        let query = req.query;

        let data = await todo_controller.get_all(query);
        
        //revert response to user
        base_response.send_response(res, data);

    } catch (error) {
        console.error(error);
    }
});


module.exports = router;