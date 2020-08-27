import { Component } from '../Component';
import { Actionable } from '../mixins';

export class Search extends Actionable(Component) {
  type: string = 'search';

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
}
