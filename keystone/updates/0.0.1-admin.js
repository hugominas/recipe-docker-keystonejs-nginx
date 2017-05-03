var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: process.env.USER_EMAIL || 'admin@keystonejs.com',
        password: process.env.USER_PASSWORD || 'admin',
        canAccessKeystone: true
    }).save(done);

};
