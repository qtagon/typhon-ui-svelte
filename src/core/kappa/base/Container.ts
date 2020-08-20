import { ALIGNMENT, Element, POSITION, SIZE } from '../interfaces/index';
import type { Component } from './Component';
import { Media } from '../components/Media';
import { Card } from '../components/Card';
import Helper from './Helper';

export class Container implements Element {
  identifier: string;
  type: string = 'container';
  title: string;
  subtitle: string;
  description: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;
  url: string;

  protected components: Array<Component>;
  private icomponents: Map<string, Component>;

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.description = '';
    this.classified = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;

    /**
     * Components
     */
    this.components = [];
    this.icomponents = new Map();
  }

  public getComponents(): Array<Component> {
    return this.components;
  }

  public setMedia(title: string = '', subtitle: string = ''): Media {
    const media = new Media(title, subtitle);
    this.components.push(media);
    this.icomponents.set(media.identifier, media);
    return media;
  }

  public setCard(title: string = '', subtitle: string = ''): Card {
    const card = new Card(title, subtitle);
    this.components.push(card);
    this.icomponents.set(card.identifier, card);
    return card;
  }
}
