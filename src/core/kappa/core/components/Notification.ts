import { Component } from '../Component';
import { SIZE } from '../enums/index';
import { Image } from './Image';
import { Indicator } from './Indicator';
import { Actionable } from '../mixins';

export class Notification extends Actionable(Component) {
  type: string = 'notification';
  protected image: Image;
  protected indicator: Indicator;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   * @param {string} description
   */
  constructor(title: string, subtitle: string, description: string) {
    super();
    super.title = title;
    super.subtitle = subtitle;
    super.description = description;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setImage(url: string = '', size: SIZE = SIZE.NONE): Image {
    const image = new Image(url, size);
    this.image = image;
    return image;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setIndicator(): Indicator {
    const indicator = new Indicator();
    this.indicator = indicator;
    return indicator;
  }
}
