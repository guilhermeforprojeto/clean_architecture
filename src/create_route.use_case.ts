import { LatLng, Route } from "./route.entity";

class CreateRouteUseCase {
  execute(input: CreateRouteInput): CreateRouteOutput {
    const route = new Route(input)
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
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[]
}
//S SOLID