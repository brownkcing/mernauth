import { MongoClient } from "mongodb";


const path = `mongodb+srv://${process.env.ATLAS_URI_USER}:${process.env.ATLAS_URI_PASS}@cluster0.lnnw8.mongodb.net/test?retryWrites=true&w=majority`

function createClient() {
  const client = new MongoClient(
    path,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      console.log("Database Connected");
    }
  );

  
  client.usersCollection = function () {
    return this.db("test").collection("users");
  };

  return client;
}

export { createClient };