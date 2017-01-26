# The following are the commands I used to get the initial setup
# but is un-needed for this project because it has already been done
npm install express-generator -g
express demoChat
cd demoChat
npm install
npm install sqlite3 --save


# The Server is now ready, you can start it using the command
npm install    # This downloads node modules from https://www.npmjs.com/ and
               # installs them in the node_modules folder
npm start      # This opens the package.json and runs the node executable with
               # the value of scripts.start as an argument.  You could also 
               # accomplish this by using the command `node /bin/www` or 
               # `node your-app-here.js`

# open browser to http://127.0.0.1:3000/

# The following paths are important
\        # where your app.js and database.sql3 files are stored
\bin\    # holds www script file which controls port bindings and debug settings
\public\ # where client-side files go
\routes\ # where API calls are defined
\views\  # where HTML templates are stored See: 
         #   http://jade-lang.com/reference/plain-text/
         # If you do not want to use HTML templating (jade) you can store HTML 
         # in \public\

