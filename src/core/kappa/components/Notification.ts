import { Component } from '../base/Component';
import { SIZE } from '../interfaces/index';
import { Image } from './Image';
import { Action } from './Action';
import { Button } from './Button';
import { Indicator } from './Indicator';

export class Notification extends Component {
  type: string = 'notification';
  protected image: Image;
  protected indicator: Indicator;

  protected actions: Array<Action>;
  private iactions: Map<string, Action>;

  protected buttons: Array<Button>;
  private ibuttons: Map<string, Button>;

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
    this.actions = [];
    this.iactions = new Map();
    this.buttons = [];
    this.ibuttons = new Map();
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

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setButton(title: string = '', size: SIZE = SIZE.SMALL): Button {
    const button = new Button(title, size);
    this.buttons.push(button);
    this.ibuttons.set(button.identifier, button);
    return button;
  }
}
