const logErrorStack = require('../LogErrorStack')

class Response {
  static success (res, data = {}, status = 200) {
    return res.status(status).send({
      ok: true,
      status,
      data
    })
  }

  static error (res, err, message = 'Internal server error.', status = 500) {
    logErrorStack(err)

    return res.status(status).send({
      ok: false,
      status,
      data: { message }
    })
  }
}

module.exports = Response
