'use strict'
const AWS = require('aws-sdk')
AWS.config.update({ region: 'ca-central-1' })

const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const tableName = process.env.POSTS_TABLE || 'Data'
const { response } = require('./utils/index.js')

module.exports.deleteData = async (event, context, callback) => {
  const id = event.pathParameters.id
  const params = {
    Key: {
      id: id,
    },
    TableName: tableName,
  }
  return await db
    .delete(params)
    .promise()
    .then(() =>
      callback(null, response(200, { message: 'Data deleted successfully' })),
    )
    .catch((err) => callback(null, response(err.statusCode, err)))
}
