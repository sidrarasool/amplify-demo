/* Amplify Params - DO NOT EDIT
    API_AMPLIFYDEMOSIDRA_GRAPHQLAPIENDPOINTOUTPUT
    API_AMPLIFYDEMOSIDRA_GRAPHQLAPIIDOUTPUT
    API_AMPLIFYDEMOSIDRA_GRAPHQLAPIKEYOUTPUT
    API_AMPLIFYDEMOSIDRA_TASKSTABLE_ARN
    API_AMPLIFYDEMOSIDRA_TASKSTABLE_NAME
    API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_ARN
    API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_NAME
    AUTH_AMPLIFYDEMOSIDRAB7F92B99_USERPOOLID
    ENV
    REGION
Amplify Params - DO NOT EDIT */
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach((record) => {
    console.log(record);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
  });
  try {
    var tableName = "UserEvents";
    dynamo.put(
      {
        TableName: tableName,
        Item: {
          userId: "38400f17-b960-49eb-9fd5-577310707f9e",
          count: 1,
        },
      },
      function (err, data) {
        if (err) {
          console.log("Error putting item into dynamodb failed: " + err);
          context.done("error");
        } else {
          console.log("great success: " + JSON.stringify(data, null, "  "));
          context.done("Done");
        }
      }
    );
    var response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data entered successfully",
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
  // return response;
  return Promise.resolve("Successfully processed DynamoDB record");
};
//   let body;
//   let statusCode = 200;
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   try {
//     switch (event.eventName) {
//       case "INSERT":
//       case "REMOVE":
//       default:
//         throw new Error(`Unsupported route: "${event.routeKey}"`);
//     }
//   } catch (err) {
//     statusCode = 400;
//     body = err.message;
//   } finally {
//     body = JSON.stringify(body);
//   }
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   event.Records.forEach((record) => {
//     console.log(record);
//     console.log(record.eventName);
//     console.log("DynamoDB Record: %j", record.dynamodb);
//   });
//   return Promise.resolve("Successfully processed DynamoDB record");
