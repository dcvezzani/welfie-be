// #############################################

// Create db migrations and populate the database:
//
// knex-migrate generate create_subscribers
// knex-migrate pending
// knex-migrate list
// knex-migrate up
//
// ls migrations#<{(|.js | xargs mvim -p

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./dev.sqlite3"
  }, 
  useNullAsDefault: true
});

var bookshelf = require('bookshelf')(knex);

var Message = bookshelf.Model.extend({
  tableName: 'messages'
});

// Usage example: 
//
// var user = new User({name: "Bob", description: "Somebody new"});
// user.save().then((model) => {
//   console.log("saved user: " + JSON.stringify(model));
// })

// #############################################

const dbQueries = {
  index_messages: () => {
    // Message.where({month: month_id}).fetchAll().then((collection) => {
    return Message.fetchAll().then((collection) => {
      return {action: 'index', type: 'Message', collection: collection};
    });
  }, 
  show_message: (id) => {
    return Message.where({id: id}).fetch().then((model) => {
      return {action: 'show', type: 'Message', model: model};
    });
  }, 
  create_message: (message) => {
    console.log(message);
    return new Message().save(message).then((model) => {
      return {action: 'create', type: 'Message', model: model};
    })
  }
}


module.exports = dbQueries

