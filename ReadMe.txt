
############################################################
# Shows Most of the Functionality using Mongoose
############################################################

# initialize node project
$ npm init -y
# install project dependency
$ npm i mongoose dotenv

## Create/edit user schema
$ mkdir schema
$ touch schema/User.js

# create/edit env file
$ touch .env

## the file should contains:
ATLAS_URL=mongodb+srv://<user>:<pass>@<cluster.name>.mongodb.net/testdb?retryWrites=true&w=majority


# install develop-env dependency (nodemon will refresh each change and re-run)
$ npm i --save-dev nodemon


####  RUN #########
nodemon script.js
