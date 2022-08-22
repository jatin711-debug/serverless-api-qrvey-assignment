const AWS = require('aws-sdk')

AWS.config.update({ region: 'ca-central-1' })

const json2xls = require('json2xls')

const { v4: uuid } = require('uuid')

const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

const tableName = process.env.POSTS_TABLE || 'Data'

const { response } = require('./utils/index.js')

const fs = require('fs')

const s3 = new AWS.S3({
  region: 'ca-central-1',
})

module.exports.sendXLSX = (event, context, callback) => {
  const _id = uuid()
  const data = db
    .scan({
      TableName: tableName,
    })
    .promise()
    .then((res) => res.Items.sort())
    .catch((err) =>
      callback(null, response(err.statusCode, { Error: 'Unable To Get Data' })),
    )
  const xls = json2xls(data)
  fs.writeFileSync(`/tmp/${_id}.xlsx`, xls, 'binary')
  const bucketParams = {
    Bucket: 'johnny-bucket-711',
    Key: `xlsx/${_id}`,
    Body: `/tmp/${_id}.xlsx`,
    ContentType: 'vnd.ms-excel',
  }
  s3.upload(bucketParams, (err, d) => {
    if (err) {
      callback(
        null,
        response(err.statusCode, { Error: 'Error while parsing Data' }),
      )
    }
    callback(null, response(200, { Link: toString(d.Location) }))
  })
}
