import { RouteInMemoryRepository } from "../infra/route_in_memory.repository"
import { CreateRouteUseCase } from "./create_route.use_case"

describe('CreateRouteUseCase Test', () => {

  it('Should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute({
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    })
    expect(output).toStrictEqual({
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: []
    });
    expect(repository.items).toHaveLength(1)
  })
})