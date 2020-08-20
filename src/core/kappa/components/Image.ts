import { Component } from '../base/Component';
import type { SIZE } from '../interfaces/index';

export class Image extends Component {
  type: string = 'image';

  constructor(url: string, size: SIZE) {
    super();
    super.url = url;
    super.size = size;
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
