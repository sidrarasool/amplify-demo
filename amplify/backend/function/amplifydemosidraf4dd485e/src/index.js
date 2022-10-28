/* Amplify Params - DO NOT EDIT
	API_AMPLIFYDEMOSIDRA_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYDEMOSIDRA_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYDEMOSIDRA_GRAPHQLAPIKEYOUTPUT
	API_AMPLIFYDEMOSIDRA_TASKSTABLE_ARN
	API_AMPLIFYDEMOSIDRA_TASKSTABLE_NAME
	API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_ARN
	API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */ console.log("Loading function");
var AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
  //   console.log(JSON.stringify(event, null, "  "));
  //   console.log("userid", event.Records[0].dynamodb.OldImage.userId.S);
  const userId =
    event.Records[0].eventName === "INSERT"
      ? event.Records[0].dynamodb.NewImage.userId.S
      : event.Records[0].dynamodb.OldImage.userId.S;
  try {
    const getUser = await dynamo
      .get({
        TableName: process.env.API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_NAME,
        Key: {
          id: userId,
        },
      })
      .promise();
    if (Object.keys(getUser).length === 0) {
      const params = {
        TableName: process.env.API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_NAME,
        Item: {
          id: userId,
          count: "1",
        },
      };
      const data = await dynamo.put(params).promise();
    } else {
      let params;
      if (event.Records[0].eventName === "INSERT") {
        params = {
          TableName: process.env.API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_NAME,
          Item: {
            id: userId,
            count: parseInt(getUser.Item.count) + 1,
          },
        };
      } else if (event.Records[0].eventName === "REMOVE") {
        params = {
          TableName: process.env.API_AMPLIFYDEMOSIDRA_USEREVENTSTABLE_NAME,
          Item: {
            id: userId,
            count: parseInt(getUser.Item.count) - 1,
          },
        };
      }
      const data = await dynamo.put(params).promise();
      console.log("Succesful Update");
      console.log("data", data);
    }
  } catch (e) {
    console.log("error", e);
  }
};
