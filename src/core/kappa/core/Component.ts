import type { Element } from './interfaces';
import { ALIGNMENT, POSITION, SIZE } from './enums';
import Helper from './Helper';

/**
 * Component class
 */
export class Component implements Element {
  identifier: string;
  type: string;
  title: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE;
  style: string;
  placeholder: boolean;

  /**
   * constructor
   * @param identifier
   */
  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.type = '';
    this.title = '';
    this.classified = '';
    this.alignment = ALIGNMENT.NONE;
    this.position = POSITION.NONE;
    this.size = SIZE.NONE;
    this.style = '';
    this.placeholder = false;
  }

  /**
   * identifier setter
   * @param {string} identifier
   */
  public setIdentifier(identifier: string): this {
    this.identifier = identifier;
    return this;
  }

  /**
   * type setter
   * @param {string} type
   */
  public setType(type: string = ''): this {
    this.type = type;
    return this;
  }

  /**
   * title setter
   * @param {string} title
   */
  public setTitle(title: string = ''): this {
    this.title = title;
    return this;
  }

  /**
   * classified setter
   * @param {string} classified
   */
  public setClassified(classified: string = ''): this {
    this.classified = classified;
    return this;
  }

  /**
   * alignment setter
   * @param {ALIGNMENT} alignment
   */
  public setAlignment(alignment: ALIGNMENT = ALIGNMENT.NONE): this {
    this.alignment = alignment;
    return this;
  }

  /**
   * position setter
   * @param {POSITION} position
   */
  public setPosition(position: POSITION = POSITION.NONE): this {
    this.position = position;
    return this;
  }

  /**
   * size setter
   * @param {SIZE} size
   */
  public setSize(size: SIZE = SIZE.NONE): this {
    this.size = size;
    return this;
  }

  /**
   * style setter
   * @param {string} style
   */
  public setStyle(style: string = ''): this {
    this.style = style;
    return this;
  }

  /**
   * placeholder setter
   * @param {boolean} enabled
   */
  public setPlaceholder(enabled: boolean = false): this {
    this.placeholder = enabled;
    return this;
  }
}
