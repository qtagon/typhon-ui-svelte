import { Typhon, SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {
  container.setSubject('Tabs').setClassified('h1');

  /**
   * Example 1
   */
  container
    .setSubject('Simple')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const tabs_e1 = container.setTabs('Tab Title');
  tabs_e1.setOption('Lorem');
  tabs_e1.setOption('Ipsum');
  tabs_e1.setOption('Sit');
  tabs_e1.setOption('Met');
};

export default setup;
