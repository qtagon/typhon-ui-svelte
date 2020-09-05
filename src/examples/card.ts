import { SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {
  /**
   * Example 1
   */
  container.setSubject('Card').setClassified('h1');
  container
    .setSubject('With image')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');
  const card_e1 = container
    .setCard(
      'Title',
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    )
    .setClassified('background-white round padding-default');
  card_e1.setImage(
    'https://images.pexels.com/photos/4526712/pexels-photo-4526712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  );

  container
    .setSubject('With images')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  /**
   * Example 2
   */
  const card_e2 = container
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
  container
    .setSubject('With links')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');
  const card_e3 = container
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
  container
    .setSubject('With media header')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');
  const card_e4 = container
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
};

export default setup;
