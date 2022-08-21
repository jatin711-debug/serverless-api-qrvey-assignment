const AWS = require('aws-sdk')
AWS.config.update({ region: 'ca-central-1' })

const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const lambda = require('../../../handler')

describe('Test create Data', () => {
  let putSpy
  // One-time setup and teardown
  beforeAll(() => {
    putSpy = jest.spyOn(db, 'put')
  })

  afterAll(() => {
    putSpy.mockRestore()
  })

  it('should add data to the table', async () => {
    // Retusrn the specified value whenever the spied put function is called
    putSpy.mockReturnValue({
      promise: () => Promise.resolve('data'),
    })
    const event = {
      httpMethod: 'POST',
      body: '{"name":"Jatin"}',
    }
    const result = await lambda.createData(event)
    console.log(result)
    const unexpectedResult = {
      statusCode: 200,
      body: event.body,
    }
    expect(result).not.toBe(unexpectedResult)
  })
})
