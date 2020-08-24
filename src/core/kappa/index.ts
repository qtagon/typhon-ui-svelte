import { Row } from './base/Row';
import { Column } from './base/Column';
import { Component } from './base/Component';
import { SIZE, ALIGNMENT } from './interfaces/index';

export { Row, Component, SIZE, ALIGNMENT, Column };

/**
 * Main generator
 */
class Kappa {
  protected columns: Array<Column>;
  private icolumns: Map<string, Column>;

  protected title: string;

  constructor(title: string = '') {
    this.title = title;
    this.columns = [];
    this.icolumns = new Map();
  }

  public getColumns(): Array<Column> {
    return this.columns;
  }

  public setColumn(identifier: string = ''): this {
    const column = new Column(identifier);
    this.columns.push(column);
    this.icolumns.set(column.identifier, column);
    return this;
  }

  public onColumn(identifier: string = ''): Column {
    const column = this.icolumns.get(identifier);
    return column;
  }
}

export default Kappa;
