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
menu.setOption('Tabs').setClassified('active');
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

content_container.setSubject('Tabs').setClassified('h1');

/**
 * Example 1
 */
content_container
  .setSubject('Simple')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const tabs_e1 = content_container.setTabs('Tab Title');
tabs_e1.setOption('Lorem');
tabs_e1.setOption('Ipsum');
tabs_e1.setOption('Sit');
tabs_e1.setOption('Met');

export { dynamic };
