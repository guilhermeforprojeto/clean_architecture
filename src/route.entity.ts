export type LatLng = { lat: number, lng: number }

export type RouteProps = {
  title: string,
  startPosition: LatLng,
  endPosition: LatLng,
  points?: LatLng[]

}

export class Route {
  public props: Required<RouteProps>
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || []
    }
  }
  updateTitle(title: string) {
    this.title = title
    // mudar para maiusculo
    // valor alguns caracteres
    // validações 
    // Vulgo as regras de nedógio
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    // mudar para maiusculo
    // valor alguns caracteres
    // validações 
    // Vulgo as regras de nedógio
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
    // mudar para maiusculo
    // valor alguns caracteres
    // validações 
    // Vulgo as regras de nedógio
  }

  get title() {
    return this.props.title
  }
  private set title(value: string) {
    this.props.title = value

  }

  get startPosition() {
    return this.props.startPosition
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value

  }


  get endPosition() {
    return this.props.endPosition
  }
  private set endPosition(value: LatLng) {
    this.props.endPosition = value
  }


  get points() {
    return this.props.points
  }
  private set points(value: LatLng[]) {
    this.props.points = value
  }

}