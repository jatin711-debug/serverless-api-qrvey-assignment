// 'use strict'
// const AWS = require('aws-sdk')
// AWS.config.update({ region: 'ca-central-1' })

// const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
// const { v4: uuid } = require('uuid')
// const tableName = process.env.POSTS_TABLE || 'Data'

// function response(statusCode, message) {
//   return {
//     statusCode: statusCode,
//     body: JSON.stringify(message),
//   }
// }
// function sortByDate(a, b) {
//   if (a.createdAt > b.createdAt) {
//     return -1
//   } else return 1
// }
// module.exports.createData = async (event, context, callback) => {
//   const { body, httpMethod } = event
//   if (httpMethod !== 'POST') {
//     throw new Error(
//       `Method only accepts POST method, you tried: ${httpMethod} method.`,
//     )
//   }
//   console.log('received:', JSON.stringify(event))
//   const reqBody = JSON.parse(body)
//   if (reqBody === undefined || reqBody === null) {
//     return callback(
//       null,
//       response(400, {
//         error: 'req must have data and that must not be empty',
//       }),
//     )
//   }

//   const data = {
//     id: uuid(),
//     data: reqBody,
//   }
//   return await db
//     .put({
//       TableName: tableName,
//       Item: data,
//     })
//     .promise()
//     .then(() => {
//       callback(null, response(201, data))
//     })
//     .catch((err) => response(null, response(err.statusCode, err)))
// }

// // Get all posts
// module.exports.getAllData = async (event, context, callback) => {
//   return await db
//     .scan({
//       TableName: tableName,
//     })
//     .promise()
//     .then((res) => {
//       callback(null, response(200, res.Items.sort(sortByDate)))
//     })
//     .catch((err) => callback(null, response(err.statusCode, err)))
// }

// // Get Single Data
// module.exports.getData = async (event, context, callback) => {
//   const id = event.pathParameters.id
//   const params = {
//     Key: {
//       id: id,
//     },
//     TableName: tableName,
//   }

//   return await db
//     .get(params)
//     .promise()
//     .then((res) => {
//       if (res.Item) callback(null, response(200, res.Item))
//       else callback(null, response(404, { error: 'data not found' }))
//     })
//     .catch((err) => callback(null, response(err.statusCode, err)))
// }

// // // Update a post

// module.exports.updateData = async (event, context, callback) => {
//   const id = event.pathParameters.id
//   const reqBody = JSON.parse(event.body)

//   const params = {
//     TableName: tableName,
//     Key: id,
//     Item: {
//       id: id,
//       data: reqBody,
//     },
//   }
//   return await db
//     .put(params)
//     .promise()
//     .then((res) => {
//       console.log(res)
//       callback(null, response(200, { message: 'Data updated successfully' }))
//     })
//     .catch((err) => callback(null, response(err.statusCode, err)))
// }

// // // Delete a post
// module.exports.deleteData = async (event, context, callback) => {
//   const id = event.pathParameters.id
//   const params = {
//     Key: {
//       id: id,
//     },
//     TableName: tableName,
//   }
//   return await db
//     .delete(params)
//     .promise()
//     .then(() =>
//       callback(null, response(200, { message: 'Data deleted successfully' })),
//     )
//     .catch((err) => callback(null, response(err.statusCode, err)))
// }
