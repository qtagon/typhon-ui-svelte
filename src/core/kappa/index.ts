import { Column, Container, Row } from './core';
import type { Component } from './core/Component';
import { Modal } from './core/components';

/**
 * Typhon class
 */
class Typhon {
  public title: string = 'Typhon';

  private columns: Array<Column>;
  private icolumns: Map<string, Column>;

  private components: Array<Component>;
  private icomponents: Map<string, Component>;

  private rows: Array<Row>;
  private irows: Map<string, Row>;

  private containers: Array<Container>;
  private icontainers: Map<string, Container>;

  constructor(title: string = '') {
    this.title = title;
    this.columns = [];
    this.icolumns = new Map();
    this.components = [];
    this.icomponents = new Map();
    this.containers = [];
    this.icontainers = new Map();
    this.rows = [];
    this.irows = new Map();
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

  /**
   *
   * @param identifier - container identifier
   * @returns {Container} - Container instance
   */
  public onContainer(identifier: string = ''): Container {
    return this.icontainers.get(identifier);
  }

  /**
   * Index column rows
   * @param identifier - column identifier
   * @returns {this}
   */
  public ixColumn(identifier: string = ''): this {
    const column = this.icolumns.get(identifier);
    this.rows.push(...column.getRows());

    column
      .getIndexedRows()
      .forEach((e: Row) => this.irows.set(e.identifier, e));

    return this;
  }

  /**
   * Index row containers
   * @param identifier - row identifier
   * @returns {Column} - Column instance
   */
  public ixRow(identifier: string = ''): this {
    const row = this.irows.get(identifier);
    this.containers.push(...row.getContainers());

    row
      .getIndexedContainers()
      .forEach((e: Container) => this.icontainers.set(e.identifier, e));

    return this;
  }
}

/**
 * Export
 */
export * from './core/enums';
export default Typhon;
