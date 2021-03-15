const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./server/models");
const Role = db.role;
const path = `mongodb+srv://${process.env.ATLAS_URI_USER}:${process.env.ATLAS_URI_PASS}@cluster0.lnnw8.mongodb.net/test?retryWrites=true&w=majority`

db.mongoose
.connect(path, {
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

// simple route
app.get("/", (req, res) => {
  res.json({ message: "test" });
});

// routes
require("./server/routes/auth.routes")(app);
require("./server/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("server is listening at http://%s:%s", host, port);
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