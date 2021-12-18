<script>
  import API from './core/utils/api.request';

  /**
   * Instance of MovieDatabaseAPI requester
   */
  const MovieAPI = new API(`https://api.themoviedb.org/3/`, `KEY`);

  /**
   * Components
   */
  import Media from './core/components/Media.svelte';
  import Card from './core/components/Card.svelte';
  import Action from './core/components/Action.svelte';
  import Button from './core/components/Button.svelte';
  import Image from './core/components/Image.svelte';
  import Notification from './core/components/Notification.svelte';
  import Search from './core/components/Search.svelte';
  import Tabs from './core/components/Tabs.svelte';
  import Menu from './core/components/Menu.svelte';
  import Subject from './core/components/Subject.svelte';
  import Message from './core/components/Message.svelte';
  import Modal from './core/components/Modal.svelte';
  import Scroller from './core/components/Scroller.svelte';

  /**
   * Local components references Typhon UI Component -> Local Component
   */
  const components = {
    media: Media,
    card: Card,
    action: Action,
    image: Image,
    notification: Notification,
    search: Search,
    tabs: Tabs,
    menu: Menu,
    subject: Subject,
    message: Message,
    modal: Modal,
    button: Button,
  };

  import { Typhon } from '@qtagon/typhon-ui';

  /** Declare TyphonUI */
  let dynamic = new Typhon('movies-ui')
    .setColumn('content-menu') /** Attach column for menu */
    .setColumn('content'); /** Attach column for page content */

  /** Menu */
  const cmenu = dynamic
    .onColumn('content-menu')
    .setClassified('flex-auto') /** CSS classes */
    .setRow('content-menu-row') /** Attach row */
    .setContainer('content-menu-container'); /** Attach container to row */

  /** Indexing content-menu column and content-menu-row row*/
  dynamic.ixColumn('content-menu').ixRow('content-menu-row');

  /** Attach menu component to menu contianer */
  const menu = cmenu.setMenu();

  /** Attach option to menu component, then icon to option, then width and height of icon */
  menu.setOption().setIcon('home').setWidth(18).setHeight(18);
  menu.setOption().setIcon('calendar').setWidth(18).setHeight(18);
  menu.setOption().setIcon('message').setWidth(18).setHeight(18);
  menu.setOption().setIcon('user').setWidth(18).setHeight(18);
  menu.setOption().setIcon('logout').setWidth(18).setHeight(18);

  /** Page Content */
  const content = dynamic
    .onColumn('content')
    .setScroll(true) /** Make column scrollable */
    .setStyle(
      'padding: 0.938rem 0.938rem 0.938rem 1.938rem;'
    ) /** Raw CSS style */
    .setRow('search') /** Attach row  for search bar */
    .setContainer('search'); /** Attach container to row */

  dynamic
    .onColumn('content')
    .setRow('data') /** Attach row for cards */
    .setContainer('data') /** Attach container to row */
    .setClassified('display-grid') /** CSS classes */
    .setStyle(
      `grid-template-columns: repeat(auto-fill, minmax(15.750rem, 1fr)); grid-gap: 1.875rem;`
    ); /** Raw CSS style */

  /** Indexing content column and content-menu-row row*/
  dynamic.ixColumn('content').ixRow('search').ixRow('data');

  content.setSubject('Search').setClassified('h1'); /** Set container (title) */
  content.setSearch('Search movies ...').setEvent('search', {
    type: 'query',
  }); /** Attach search component with search event */

  /** Attach tabs component with options and events */
  const tabs = content.setTabs('Movies');
  tabs.setOption('Popular').setEvent('search', { type: 'popular' });
  tabs.setOption('Now Playing').setEvent('search', { type: 'now_playing' });
  tabs.setOption('Upcoming').setEvent('search', { type: 'upcoming' });
  tabs.setOption('Top Rated').setEvent('search', { type: 'top_rated' });

  /** Reference to data container which contains cards */
  const container_data = dynamic.onContainer('data');

  /** Attach cards by external logic , currently fetching movies from themoviedb API */
  const setMovieCard = (data, poster = 'https://image.tmdb.org/t/p/w500') => {
    /** Attach card component */
    const card = container_data
      .setCard(
        data.title,
        data.overview
      ) /** Set title and description of card */
      .setClassified(
        'background-white round padding-default single-line'
      ); /** CSS classes */

    /** Attach image component to card with title */
    card
      .setImage(`${poster}${data.poster_path}`)
      .setTitle(`${data.title} Poster`);

    /** Attach button component to card with title, event and icon */
    card
      .setButton('Read More')
      .setEvent('element', data) /** Attach event */
      .setClassified('transparent bordered') /** CSS classes */
      .setIcon('check'); /** Attach icon component */

    dynamic = dynamic; /** Rerender UI, just svelte's way ... */
  };

  /** Fetch Movies from themoviedb API */
  const data = (query = '', type = 'popular') => {
    const uri = query ? `search/movie` : `movie/${type}`;
    MovieAPI.get(`${uri}`, { query }).then(({ results }) => {
      container_data.clear('card');
      dynamic = dynamic; /** Rerender UI, just svelte's way ... */
      results.forEach((movie) => setMovieCard(movie));
    });
  };

  /** Call function on load */
  data();

  /**
   * Functions
   */
  const onSearchEvent = ({ detail }) => {
    if (detail?.parameters?.type && !detail?.value)
      data('', detail.parameters.type);

    if (detail?.parameters?.type && detail?.value) data(detail.value);
  };
</script>

<!-- Modals are top priority -->
{#each dynamic.getComponents('modal') as component (component.identifier)}
  <svelte:component
    this={components[component.type]}
    on:search={onSearchEvent}
    {...component}
  />
{/each}

<!-- Typhon UI Rendering Method -->
<main>
  <!-- Loop through each columns -->
  {#each dynamic.getColumns() as column (column.identifier)}
    <div class={`column ${column.classified}`} style={column.style}>
      <!-- Set local scroller -->
      <Scroller wrap={column.scroll}>
        <!-- Loop through each rows -->
        {#each column.getRows() as row (row.identifier)}
          <div class={`row ${row.classified}`}>
            <!-- Set local scroller -->
            <Scroller wrap={row.scroll}>
              <!-- Loop through each container -->
              {#each row.getContainers() as container (container.identifier)}
                <div
                  class={`container ${container.classified}`}
                  style={container.style}
                >
                  <!-- Set local scroller -->
                  <Scroller wrap={container.scroll}>
                    <!-- Loop through each component, finally -->
                    {#each container.getComponents() as component (component.identifier)}
                      <!-- Render component -->
                      <svelte:component
                        this={components[component.type]}
                        on:search={onSearchEvent}
                        {...component}
                      />
                    {/each}
                  </Scroller>
                </div>
              {/each}
            </Scroller>
          </div>
        {/each}
      </Scroller>
    </div>
  {/each}
</main>

<!-- Just styles -->
<style type="text/scss">
  @import './core/components/scss/global.scss';
  @import './core/components/scss/fonts.scss';
  @import './core/components/scss/alignment.scss';
</style>
