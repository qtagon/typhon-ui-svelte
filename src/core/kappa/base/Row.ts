import { ALIGNMENT, Element, POSITION, SIZE } from '../interfaces/index';
import { Container } from './Container';
import Helper from './Helper';

export class Row implements Element {
  identifier: string;
  type: string = 'row';
  title: string;
  subtitle: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;
  url: string;

  protected containers: Array<Container>;
  private icontainers: Map<string, Container>;

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.classified = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;
    this.containers = [];
    this.icontainers = new Map();
  }

  public getContainers(): Array<Container> {
    return this.containers;
  }

  public setContainer(identifier: string = ''): Container {
    const container = new Container(identifier);
    this.containers.push(container);
    this.icontainers.set(container.identifier, container);
    return container;
  }
}
