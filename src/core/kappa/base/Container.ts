import { ALIGNMENT, Element, POSITION, SIZE } from '../interfaces/index';
import type { Component } from './Component';

import { Media } from '../components/Media';
import { Card } from '../components/Card';
import { Action } from '../components/Action';
import { Image } from '../components/Image';
import { Notification } from '../components/Notification';

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
  style: string;

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

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setMedia(title: string = '', subtitle: string = ''): Media {
    const media = new Media(title, subtitle);
    this.components.push(media);
    this.icomponents.set(media.identifier, media);
    return media;
  }

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setCard(title: string = '', subtitle: string = ''): Card {
    const card = new Card(title, subtitle);
    this.components.push(card);
    this.icomponents.set(card.identifier, card);
    return card;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setAction(title: string = '', size: SIZE = SIZE.SMALL): Action {
    const action = new Action(title, size);
    this.components.push(action);
    this.icomponents.set(action.identifier, action);
    return action;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setImage(url: string = '', size: SIZE = SIZE.NONE): Image {
    const image = new Image(url, size);
    this.components.push(image);
    this.icomponents.set(image.identifier, image);
    return image;
  }

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setNotification(
    title: string = '',
    subtitle: string = '',
    description: string = ''
  ): Notification {
    const notification = new Notification(title, subtitle, description);
    this.components.push(notification);
    this.icomponents.set(notification.identifier, notification);
    return notification;
  }
}
