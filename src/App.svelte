<script lang="ts">
  import { Typhon } from '../../typhon/lib';

  // Import examples
  import TyphonUI from './core/components/Typhon/index.svelte';
  import action from './examples/action';
  import button from './examples/button';
  import card from './examples/card';
  import image from './examples/image';
  import media from './examples/media';
  import message from './examples/message';
  import modal from './examples/modal';
  import notification from './examples/notification';
  import search from './examples/search';
  import tabs from './examples/tabs';

  // Index examples
  const examples = {
    action,
    button,
    card,
    image,
    media,
    message,
    modal,
    notification,
    search,
    tabs,
  };

  // Setup UI
  let dynamic = new Typhon('main').setColumn('menu').setColumn('content');
  const menu_items = [
    {
      title: 'Action',
    },
    {
      title: 'Button',
    },
    {
      title: 'Card',
    },
    {
      title: 'Image',
    },
    {
      title: 'Media',
    },
    {
      title: 'Message',
    },
    {
      title: 'Modal',
    },
    {
      title: 'Notification',
    },
    {
      title: 'Search',
    },
    {
      title: 'Tabs',
    },
  ];

  /**
   * Setup containers & index
   */

  const menu_container = dynamic
    .onColumn('menu')
    .setClassified('flex-auto')
    .setRow('menu')
    .setScroll(true)
    .setContainer('menu');

  const content_container = dynamic
    .onColumn('content')
    .setStyle('padding: 2rem 1rem 0 2rem;')
    .setRow('content')
    .setContainer('content')
    .setScroll(true);

  dynamic.ixColumn('content').ixRow('content');

  /**
   * Setup menu
   */
  const menu = menu_container.setMenu();
  menu_items.forEach((e, i) => {
    if (i === 0) examples[`${e.title.toLowerCase()}`](content_container);
    menu.setOption(e.title).setEvent('menu-item-clicked', { title: e.title });
  });

  /**
   * Functions
   */
  let current = 'action';
  const onEvent = ({ detail }) => {
    if (!detail?.parameters) return;
    dynamic.onContainer('content').clear(current);
    dynamic.onContainer('content').clear('subject');
    dynamic = dynamic;

    const component = detail?.parameters?.title || 'action';
    const name = component.toLowerCase();
    current = name;

    examples[`${name}`](content_container);
    dynamic = dynamic;
  };
</script>

<style type="text/scss">
</style>

<main>
  <TyphonUI {dynamic} on:event={onEvent} />
</main>
