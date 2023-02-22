import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class CreateRouteUseCase {

  constructor(private routeRepo: RouteRepositoryInterface) {

  }

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input)
    await this.routeRepo.insert(route);
    return route.toJSON();
    //operação em cima das entidades
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[]
}
type CreateRouteOutput = {
  id: string,
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[]
}
//S SOLID