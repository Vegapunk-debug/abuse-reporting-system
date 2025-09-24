const express = require('express');
const {addUser, getUser, updateUser, deleteUser, Login} = require("../controllers/userController");

const router = express.Router();

router.post('/addUser', addUser);
router.get('/getUser', getUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.post('/Login', Login);

module.exports = router;