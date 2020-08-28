import { Component } from '../Component';
import { SIZE } from '../enums/index';
import { Icon } from './Icon';
import { Eventable } from '../mixins';

export class Button extends Eventable(Component) {
  type: string = 'button';
  protected icon: Icon;

  constructor(title: string, size: SIZE = SIZE.NONE) {
    super();
    super.title = title;
    super.size = size;
  }

  /**
   *
   * @param {string} url
   */
  public setIcon(title: string = ''): Icon {
    const icon = new Icon(title);
    this.icon = icon;
    return icon;
  }
}
