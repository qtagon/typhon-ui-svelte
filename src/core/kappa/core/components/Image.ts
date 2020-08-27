import { Component } from '../Component';
import type { SIZE } from '../enums/index';

export class Image extends Component {
  type: string = 'image';
  placeholder: boolean = false;

  constructor(url: string, size: SIZE) {
    super();
    super.url = url;
    super.size = size;
    this.placeholder = false;
  }

  public setPlaceholder(enabled: boolean = false): this {
    this.placeholder = enabled;
    return this;
  }
}
