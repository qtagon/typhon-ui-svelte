import { Typhon, SIZE, ALIGNMENT, POSITION } from '@qtagon/typhon-ui';
const setup = (container: any) => {

container.setSubject('Message').setClassified('h1');

/**
 * Example 1
 */
container
  .setSubject('Simple')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const message_e1 = container.setMessage('John', 'Doe');
};
export default setup;