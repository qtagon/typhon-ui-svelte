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
menu.setOption('Action').setClassified('active');
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

content_container.setSubject('Action').setClassified('h1');

/**
 * Example 1
 */
content_container
  .setSubject('Simple')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const action_e1 = content_container.setAction('Title');

/**
 * Example 2
 */
content_container
  .setSubject('With icon')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const action_e2 = content_container.setAction('Title').setIcon('git');

/**
 * Example 3
 */
content_container
  .setSubject('With different styles')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

content_container.setAction('Title').setClassified('success').setIcon('git');
content_container.setAction('Title').setClassified('dark').setIcon('git');
content_container
  .setAction('Title')
  .setClassified('transparent bordered')
  .setIcon('git');

/**
 * Example 4
 */
content_container
  .setSubject('With icon only')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

content_container.setAction().setIcon('search');
content_container.setAction().setIcon('git');
content_container.setAction().setIcon('check');

export { dynamic };
