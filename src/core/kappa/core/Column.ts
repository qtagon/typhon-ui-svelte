import type { Element } from './interfaces';
import { ALIGNMENT, POSITION, SIZE } from './enums';
import { Row } from './Row';
import Helper from './Helper';

export class Column implements Element {
  identifier: string;
  type: string = 'column';
  title: string;
  subtitle: string;
  description: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE = SIZE.NONE;
  url: string;
  style: string;

  protected rows: Array<Row>;
  private irows: Map<string, Row>;

  public getRows(): Array<Row> {
    return this.rows;
  }

  public setClassified(classified: string): this {
    this.classified = classified;
    return this;
  }

  constructor(identifier: string = '') {
    this.identifier = identifier || Helper.guid();
    this.title = '';
    this.subtitle = '';
    this.description = '';
    this.classified = '';
    this.alignment = ALIGNMENT.LEFT;
    this.position = POSITION.HORIZONTAL;
    this.rows = [];
    this.irows = new Map();
    this.style = '';
  }

  public setStyle(style: string = ''): this {
    this.style = style;
    return this;
  }

  public setRow(identifier: string = ''): Row {
    const row = new Row(identifier);
    this.rows.push(row);
    this.irows.set(row.identifier, row);
    return row;
  }

  public onRow(identifier: string = ''): Row {
    const row = this.irows.get(identifier);
    return row;
  }
}
