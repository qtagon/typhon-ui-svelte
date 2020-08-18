export enum POSITION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  NONE = ''
}

export enum ALIGNMENT {
  LEFT = 'LEFT',
  MIDDLE = 'MIDDLE',
  RIGHT = 'RIGHT',
  NONE = ''
}

export enum SIZE {
  SMALL = 'sm',
  MIDDLE = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
  NONE = ''
}

export interface Element {
  identifier: string;
  type: string;
  title: string;
  subtitle: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE;
}
