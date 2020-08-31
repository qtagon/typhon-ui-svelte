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
menu.setOption('Media').setClassified('active');
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

content_container.setSubject('Media').setClassified('h1');

/**
 * Example 1
 */
content_container
  .setSubject('With image')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const media_e1 = content_container
  .setMedia(
    'Title',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
  )
  .setClassified('background-white round padding-default');

media_e1.setImage(
  'https://images.pexels.com/photos/4927356/pexels-photo-4927356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  SIZE.SMALL
);

/**
 * Example 2
 */
content_container
  .setSubject('With actions')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const media_e2 = content_container
  .setMedia(
    'Title',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
  )
  .setClassified('background-white round padding-default');

media_e2.setImage(
  'https://images.pexels.com/photos/4927356/pexels-photo-4927356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  SIZE.SMALL
);

media_e2.setAction('Google').setUrl('https://www.google.com/');
media_e2
  .setAction('Github')
  .setUrl('https://github.com/qtagon/typhon-ui')
  .setIcon('git');

/**
 * Example 3
 */
content_container
  .setSubject('Placeholder')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const media_e3 = content_container
  .setMedia()
  .setClassified('background-white round padding-default')
  .setPlaceholder(true);

export { dynamic };
