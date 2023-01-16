export type LatLng = { lat: number, lng: number }

export type RouteProps = {
  title: string,
  startPosition: LatLng,
  endPosition: LatLng,
  points: LatLng[]

}

export class Route {
  constructor(public props: RouteProps) { }

  private set title(value: string) {
    this.props.title = value

  }

}

const rota = new Route({
  title: 'minha rota',
  startPosition: { lat: 15, lng: 15 },
  endPosition: { lat: 20, lng: 20 },
  points: [
    { lat: 15, lng: 15 },
    { lat: 15, lng: 15 },
  ]
})