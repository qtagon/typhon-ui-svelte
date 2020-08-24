import { Component } from '../base/Component';
import { Option } from './Option';

export class Tabs extends Component {
  type: string = 'tabs';

  protected options: Array<Option>;
  private ioptions: Map<string, Option>;

  /**
   *
   * @param {string} title
   */
  constructor(title: string) {
    super();
    super.title = title;
    this.options = [];
    this.ioptions = new Map();
  }

  /**
   *
   * @param {string} title
   */
  public setOption(title: string = ''): Option {
    const option = new Option(title);
    this.options.push(option);
    this.ioptions.set(option.identifier, option);
    return option;
  }
}
