import { Typhon, SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {

container.setSubject('Button').setClassified('h1');

/**
 * Example 1
 */
container
  .setSubject('Simple')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const button_e1 = container.setButton('Title');

/**
 * Example 2
 */
container
  .setSubject('With icon')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const button_e2 = container.setButton('Title').setIcon('git');

/**
 * Example 3
 */
container
  .setSubject('With different styles')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

container.setButton('Title').setClassified('success').setIcon('git');
container.setButton('Title').setClassified('dark').setIcon('git');
container
  .setButton('Title')
  .setClassified('transparent bordered')
  .setIcon('git');

/**
 * Example 4
 */
container
  .setSubject('With icon only')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

container.setButton().setIcon('search');
container.setButton().setIcon('git');
container.setButton().setIcon('check');
};

export default setup;