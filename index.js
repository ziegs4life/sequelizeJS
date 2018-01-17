const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_test', 'adamziegele', '', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.bulkCreate([{
    firstName: 'John',
    lastName: 'Hancock'
  },
  {
    firstName: 'Adam',
    lastName: 'Ziegele'

  },
  {
    firstName: 'Patrick',
    lastName: 'Star'

  }]);
}).then(users => {
    console.log(users.dataValues)
})
