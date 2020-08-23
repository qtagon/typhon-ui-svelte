import { Component } from '../base/Component';
import { SIZE } from '../interfaces/index';
import { Action } from './Action';

export class Search extends Component {
  type: string = 'search';
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
  public setAction(title: string = '', size: SIZE = SIZE.SMALL): Action {
    const action = new Action(title, size);
    this.actions.push(action);
    this.iactions.set(action.identifier, action);
    return action;
  }
}
