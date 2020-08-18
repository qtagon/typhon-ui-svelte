import { Row } from './base/Row';
import { Component } from './base/Component';

export { Row, Component };

/**
 * Main generator
 */
class Kappa {
  protected rows: Array<Row>;
  private irows: Map<string, Row>;
  protected title: string;

  constructor(title: string = '') {
    this.title = title;
    this.rows = [];
    this.irows = new Map();
  }

  public setRow(identifier: string = ''): this {
    const row = new Row(identifier);
    this.rows.push(row);
    this.irows.set(row.identifier, row);
    return this;
  }

  public onRow(identifier: string = ''): Row {
    const row = this.irows.get(identifier);
    return row;
  }
}

export default Kappa;
