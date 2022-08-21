'use strict'
const AWS = require('aws-sdk')
AWS.config.update({ region: 'ca-central-1' })
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const tableName = process.env.POSTS_TABLE || 'Data'
const { response, sortByDate } = require('./utils/index.js')

// // Get all posts
module.exports.getAllData = async (event, context, callback) => {
  return await db
    .scan({
      TableName: tableName,
    })
    .promise()
    .then((res) => {
      callback(null, response(200, res.Items.sort(sortByDate)))
    })
    .catch((err) => callback(null, response(err.statusCode, err)))
}

// // Get Single Data
module.exports.getData = async (event, context, callback) => {
  const id = event.pathParameters.id
  const params = {
    Key: {
      id: id,
    },
    TableName: tableName,
  }

  return await db
    .get(params)
    .promise()
    .then((res) => {
      if (res.Item) callback(null, response(200, res.Item))
      else callback(null, response(404, { error: 'data not found' }))
    })
    .catch((err) => callback(null, response(err.statusCode, err)))
}
