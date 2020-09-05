import { Typhon, SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {
  container.setSubject('Media').setClassified('h1');

  /**
   * Example 1
   */
  container
    .setSubject('With image')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const media_e1 = container
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
  container
    .setSubject('With actions')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const media_e2 = container
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
  container
    .setSubject('Placeholder')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const media_e3 = container
    .setMedia()
    .setClassified('background-white round padding-default')
    .setPlaceholder(true);
};
export default setup;
