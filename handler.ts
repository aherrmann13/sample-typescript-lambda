import { Handler, Context, Callback } from 'aws-lambda'

interface BeaconResponse {
  statusCode: number,
  body: string
}

const beacon: Handler = (event: any, context: Context, callback: Callback) => {
  const response: BeaconResponse = {
    statusCode: 200,
    body: JSON.stringify({
      "gondor calls for aid" : "and rohan will answer"
    })
  }

  callback(undefined, response);
}

export { beacon }