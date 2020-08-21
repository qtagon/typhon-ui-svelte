export enum POSITION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  NONE = '',
}

export enum ALIGNMENT {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  MIDDLE = 'middle',
  RIGHT = 'right',
  NONE = '',
}

export enum SIZE {
  EXTRA_SMALL_X2 = 'xxs',
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MIDDLE = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
  NONE = '',
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
