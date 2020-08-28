import { Component } from '../Component';

export class Subject extends Component {
  type: string = 'subject';

  /**
   *
   * @param {string} title
   */
  constructor(title: string) {
    super();
    super.title = title;
  }
}
