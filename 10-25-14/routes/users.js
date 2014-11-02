var express = require('express');
var router  = express.Router();
var _       = require('underscore');

//users collection
var users = [];

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('users', {users: users, _ : _});
});

/* GET users signup form. */
router.get('/sign-up', function(req, res) {
    res.render('sign_up');
});

/*sign up page*/
router.post('/sign-up', function(req, res) {
    var user = req.body;
    user.created = new Date();

    users.push(user);
    console.log(users);

//    res.render('users', {users: users, _ : _});
    res.render('message', {
        title   : 'Users',
        message : 'Form Submitted Successfully !!',
        link    : '/users'
    });
});

module.exports = router;
