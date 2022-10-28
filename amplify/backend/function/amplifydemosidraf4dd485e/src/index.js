const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("succesfful"),
  };

  var obj = {
    TableName: "UserEvents",
    Item: {
      userId: "94bcc93e-8451-48c6-9d74-7d3f166eccdb",
      count: 1,
    },
    ReturnConsumedCapacity: "TOTAL",
  };

  try {
    var result = await dynamodb.putItem(obj).promise();
    console.log("result", result);
    //Handle your result here!
  } catch (err) {
    console.log(err);
  }
  return response;
};
