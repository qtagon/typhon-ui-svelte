import { SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {
  container.setSubject('Action').setClassified('h1');

  /**
   * Example 1
   */
  container
    .setSubject('Simple')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const action_e1 = container.setAction('Title');

  /**
   * Example 2
   */
  container
    .setSubject('With icon')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const action_e2 = container.setAction('Title').setIcon('git');

  /**
   * Example 3
   */
  container
    .setSubject('With different styles')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  container.setAction('Title').setClassified('success').setIcon('git');
  container.setAction('Title').setClassified('dark').setIcon('git');
  container
    .setAction('Title')
    .setClassified('transparent bordered')
    .setIcon('git');

  /**
   * Example 4
   */
  container
    .setSubject('With icon only')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  container.setAction().setIcon('search');
  container.setAction().setIcon('git');
  container.setAction().setIcon('check');
};
export default setup;
