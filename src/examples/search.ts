import { Typhon, SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {
  container.setSubject('Search').setClassified('h1');

  /**
   * Example 1
   */
  container
    .setSubject('Simple')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const search_e1 = container.setSearch('Placeholder');

  /**
   * Example 2
   */
  container
    .setSubject('With icon')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const search_e2 = container.setSearch('Placeholder');
  search_e2.setAction().setClassified('left').setIcon('search');
};

export default setup;
