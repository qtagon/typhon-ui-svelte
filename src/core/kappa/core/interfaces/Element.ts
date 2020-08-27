import type { ALIGNMENT, POSITION, SIZE } from '../enums';

export default interface Element {
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
