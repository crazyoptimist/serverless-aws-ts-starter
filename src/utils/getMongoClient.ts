import { MongoClient, WriteConcern } from 'mongodb';
import { mongoConfig } from '../config';
import { logger } from './logger';

let mongoClient: MongoClient;

async function init() {
  const { portal, username, password, host, dbname } = mongoConfig;
  const mongoUrl = portal + username + ':' + password + '@' + host + '/' + dbname;
  const mongoConnection = new MongoClient(mongoUrl, {
    retryWrites: true,
    writeConcern: new WriteConcern('majority'),
  });
  try {
    await mongoConnection.connect();
  } catch (e) {
    logger.error(e, 'Mongo connection failed.');
  }
  return mongoConnection;
}

export default function (): Promise<MongoClient> {
  return new Promise(async (resolve, reject) => {
    try {
      if (!mongoClient) {
        mongoClient = await init();
      }
      return resolve(mongoClient);
    } catch (e) {
      logger.error(e, 'Mongo connection failed');
      return reject(e);
    }
  });
}
