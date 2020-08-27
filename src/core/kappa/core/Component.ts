import type { Element } from './interfaces';
import { ALIGNMENT, POSITION, SIZE } from './enums';
import Helper from './Helper';
import { Event } from './Event';

export class Component implements Element {
  identifier: string;
  type: string = 'component';
  title: string;
  subtitle: string;
  description: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;
  url: string;
  style: string;
  event: Event;
  placeholder: boolean = false;

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.classified = '';
    this.description = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;
    this.style = '';
    this.event = new Event();
    this.placeholder = false;
  }

  /**
   * Set event of the component
   * @param {string} name - name of the event to be emitted
   * @param {any} parameters - parameters of the event that should be forwarded
   */
  public setEvent(name: string = '', parameters: any = ''): this {
    this.event = new Event(name, parameters);
    return this;
  }

  public setAlignment(alignment: ALIGNMENT = ALIGNMENT.NONE): this {
    this.alignment = alignment;
    return this;
  }

  public setPosition(position: POSITION = POSITION.NONE): this {
    this.position = position;
    return this;
  }

  public setSize(size: SIZE = SIZE.NONE): this {
    this.size = size;
    return this;
  }

  public setStyle(style: string = ''): this {
    this.style = style;
    return this;
  }

  public setClassified(classified: string): this {
    this.classified = classified;
    return this;
  }

  public setTitle(title: string): this {
    this.title = title;
    return this;
  }

  public setSubtitle(subtitle: string): this {
    this.subtitle = subtitle;
    return this;
  }

  public setDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setPlaceholder(enabled: boolean = false): this {
    this.placeholder = enabled;
    return this;
  }
}
