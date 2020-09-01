import { Typhon, SIZE, ALIGNMENT, POSITION } from '@qtagon/typhon-ui';

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
menu.setOption('Notification').setClassified('active');
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

content_container.setSubject('Notification').setClassified('h1');

/**
 * Example 1
 */
content_container
  .setSubject('With actions & buttons')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const notificaiton_e1 = content_container.setNotification('John', 'Doe');

notificaiton_e1.setImage(
  'https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  SIZE.EXTRA_SMALL_X2
);

notificaiton_e1.setAction().setIcon('addUser');
notificaiton_e1.setButton('Accept').setClassified('success').setIcon('check');
notificaiton_e1.setButton('Deny').setClassified('dark').setIcon('close');

/**
 * Example 2
 */
content_container
  .setSubject('With indicator')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const notificaiton_e2 = content_container.setNotification(
  'John',
  'Wants to add you as a friend'
);

notificaiton_e2.setImage(
  'https://images.pexels.com/photos/4233783/pexels-photo-4233783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  SIZE.EXTRA_SMALL_X2
);

notificaiton_e2.setButton('Accept').setClassified('success').setIcon('check');
notificaiton_e2.setButton('Deny').setClassified('dark').setIcon('close');

notificaiton_e2.setIndicator();

export { dynamic };
