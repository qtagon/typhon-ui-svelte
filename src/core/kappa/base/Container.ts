import { ALIGNMENT, Element, POSITION, SIZE } from '../interfaces/index';
import type { Component } from './Component';
import { Media } from '../components/Media';
import Helper from './Helper';

export class Container implements Element {
  identifier: string;
  type: string = 'container';
  title: string;
  subtitle: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;

  protected components: Array<Component>;
  private icomponents: Map<string, Component>;

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.classified = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;

    /**
     * Components
     */
    this.components = [];
    this.icomponents = new Map();
  }

  public setMedia(identifier: string = ''): Media {
    const media = new Media(identifier);
    this.components.push(media);
    this.icomponents.set(identifier, media);
    return media;
  }
}
