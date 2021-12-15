import { Typhon, SIZE } from '@qtagon/typhon-ui';
const setup = (container: any) => {
  container.setSubject('Image').setClassified('h1');

  /**
   * Example 1
   */
  container
    .setSubject('Responsive')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const image_e1 = container.setImage(
    'https://images.unsplash.com/photo-1598839949627-fc96b1f2578f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  );

  /**
   * Example 2
   */
  container
    .setSubject('With different sizes')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  container.setImage(
    'https://images.unsplash.com/photo-1598648173144-6d2b84416a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=679&q=80',
    SIZE.EXTRA_SMALL
  );
  container.setImage(
    'https://images.unsplash.com/photo-1598839949627-fc96b1f2578f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    SIZE.SMALL
  );
  container.setImage(
    'https://images.unsplash.com/photo-1598827691375-140045b69f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    SIZE.MIDDLE
  );
  container.setImage(
    'https://images.unsplash.com/photo-1574856252034-0c7fc6e3024a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    SIZE.LARGE
  );
  container.setImage(
    'https://images.unsplash.com/photo-1584292263357-71956b561fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    SIZE.LARGE_X2
  );
};
export default setup;
