- Because of "babel --help" not working, we need to use "./node_modules/.bin/babel --help" instead
- Instead of "dev": "NODE_ENV=development nodemon" will give "NODE_ENV command not found 
  ,use "set NODE_ENV=development&&nodemon" instead