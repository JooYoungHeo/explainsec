let AWS = require('aws-sdk');

AWS.config.update({
    region: 'ap-northeast-2',
    endpoint: 'https://dynamodb.ap-northeast-2.amazonaws.com'
});

let dynamoDb = new AWS.DynamoDB();

let params = {
    TableName : "Movies",
    KeySchema: [       
        { AttributeName: "year", KeyType: "HASH"},  //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamoDb.createTable(params, (err, data) => {
    if (err) console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    else console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
});