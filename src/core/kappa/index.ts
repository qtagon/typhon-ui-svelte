import { Column } from './core';
import type { Component } from './core/Component';
import { Modal } from './core/components';

/**
 * Kappa class
 */
class Kappa {
  public title: string = 'Kappa';

  private columns: Array<Column>;
  private icolumns: Map<string, Column>;

  private components: Array<Component>;
  private icomponents: Map<string, Component>;

  constructor(title: string = '') {
    this.title = title;
    this.columns = [];
    this.icolumns = new Map();
    this.components = [];
    this.icomponents = new Map();
  }

  /**
   *
   */
  public getColumns(): Array<Column> {
    return this.columns;
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
   */
  public getComponents(type: string = ''): Array<Component> {
    return this.components.filter((e: Component) => e.type === type);
  }

  /**
   * @param {string} title
   * @param {string} subtitle
   */
  public setModal(title: string = '', subtitle: string = ''): Modal {
    const modal = new Modal(title, subtitle);
    this.setComponent(modal);
    return modal;
  }

  /**
   *
   * @param {string} identifier - column identifier
   * @returns {Kappa} - instance
   */
  public setColumn(identifier: string = ''): this {
    const column = new Column(identifier);
    this.columns.push(column);
    this.icolumns.set(column.identifier, column);
    return this;
  }

  /**
   *
   * @param identifier - column identifier
   * @returns {Column} - Column instance
   */
  public onColumn(identifier: string = ''): Column {
    const column = this.icolumns.get(identifier);
    return column;
  }
}

/**
 * Export
 */
export * from './core/enums';
export default Kappa;
