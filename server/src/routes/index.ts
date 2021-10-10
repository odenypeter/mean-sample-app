import { Router } from 'express'

import todoRouter from './todo.routes'

const appRouter = Router()
appRouter.use('/todos', todoRouter)

export default appRouter
