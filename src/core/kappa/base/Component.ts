import { Element, ALIGNMENT, POSITION, SIZE } from '../interfaces/index';
import Helper from './Helper';

export class Component implements Element {
  identifier: string;
  type: string = 'component';
  title: string;
  subtitle: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;
  url: string;

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.classified = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;
  }
}
