const router = require('express').Router();

const postController = require('../controllers/post')

router.get('/',postController.getAll)



module.exports = router