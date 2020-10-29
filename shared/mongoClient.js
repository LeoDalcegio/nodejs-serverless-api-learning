const { MongoClient } = require("mongodb");

const config = {
  url:
    "mongodb+srv://Leo-admin:Leo-admin@cluster0.qbagv.mongodb.net/serverless-node-test?retryWrites=true&w=majority",
};

module.exports = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(
      config.url,
      { useNewUrlParser: true },
      (err, mongoConnection) =>
        err
          ? reject(err)
          : resolve({
              client: mongoConnection.db(config.dbName),
              closeConnectionFn: () =>
                setTimeout(() => {
                  mongoConnection.close();
                }, 1000),
              mongoConnection,
            })
    );
  });
