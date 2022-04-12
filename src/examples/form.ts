import { SIZE } from '@qtagon/typhon-ui';

const setup = (container: any) => {
  container.setSubject('Form').setClassified('h1');

  /**
   * Example 1
   */
  container
    .setSubject('Simple')
    .setClassified('h3')
    .setStyle('padding: 2rem 0;');

  const form_e1 = container.setForm('Create an account', 'Signup to continue');
  form_e1.setInput('Name');
  form_e1.setInput('Email');
  form_e1.setInput('Password');


  console.log(form_e1)
};

export default setup;
