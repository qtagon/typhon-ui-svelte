import { Component } from '../Component';
import { Icon } from './Icon';

export class Message extends Component {
  type: string = 'message';

  protected subtitle: string = '';
  protected icon: Icon;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  constructor(title: string = '', subtitle: string = '') {
    super();
    super.title = title;
    this.subtitle = subtitle;
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
}
