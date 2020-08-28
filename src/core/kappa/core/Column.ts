import { Row } from './Row';
import { Component } from '.';

export class Column extends Component {
  type: string = 'column';

  private rows: Array<Row>;
  private irows: Map<string, Row>;

  constructor(identifier: string = '') {
    super();
    super.identifier = identifier;
    this.rows = [];
    this.irows = new Map();
  }

  /**
   * Get all rows of column
   */
  public getRows(): Array<Row> {
    return this.rows;
  }

  /**
   * Set column row
   * @param {string} identifier
   */
  public setRow(identifier: string = ''): Row {
    const row = new Row(identifier);
    this.rows.push(row);
    this.irows.set(row.identifier, row);
    return row;
  }

  /**
   * Get column row
   * @param {string} identifier
   */
  public onRow(identifier: string = ''): Row {
    const row = this.irows.get(identifier);
    return row;
  }
}
