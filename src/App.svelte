<script lang="ts">
  import Kappa, { SIZE, ALIGNMENT, Column } from './core/kappa';

  /**
   * Components
   */
  import Media from './core/components/Media.svelte';
  import Card from './core/components/Card.svelte';
  import Action from './core/components/Action.svelte';
  import Image from './core/components/Image.svelte';
  import Notification from './core/components/Notification.svelte';
  import Search from './core/components/Search.svelte';
  import Tabs from './core/components/Tabs.svelte';
  import Menu from './core/components/Menu.svelte';
  import Title from './core/components/Title.svelte';

  const components = {
    media: Media,
    card: Card,
    action: Action,
    image: Image,
    notification: Notification,
    search: Search,
    tabs: Tabs,
    menu: Menu,
    title: Title
  };

  const picture =
    'https://coubsecureassets-a.akamaihd.net/assets/default-avatars/273-25383fd95f5da0be3d8f716a463af402c3ee0fce4f2638164c03ce8f69d1449b.png';

  let dynamic = new Kappa('ui')
    .setColumn('left-left')
    .setColumn('left')
    .setColumn('right');
  let cccontainer = dynamic
    .onColumn('left-left')
    .setRow('ccontent')
    .setContainer('csearch');

  const menu = cccontainer.setMenu();
  menu.setOption().setIcon('home');
  menu.setOption().setIcon('calendar');
  menu.setOption().setIcon('message');
  menu.setOption().setIcon('user');
  menu.setOption().setIcon('logout');

  let ccontainer = dynamic
    .onColumn('left')
    .setStyle('padding: 2.938rem; flex: 0 0 50%;')
    .setRow('content')
    .setClassified('direction-column')
    .setContainer('search');

  ccontainer.setSearch('Search in news...');
  const tabs = ccontainer.setTabs('News');
  tabs.setOption('Anytime').setClassified('active');
  tabs.setOption('Today');
  tabs.setOption('Tomorrow');
  tabs.setOption('This Week');
  tabs.setOption('This Month');

  fetch(
    'http://newsapi.org/v2/top-headlines?apiKey=7c41da8c4a554de095aa8860ec8d7b0e&country=us'
  )
    .then((r) => r.json())
    .then(({ articles }) => {
      articles.forEach((e) => {
        const card = ccontainer.setCard(`${e.title}`, `${e.description || ''}`);
        card.setImage(e.urlToImage || picture);
        card
          .setAction('Interested')
          .setClassified('transparent bordered')
          .setIcon('check');
      });

      dynamic = dynamic;
    });

  let ocontainer = dynamic
    .onColumn('right')
    .setStyle('padding: 2.938rem;')
    .setRow('content')
    .setClassified('direction-column')
    .setContainer('search');

  ocontainer.setTitle('Top Writers').setClassified('h3');

  fetch('https://reqres.in/api/users?page=2')
    .then((r) => r.json())
    .then(({ data }) => {
      data.forEach((e) => {
        ocontainer
          .setMedia(`${e.first_name} ${e.last_name}`, `${e.email}`)
          .setImage(e.avatar, SIZE.SMALL);
      });

      dynamic = dynamic;
    });
</script>

<style type="text/scss">
  @import './core/components/scss/fonts.scss';
  @import './core/components/scss/alignment.scss';

  :global(body),
  :global(html) {
    overflow-x: hidden;
    background: #f7f7f7;
    margin: 0;
    padding: 0;
  }

  main {
    background: #f7f7f7;
    display: flex;
  }

  .row {
    display: flex;
    flex: 1 1 auto;
    height: 100%;

    & > .container {
      &:not(:last-child) {
        margin-right: 1.875rem;
      }

      & > :global(div) {
        margin-bottom: 1.875rem;
      }
    }
  }
</style>

<main>
  {#each dynamic.getColumns() as column (column.identifier)}
    <div class="column" style={column.style}>
      {#each column.getRows() as row (row.identifier)}
        <div class={`row ${row.classified}`}>
          {#each row.getContainers() as container (container.identifier)}
            <div class="container">
              {#each container.getComponents() as component (component.identifier)}
                <svelte:component
                  this={components[component.type]}
                  {...component} />
              {/each}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</main>
