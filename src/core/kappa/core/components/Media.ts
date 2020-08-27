import { Component } from '../Component';
import { SIZE } from '../enums/index';
import { Actionable } from '../mixins';
import { Image } from './index';

export class Media extends Actionable(Component) {
  type: string = 'media';
  protected image: Image;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  constructor(title: string, subtitle: string) {
    super();
    super.title = title;
    super.subtitle = subtitle;
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
}
