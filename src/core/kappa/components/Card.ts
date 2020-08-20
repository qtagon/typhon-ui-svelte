import { Component } from '../base/Component';
import { SIZE } from '../interfaces/index';
import { Image } from './Image';
import { Action } from './Action';
import { Media } from './Media';

export class Card extends Component {
  type: string = 'card';
  protected image: Image;
  protected media: Media;

  protected actions: Array<Action>;
  private iactions: Map<string, Action>;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  constructor(title: string, subtitle: string) {
    super();
    super.title = title;
    super.subtitle = subtitle;
    this.actions = [];
    this.iactions = new Map();
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
   * @param {string} title
   * @param {string} subtitle
   */
  public setMedia(title: string = '', subtitle: string = ''): Media {
    const media = new Media(title, subtitle);
    this.media = media;
    return media;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setAction(title: string = '', size: SIZE = SIZE.SMALL): Action {
    const action = new Action(title, size);
    this.actions.push(action);
    this.iactions.set(action.identifier, action);
    return action;
  }
}
