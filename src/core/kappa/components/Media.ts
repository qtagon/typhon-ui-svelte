import { Component } from '../base/Component';
import { SIZE } from '../interfaces/index';
import { Image } from './Image';
import { Action } from './Action';

export class Media extends Component {
  type: string = 'media';
  protected image: Image;

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
