require('dotenv').config()

module.exports = {
  API: {
    PORT: process.env.PORT || 3004,
    ENV: process.env.NODE_ENV || 'production'
  }
}
