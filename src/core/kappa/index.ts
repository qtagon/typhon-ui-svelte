import { Column } from './core';

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

  /**
   *
   */
  public getColumns(): Array<Column> {
    return this.columns;
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

export * from './core/enums';
export default Kappa;
