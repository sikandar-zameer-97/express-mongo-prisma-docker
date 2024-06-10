console.log('*******************************************************************')
conn = new Mongo();
db = conn.getDB(process.env.MONGO_INITDB_DATABASE);

db.getSiblingDB('admin').auth(
  process.env.MONGO_INITDB_ROOT_USERNAME,
  process.env.MONGO_INITDB_ROOT_PASSWORD
);
db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: ["readWrite"],
});
