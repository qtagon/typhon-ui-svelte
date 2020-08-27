import { Component } from '../base/Component';
import type { SIZE } from '../interfaces/index';
import { Icon } from './Icon';

export class Action extends Component {
  type: string = 'action';
  protected icon: Icon;

  constructor(title: string, size: SIZE) {
    super();
    super.title = title;
    super.size = size;
  }

  /**
   *
   * @param {string} title
   */
  public setIcon(title: string = ''): Icon {
    const icon = new Icon(title);
    this.icon = icon;
    return icon;
  }

  /**
   *
   * @param {string} url
   */
  public setUrl(url: string = ''): this {
    this.url = url;
    return this;
  }
}
