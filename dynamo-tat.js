let AWS = require('aws-sdk');

AWS.config.update({
    region: 'ap-northeast-2',
    endpoint: 'https://dynamodb.ap-northeast-2.amazonaws.com'
});

// let dynamoDb = new AWS.DynamoDB();

// let params = {
//     TableName : "Movies",
//     KeySchema: [       
//         { AttributeName: "year", KeyType: "HASH"},  //Partition key
//         { AttributeName: "title", KeyType: "RANGE" }  //Sort key
//     ],
//     AttributeDefinitions: [       
//         { AttributeName: "year", AttributeType: "N" }, // N -> 숫자
//         { AttributeName: "title", AttributeType: "S" } // S -> 문자열
//     ], // BOOL (부울), B (이진수), S (날짜 문자열), type + S (집합) ex) NS (숫자집합)
//     ProvisionedThroughput: {       
//         ReadCapacityUnits: 10, // 초당 최대 40KB strongly read & 초당 최대 80KB eventually read
//         WriteCapacityUnits: 10 // 초당 최대 10KB write
//     } // strong read -> 최신 업데이트 반영 / eventually -> 최근 작업 결과 반영 안될 수 있음
// };

// dynamoDb.createTable(params, (err, data) => {
//     if (err) console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     else console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
// });

let movieData = {
    "year" : 2016,
    "title" : "Doctor Strange",
    "info" : {
        "directors" : [
            "Scott Derrickson"
        ],
        "release_date" : "2016-10-26T00:00:00Z",
        "rating" : 8.88,
        "genres" : [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "running_time_secs" : 6900,
        "actors" : [
            "Benedict Cumberbatch",
            "Rachel McAdams",
            "Tilda Swinton"
       ]
    }
};

let dynamoClient = new AWS.DynamoDB.DocumentClient();
let params = {
    TableName: 'Movies',
    Item: {
        year: movieData.year,
        title: movieData.title,
        info: movieData.info
    }
};

dynamoClient.put(params, (err, data) => {
    if (err) console.error("Unable to add movie - %s. Error Log: %s", movieData.title, JSON.stringify(err, null, 2));
    else console.log("PutItem succeeded: %s", movieData.title);
})