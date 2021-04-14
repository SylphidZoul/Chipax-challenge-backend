const app = require('./src/App')
const { API: { PORT } } = require('./config')

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`)
})
