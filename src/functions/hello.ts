import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { mongoConfig } from '../config';
import { logger, trackRequest } from '../utils/logger';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  trackRequest(event, context);

  logger.info(mongoConfig, 'Printing mongo config.');

  const response = {
    statusCode: 200,
    body: 'Hello, world!',
  };
  return response;
};
