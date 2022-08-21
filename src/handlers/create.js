'use strict'

const AWS = require('aws-sdk')
AWS.config.update({ region: 'ca-central-1' })
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const { v4: uuid } = require('uuid')
const tableName = process.env.POSTS_TABLE || 'Data'
const { response } = require('./utils/index.js')

module.exports.createData = async (event, context, callback) => {
  const { body, httpMethod } = event
  if (httpMethod !== 'POST') {
    throw new Error(
      `Method only accepts POST method, you tried: ${httpMethod} method.`,
    )
  }
  console.log('received:', JSON.stringify(event))
  const reqBody = JSON.parse(body)
  if (reqBody === undefined || reqBody === null) {
    return callback(
      null,
      response(400, {
        error: 'req must have data and that must not be empty',
      }),
    )
  }

  const data = {
    id: uuid(),
    data: reqBody,
  }
  return await db
    .put({
      TableName: tableName,
      Item: data,
    })
    .promise()
    .then(() => {
      callback(null, response(201, data))
    })
    .catch((err) => response(null, response(err.statusCode, err)))
}
