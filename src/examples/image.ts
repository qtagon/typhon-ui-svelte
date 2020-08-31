import { Typhon, SIZE } from '@qtagon/typhon-ui';

/**
 * Declare TyphonUI
 */

let dynamic = new Typhon('typhon-ui-svelte')
  /**
   * Create a column for left menu
   */
  .setColumn('left-menu')
  /**
   * Create a column for content
   */
  .setColumn('center-content');

/**
 * Declare content for menu column
 */
const menu_container = dynamic
  .onColumn('left-menu')
  /**
   * Add class for column
   */
  .setClassified('flex-auto')
  /**
   * Add a row for menu in column
   */
  .setRow('menu')
  /**
   * Add a contianer in row for components
   */
  .setContainer('menu');

/**
 * Add menu component in menu container
 */
const menu = menu_container.setMenu();

/**
 * Add options for menu
 */
menu.setOption('Image').setClassified('active');
menu.setOption('Github').setIcon('git');

/**
 * Declare content for content column
 */
const content_container = dynamic
  .onColumn('center-content')
  /**
   * Set raw style
   */
  .setStyle('padding: 2rem 1rem 0 2rem;')
  .setRow('content')
  .setContainer('content')
  /**
   * Set scroll
   */
  .setScroll(true);

content_container.setSubject('Image').setClassified('h1');

/**
 * Example 1
 */
content_container
  .setSubject('Responsive')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const image_e1 = content_container.setImage(
  'https://images.unsplash.com/photo-1598839949627-fc96b1f2578f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
);

/**
 * Example 2
 */
content_container
  .setSubject('With different sizes')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

content_container.setImage(
  'https://images.unsplash.com/photo-1598648173144-6d2b84416a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=679&q=80',
  SIZE.EXTRA_SMALL
);
content_container.setImage(
  'https://images.unsplash.com/photo-1598839949627-fc96b1f2578f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  SIZE.SMALL
);
content_container.setImage(
  'https://images.unsplash.com/photo-1598827691375-140045b69f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  SIZE.MIDDLE
);
content_container.setImage(
  'https://images.unsplash.com/photo-1574856252034-0c7fc6e3024a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  SIZE.LARGE
);
content_container.setImage(
  'https://images.unsplash.com/photo-1584292263357-71956b561fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  SIZE.LARGE_X2
);

export { dynamic };
