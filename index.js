const app = require('./app')
const { API: PORT } = require('./config')

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`)
})
