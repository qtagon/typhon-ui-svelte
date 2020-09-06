import { Typhon, SIZE, ALIGNMENT, POSITION } from '@qtagon/typhon-ui';

const setup = (container: any, dynamic: any) => {
  container.setSubject('Modal').setClassified('h1');

  const modal = dynamic.setModal('Lorem', 'Ipsum');
  modal.setButton('Deny').setClassified('transparent bordered');
  modal.setButton('Accept');
};
export default setup;
