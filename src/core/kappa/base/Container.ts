import { ALIGNMENT, Element, POSITION, SIZE } from '../interfaces/index';
import type { Component } from './Component';

import { Media } from '../components/Media';
import { Card } from '../components/Card';
import { Action } from '../components/Action';
import { Image } from '../components/Image';
import { Notification } from '../components/Notification';
import { Search } from '../components/Search';
import { Tabs } from '../components/Tabs';
import { Menu } from '../components/Menu';
import { Title } from '../components/Title';

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
    this.style = '';

    /**
     * Components
     */
    this.components = [];
    this.icomponents = new Map();
  }

  /**
   * Clear specific component type
   * @param {string} type
   */
  public clear(type: string = ''): this {
    const storage = [];
    this.components.forEach((component: Component) => {
      if (component.type !== type) {
        storage.push(...[component]);
        return;
      }

      this.icomponents.delete(component.identifier);
    });

    this.components = storage;
    return this;
  }

  public getComponents(): Array<Component> {
    return this.components;
  }

  public setStyle(style: string = ''): this {
    this.style = style;
    return this;
  }

  /**
   *
   * @param {Component} component
   */
  public setComponent(component: Component): Component {
    this.components = [...this.components, component];
    this.icomponents.set(component.identifier, component);
    return component;
  }

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setMedia(title: string = '', subtitle: string = ''): Media {
    const media = new Media(title, subtitle);
    this.setComponent(media);
    return media;
  }

  /**
   *
   * @param {string} title
   */
  public setMenu(title: string = ''): Menu {
    const menu = new Menu(title);
    this.setComponent(menu);
    return menu;
  }

  /**
   *
   * @param {string} title
   */
  public setTabs(title: string = ''): Tabs {
    const tabs = new Tabs(title);
    this.setComponent(tabs);
    return tabs;
  }

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setCard(title: string = '', subtitle: string = ''): Card {
    const card = new Card(title, subtitle);
    this.setComponent(card);
    return card;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setAction(title: string = '', size: SIZE = SIZE.SMALL): Action {
    const action = new Action(title, size);
    this.setComponent(action);
    return action;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setImage(url: string = '', size: SIZE = SIZE.NONE): Image {
    const image = new Image(url, size);
    this.setComponent(image);
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
    this.setComponent(notification);
    return notification;
  }

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  public setSearch(title: string = '', subtitle: string = ''): Search {
    const search = new Search(title, subtitle);
    this.setComponent(search);
    return search;
  }

  /**
   * A very dumb component
   * @param {string} title
   */
  public setTitle(title: string = ''): Title {
    const titled = new Title(title);
    this.setComponent(titled);
    return titled;
  }
}
