import express, { Request, Response } from 'express'
import router from './router'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use(router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server is starting... at 5000 by dev server'))