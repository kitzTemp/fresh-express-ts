import exp from 'express'

import { page } from './src/route'
import { port } from './src/port'

let app: exp.Application = exp()

page(app, __dirname)
port(1981, app)