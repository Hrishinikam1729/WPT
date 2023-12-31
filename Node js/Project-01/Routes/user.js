const express = require('express');
const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handleUserById, handleDeleteuserById, handleCreateUserById, } = require('../Controllers/user');


// Rest API
router.route('/').get(handleGetAllUsers).post(handleCreateUserById);

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUserById)
    .post(handleCreateUserById)
    .delete(handleDeleteuserById);