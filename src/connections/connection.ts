// Represent "Connection" to DynamoDB

import * as DynamoDB from "aws-sdk/clients/dynamodb";

export interface Connection {
  readonly documentClient: DynamoDB.DocumentClient;
  readonly client: DynamoDB;
}
