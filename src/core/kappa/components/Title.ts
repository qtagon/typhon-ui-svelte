import { Component } from '../base/Component';

export class Title extends Component {
  type: string = 'title';

  /**
   *
   * @param {string} title
   */
  constructor(title: string) {
    super();
    super.title = title;
  }
}
