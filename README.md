# welfie-be

### Basic set up and start
```
npm install
npm start
```

With debug
```
DEBUG=welfie-be.* npm start
```

### Restful endpoints

#### index
```
GET /api/messages


```

#### show
```
GET /api/messages/:id
GET /api/messages/12
```

#### create
```
POST /api/messages
```

Postman sample calls: https://www.getpostman.com/collections/d7a751730038a993d46b

![](https://cl.ly/2Q0T3q2x0c43/Pasted_Image_1_24_18__11_34_PM.png)


### Tasks

#### Pending

* set up nginx server so that backend and frontend exist in the same domain to avoid cross-site issues
  * map backend routes
  * map frontend routes (static)
* install nginx on remote host

#### Done

* create express server
* create restful routes
* create models
* create migrations and migration scripts
* create seed data
* create repository
* document setup and running instructions

#### ToDo

* create vagrant script to set up on host
* check on error handling
* add input validation to RESTful routes
* look into pm2, upstart or god to ensure that nginx comes back up if it crashes

### Resources

#### Database, ORM
* http://knexjs.org
* http://perkframework.com/v1/guides/database-migrations-knex.html
* https://github.com/stympy/faker
* http://bookshelfjs.org/

#### RESTful practices
* http://restfulrouting.com
* https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
* https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

#### Node Express
* https://expressjs.com/en/starter/generator.html
* http://expressjs.com/en/guide/error-handling.html
* https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
* https://github.com/remy/nodemon
* http://expressjs.com/en/guide/routing.html
* https://www.hacksparrow.com/form-handling-processing-in-express-js.html

