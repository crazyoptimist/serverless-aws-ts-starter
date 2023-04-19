import pino from 'pino';
import { lambdaRequestTracker, pinoLambdaDestination } from 'pino-lambda';

// custom destination formatter
const destination = pinoLambdaDestination();
export const logger = pino(
  {
    // typical pino options
  },
  destination,
);

// call it once at the beginning of your lambda handler
// trackRequest(event, context)
export const trackRequest = lambdaRequestTracker();
