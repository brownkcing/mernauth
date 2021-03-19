const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();


app.use(cors({credentials: true, origin: true}));
app.options("*", cors({credentials: true, origin: true}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./server/models");
const Role = db.role;
const urlm = `mongodb+srv://${process.env.ATLAS_URI_USER}:${process.env.ATLAS_URI_PASS}@cluster0.lnnw8.mongodb.net/test?retryWrites=true&w=majority`
const mongodburi = `mongodb+srv://cyrilmarcus:dbpasswordcavemansp@cluster0.lnnw8.mongodb.net/test?retryWrites=true&w=majority`

db.mongoose
.connect(mongodburi, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
  // require("./server/routes/testRoutes.js")(app);
  // require("./server/routes/auth.routes.js")(app);
  require("./server/routes/user.routes.js")(app);



  app.get('/test1', (req, res) => {
    res.status(200).json({api: 'version 1'})
  })


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}