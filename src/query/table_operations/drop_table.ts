import * as Metadata from "../../metadata";

import * as DynamoDB from "aws-sdk/clients/dynamodb";

export async function dropTable(metadata: Metadata.Table.Metadata) {
  const res = await metadata.connection.client.deleteTable({ TableName: metadata.name }).promise();
  await metadata.connection.client.waitFor("tableNotExists", { TableName: metadata.name }).promise();

  return res.TableDescription;
}
