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
menu.setOption('Card').setClassified('active');
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

content_container.setSubject('Card').setClassified('h1');

/**
 * Example 1
 */
content_container
  .setSubject('With image')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');
const card_e1 = content_container
  .setCard(
    'Title',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
  )
  .setClassified('background-white round padding-default');
card_e1.setImage(
  'https://images.pexels.com/photos/4526712/pexels-photo-4526712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
);

content_container
  .setSubject('With images')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

/**
 * Example 2
 */
const card_e2 = content_container
  .setCard(
    'Title',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
  )
  .setClassified('background-white round padding-default');
card_e2.setImage(
  'https://images.pexels.com/photos/4526712/pexels-photo-4526712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
);
card_e2.setImage(
  'https://images.pexels.com/photos/3047315/pexels-photo-3047315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
);
card_e2.setImage(
  'https://images.pexels.com/photos/153653/pexels-photo-153653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
);
card_e2.setImage(
  'https://images.pexels.com/photos/17662/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
);

/**
 * Example 3
 */
content_container
  .setSubject('With links')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');
const card_e3 = content_container
  .setCard(
    'Title',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
  )
  .setClassified('background-white round padding-default');
card_e3.setImage(
  'https://images.pexels.com/photos/17662/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
);
card_e3.setAction('Google').setUrl('https://www.google.com/');
card_e3
  .setAction('Github')
  .setUrl('https://github.com/qtagon/typhon-ui')
  .setIcon('git');

/**
 * Example 4
 */
content_container
  .setSubject('With media header')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');
const card_e4 = content_container
  .setCard(
    'Title',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
  )
  .setClassified('background-white round padding-default');
card_e4
  .setMedia('Title', 'Description')
  .setImage(
    'https://images.pexels.com/photos/3028448/pexels-photo-3028448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    SIZE.SMALL
  );
card_e4.setImage(
  'https://images.pexels.com/photos/1909572/pexels-photo-1909572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
);

export { dynamic };
