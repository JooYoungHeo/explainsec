// let movieData = {
//     "year" : 2016,
//     "title" : "Doctor Strange",
//     "info" : {
//         "directors" : [
//             "Scott Derrickson"
//         ],
//         "release_date" : "2016-10-26T00:00:00Z",
//         "rating" : 8.88,
//         "genres" : [
//             "Action",
//             "Adventure",
//             "Fantasy"
//         ],
//         "running_time_secs" : 6900,
//         "actors" : [
//             "Benedict Cumberbatch",
//             "Rachel McAdams",
//             "Tilda Swinton"
//        ]
//     }
// };

// let dynamoClient = new AWS.DynamoDB.DocumentClient();
// let params = {
//     TableName: 'Movies',
//     Item: {
//         year: movieData.year,
//         title: movieData.title,
//         info: movieData.info
//     }
// };

// dynamoClient.put(params, (err, data) => {
//     if (err) console.error("Unable to add movie - %s. Error Log: %s", movieData.title, JSON.stringify(err, null, 2));
//     else console.log("PutItem succeeded: %s", movieData.title);
// });

let dynamoClient = new AWS.DynamoDB.DocumentClient();
let params = {
    TableName: 'Movies'
};

dynamoClient.scan(params, (err, data) => {
    if (err) console.error("Unable to read movie - Error Log: %s", JSON.stringify(err, null, 2));
    else {
        data.Items.forEach(item => {
            console.log(item);
        });
    }
});