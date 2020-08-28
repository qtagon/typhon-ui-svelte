import { Component } from '../Component';
import { SIZE } from '../enums';

export class Image extends Component {
  type: string = 'image';
  url: string = '';

  constructor(url: string, size: SIZE = SIZE.NONE) {
    super();
    super.size = size;
    this.url = url;
    this.placeholder = false;
  }
}
