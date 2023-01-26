import express, { Express, Request, Response } from 'express'
import { CreateRouteUseCase } from '../../../application/create_route.use_case'
import { RouteInMemoryRepository } from '../../db/route_in_memory.repository'

const app: Express = express()

const routeRepo = new RouteInMemoryRepository();
app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output)
})