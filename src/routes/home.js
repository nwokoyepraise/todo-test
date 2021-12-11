const router = require('express').Router();
const base_response = require('./base_response');

module.exports = router.get('', async function (req, res) {
    try {

        return base_response.send_response(res, { status: true, data: { message: 'server active!' } });

    } catch (error) {
        console.error(error);
    }
});