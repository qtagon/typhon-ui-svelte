import { Component } from '../Component';
import { Icon } from './Icon';
import { Eventable } from '../mixins';

export class Option extends Eventable(Component) {
  type: string = 'option';
  public icon: Icon;

  constructor(title: string) {
    super();
    super.title = title;
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
