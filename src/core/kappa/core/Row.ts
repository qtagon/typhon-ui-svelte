import { Container } from './Container';
import { Component } from '.';

export class Row extends Component {
  type: string = 'row';

  private containers: Array<Container>;
  private icontainers: Map<string, Container>;

  constructor(identifier: string = '') {
    super();
    super.identifier = identifier;
    this.containers = [];
    this.icontainers = new Map();
  }

  /**
   * Get all containers of row
   */
  public getContainers(): Array<Container> {
    return this.containers;
  }

  /**
   *
   * @param {string} identifier
   */
  public setContainer(identifier: string = ''): Container {
    const container = new Container(identifier);
    this.containers.push(container);
    this.icontainers.set(container.identifier, container);
    return container;
  }

  /**
   * Get container row
   * @param {string} identifier
   */
  public onContainer(identifier: string = ''): Container {
    const container = this.icontainers.get(identifier);
    return container;
  }
}
