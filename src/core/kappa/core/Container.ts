import { SIZE } from './enums';
import {
  Media,
  Card,
  Action,
  Image,
  Notification,
  Search,
  Tabs,
  Menu,
  Subject,
  Message,
  Button,
} from './components';
import { Component } from '.';
import { Scrollable, Actionable } from './mixins';

export class Container extends Actionable(Scrollable(Component)) {
  type: string = 'container';

  private components: Array<Component>;
  private icomponents: Map<string, Component>;

  constructor(identifier: string = '') {
    super();
    super.identifier = identifier;
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

  /**
   * Get all components of container
   */
  public getComponents(): Array<Component> {
    return this.components;
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
   * Set buttons that the component has
   * @param {string} title - button title
   * @param {SIZE} size - size of button
   */
  public setButton(title: string = '', size: SIZE = SIZE.SMALL): Button {
    const button = new Button(title, size);
    this.setComponent(button);
    return button;
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
   */
  public setSearch(title: string = ''): Search {
    const search = new Search(title);
    this.setComponent(search);
    return search;
  }

  /**
   * @param {string} title
   */
  public setSubject(title: string = ''): Subject {
    const subject = new Subject(title);
    this.setComponent(subject);
    return subject;
  }

  /**
   * @param {string} title
   * @param {string} subtitle
   */
  public setMessage(title: string = '', subtitle: string = ''): Message {
    const message = new Message(title, subtitle);
    this.setComponent(message);
    return message;
  }
}
