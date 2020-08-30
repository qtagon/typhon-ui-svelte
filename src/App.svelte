<script lang="ts">
  import Typhon, { ALIGNMENT, SIZE } from './core/kappa';
  import API from './core/utils/api.request';

  const MovieAPI = new API(
    `https://api.themoviedb.org/3/`,
    `5ddafb95e989ca8aa719ebfd59996a89`
  );

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

  /**
   * Declare TyphonUI
   */

  let dynamic = new Typhon('movies-ui').setColumn('cmenu').setColumn('content');
  const resources: any = {
    elements: [],
    element: {},
  };

  /**
   * Menu
   */

  const cmenu = dynamic
    .onColumn('cmenu')
    .setClassified('flex-auto')
    .setRow('crow')
    .setContainer('cmenu');

  dynamic.ixColumn('cmenu').ixRow('crow');

  const menu = cmenu.setMenu();
  menu.setOption().setIcon('home').setWidth(18).setHeight(18);
  menu.setOption().setIcon('calendar').setWidth(18).setHeight(18);
  menu.setOption().setIcon('message').setWidth(18).setHeight(18);
  menu.setOption().setIcon('user').setWidth(18).setHeight(18);
  menu.setOption().setIcon('logout').setWidth(18).setHeight(18);

  /**
   * Content
   */

  const content = dynamic
    .onColumn('content')
    .setScroll(true)
    .setStyle('padding: 2.938rem 0.938rem 0 1.938rem;')
    .setRow('search')
    .setContainer('search');

  dynamic
    .onColumn('content')
    .setRow('data')
    .setContainer('data')
    .setClassified('display-grid')
    .setStyle(
      `grid-template-columns: repeat(auto-fill, minmax(15.750rem, 1fr)); grid-gap: 1.875rem;`
    );
  dynamic.ixColumn('content').ixRow('search').ixRow('data');

  content.setSearch('Search movies ...').setEvent('search', { type: 'query' });
  const tabs = content.setTabs('Movies');
  tabs.setOption('Popular').setEvent('search', { type: 'popular' });
  tabs.setOption('Now Playing').setEvent('search', { type: 'now_playing' });
  tabs.setOption('Upcoming').setEvent('search', { type: 'upcoming' });
  tabs.setOption('Top Rated').setEvent('search', { type: 'top_rated' });

  /**
   * Resource
   */
  const containerx = dynamic.onContainer('data');
  const setMovieCard = (
    data: any,
    poster: string = 'https://image.tmdb.org/t/p/w500'
  ) => {
    const card = containerx
      .setCard(data.title, data.overview)
      .setClassified('background-white round padding-default single-line');

    card
      .setImage(`${poster}${data.poster_path}`)
      .setTitle(`${data.title} Poster`);

    card
      .setButton('Read More')
      .setEvent('element', data)
      .setClassified('transparent bordered')
      .setIcon('check');

    /**
     * Update
     */

    dynamic = dynamic;
  };

  const setMovieView = (
    data: any,
    poster: string = 'https://image.tmdb.org/t/p/original'
  ) => {
    const column = dynamic.onColumn('content').clear();
    const container = column.setRow('content').setContainer('content');
    const card = container
      .setCard(data.title, data.overview)
      .setClassified('background-white round padding-default');
    const media = card.setMedia(
      data.tagline,
      `${data.status} - ${data.release_date}`
    );
    media
      .setAction('IMDB')
      .setUrl(`https://www.imdb.com/title/${data.imdb_id}`);

    media.setImage(`${poster}${data.poster_path}`, SIZE.SMALL);

    card
      .setImage(`${poster}${data.backdrop_path}`, SIZE.EXTRA_LARGE)
      .setClassified('wide')
      .setTitle(`${data.title} Hero`);

    if (data?.genres?.length) {
      data.genres.forEach((genre) => {
        card.setButton(genre.name).setClassified('transparent bordered');
      });
    }

    /**
     * Update
     */

    dynamic = dynamic;
  };

  const item = (id: number = 718444) => {
    MovieAPI.get(`movie/${id}`, { append_to_response: 'credits' }).then(
      (data) => {
        resources.element = data;
        setMovieView(resources.element);
      }
    );
  };

  const data = (query: string = '', type: string = 'popular') => {
    const uri = query ? `search/movie` : `movie/${type}`;
    MovieAPI.get(`${uri}`, { query }).then(({ results }) => {
      containerx.clear('card');
      dynamic = dynamic;
      results.forEach((movie: any) => setMovieCard(movie));
    });
  };
  data();

  /**
   * Functions
   */
  const onSearchEvent = ({ detail }) => {
    if (detail?.parameters?.type && !detail?.value)
      data('', detail.parameters.type);

    if (detail?.parameters?.type && detail?.value) data(detail.value);
  };

  const onElementEvent = ({ detail }) => {
    if (detail?.parameters?.id) item(detail.parameters.id);
  };
</script>

<style type="text/scss">
  @import './core/components/scss/global.scss';
  @import './core/components/scss/fonts.scss';
  @import './core/components/scss/alignment.scss';
</style>

{#each dynamic.getComponents('modal') as component (component.identifier)}
  <svelte:component
    this={components[component.type]}
    on:search={onSearchEvent}
    {...component} />
{/each}

<main>
  {#each dynamic.getColumns() as column (column.identifier)}
    <div class={`column ${column.classified}`} style={column.style}>
      <Scroller wrap={column.scroll}>
        {#each column.getRows() as row (row.identifier)}
          <div class={`row ${row.classified}`}>
            <Scroller wrap={row.scroll}>
              {#each row.getContainers() as container (container.identifier)}
                <div
                  class={`container ${container.classified}`}
                  style={container.style}>
                  <Scroller wrap={container.scroll}>
                    {#each container.getComponents() as component (component.identifier)}
                      <svelte:component
                        this={components[component.type]}
                        on:search={onSearchEvent}
                        on:element={onElementEvent}
                        {...component} />
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
