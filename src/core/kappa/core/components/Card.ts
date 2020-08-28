import { Component } from '../Component';
import { SIZE } from '../enums';
import { Image } from './Image';
import { Media } from './Media';
import { Actionable } from '../mixins';

export class Card extends Actionable(Component) {
  type: string = 'card';
  subtitle: string = '';
  protected media: Media;

  protected images: Array<Image>;
  private iimages: Map<string, Image>;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  constructor(title: string, subtitle: string) {
    super();
    super.title = title;
    this.subtitle = subtitle;
    this.images = [];
    this.iimages = new Map();
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setImage(url: string = '', size: SIZE = SIZE.NONE): Image {
    const image = new Image(url, size);
    this.images.push(image);
    this.iimages.set(image.identifier, image);
    return image;
  }

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setMedia(title: string = '', subtitle: string = ''): Media {
    const media = new Media(title, subtitle);
    this.media = media;
    return media;
  }
}
