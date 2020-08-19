import { Component } from '../base/Component';

export class Icon extends Component {
  type: string = 'icon';

  constructor(title: string) {
    super();
    super.title = title;
  }
}
