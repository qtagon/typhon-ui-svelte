export enum POSITION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  NONE = 'none',
}

export enum ALIGNMENT {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  MIDDLE = 'middle',
  RIGHT = 'right',
  NONE = 'none',
}

export enum SIZE {
  EXTRA_SMALL_X2 = 'xxs',
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MIDDLE = 'md',
  MIDDLE_X2 = 'mmd',
  LARGE = 'lg',
  LARGE_X2 = 'llg',
  EXTRA_LARGE = 'xl',
  NONE = 'none',
}

export interface Element {
  identifier: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE;
  url: string;
  style: string;
}
