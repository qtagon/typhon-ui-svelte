import { Typhon, SIZE, ALIGNMENT, POSITION } from '@qtagon/typhon-ui';

const setup = (container: any) => {

container.setSubject('Notification').setClassified('h1');

/**
 * Example 1
 */
container
  .setSubject('With actions & buttons')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const notificaiton_e1 = container.setNotification('John', 'Doe');

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
container
  .setSubject('With indicator')
  .setClassified('h3')
  .setStyle('padding: 2rem 0;');

const notificaiton_e2 = container.setNotification(
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
};
export default setup;
