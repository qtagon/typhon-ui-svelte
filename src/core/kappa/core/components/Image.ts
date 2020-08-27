import { Component } from '../Component';
import type { SIZE } from '../enums/index';

export class Image extends Component {
  type: string = 'image';

  constructor(url: string, size: SIZE) {
    super();
    super.url = url;
    super.size = size;
  }
}
