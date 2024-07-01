import * as dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import cors, { type CorsOptions } from 'cors'
import routes from './routes'

const app = express()
const port = process.env.PORT || 8080
const isDev = process.env.NODE_ENV !== 'production'
const corsOptions: CorsOptions = {
  origin: '*',
  methods: ['OPTIONS', 'GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: '*',
  optionsSuccessStatus: 200
}

if (isDev) {
  app.set('json spaces', 2)
  app.set('env', 'development')
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.options('*', cors(corsOptions))

routes.forEach(({ route, handler }) => app.use(route, handler))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
