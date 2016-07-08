#Deploy to heroku
  - https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app

## Folder Structure
```
|-- app
|   |-- controllers
|   |   |-- blog.js
|   |   |-- products.js
|   |   |-- setup
|   |       `-- all_modules.js
|   |       `-- export_app.js
|   |       `-- initialize.js
|   |-- models
|   |   |-- post.js
|   |   `-- user.js
|   |-- views
|   |   |-- admin
|   |   |   `-- posts
|   |   |       |-- edit.jade
|   |   |       |-- index.jade
|   |   |       |-- new.jade
|   |   |-- layouts
|   |   |   `-- application.jade
|   |-- config
|   |   |-- appConfig.js
|   |   |-- locale
|   |        `-- en.js
|   |   |-- config.js
|   |-- helpers
|   |    |-- Redis.js
|   |         `-- api.js  
|   |         `-- setup.js  
|   |    |-- Socket.js
|   |-- public
|   |   |-- javascripts
|   |   |   |-- jquery.js
|   |   |   |-- underscore.js
|   |   |-- stylesheets
|   |        `-- prettyPhoto.css  
|   |-- app.js
|   |-- all_modules.js

```

## Quick Start
  - npm install
  - npm start
  - and go over to http://localhost:3000/ping
