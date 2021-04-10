require('dotenv').config()

module.exports = {
  API: {
    PORT: process.env.PORT || 3004,
    ENV: process.env.NODE_ENV || 'production',
    SERVICES: {
      RICK_AND_MORTY_API: 'https://rickandmortyapi.com/api/'
    }
  }
}
