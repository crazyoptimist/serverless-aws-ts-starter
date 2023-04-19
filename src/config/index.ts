export const mongoConfig = {
  portal: process.env.MONGO_PORTAL || 'mongodb://',
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  host: process.env.MONGO_HOST || 'localhost:27017',
  dbname: 'default',
};
