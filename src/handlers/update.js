// // // Update a post
'use strict'
const AWS = require('aws-sdk')
AWS.config.update({ region: 'ca-central-1' })
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const tableName = process.env.POSTS_TABLE || 'Data'
const { response } = require('./utils/index.js')
module.exports.updateData = async (event, context, callback) => {
  const id = event.pathParameters.id
  const reqBody = JSON.parse(event.body)
  const params = {
    TableName: tableName,
    Key: id,
    Item: {
      id: id,
      data: reqBody,
    },
  }
  return await db
    .put(params)
    .promise()
    .then((res) => {
      console.log(res)
      callback(null, response(200, { message: 'Data updated successfully' }))
    })
    .catch((err) => callback(null, response(err.statusCode, err)))
}
