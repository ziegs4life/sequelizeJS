const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://adamziegele:@localhost:5432/sequelize_test');


// Wire up the body parser
app.use(express.json());

// sequelize.authenticate().then(() => {
//     console.log(‘Connection has been established successfully.’);
//   })
//   .catch(err => {
//     console.error(‘Unable to connect to the database:’, err);
//   });

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

app.get('/', function (require, respond){
    User.findAll().then(user => {
        respond.send(user);

    })
})


// Creates a new user
app.post('/', function (request, response) => {
    // Get the new user
    let name = request.params.name || 'world'
    User.create({
      firstName: name,
      lastName: name
    })

    // Send back the new user
    response.send(user);
})


// app.delete('/', function (require, respond){
//
//
//     })
// })

//creating listener
app.listen(3000, () => {
    console.log('hello! it is working!')

})
