import { Element, ALIGNMENT, POSITION, SIZE } from '../interfaces/index';
import Helper from './Helper';

export class Component implements Element {
  identifier: string;
  type: string = 'component';
  title: string;
  subtitle: string;
  description: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;
  url: string;
  style: string;

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.classified = '';
    this.description = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;
    this.style = '';
  }

  public setAlignment(alignment: ALIGNMENT = ALIGNMENT.NONE): this {
    this.alignment = alignment;
    return this;
  }

  public setStyle(style: string = ''): this {
    this.style = style;
    return this;
  }

  public setClassified(classified: string): this {
    this.classified = classified;
    return this;
  }

  public setTitle(title: string): this {
    this.title = title;
    return this;
  }
}
