import { Component } from '../Component';

export class Icon extends Component {
  type: string = 'icon';

  protected width: number = 14;
  protected height: number = 14;
  protected color: string = '#ffffff';

  constructor(title: string) {
    super();
    super.title = title;
  }

  /**
   *
   * @param width
   */
  public setWidth(width: number = 14): this {
    this.width = width;
    return this;
  }

  /**
   *
   * @param height
   */
  public setHeight(height: number = 14): this {
    this.height = height;
    return this;
  }

  /**
   *
   * @param color
   */
  public setColor(color: string = '#ffffff'): this {
    this.color = color;
    return this;
  }
}
