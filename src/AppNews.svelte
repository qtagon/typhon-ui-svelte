<script>
  import API from './core/utils/api.request';

  /**
   * Instance of News API requester
   */
  const NewsAPI = new API(`https://newsapi.org/v2/`, `KEY`);

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

  import { SIZE, Typhon } from '@qtagon/typhon-ui';

  /** Declare TyphonUI GRID */
  let dynamic = new Typhon('news-ui')
    .setColumn('categories')
    .setColumn('contents')
    .setColumn('relations');

  dynamic
    .onColumn('categories')
    .setRow('categories-row')
    .setContainer('categories-row-container');

  dynamic
    .onColumn('contents')
    .setRow('contents-row')
    .setContainer('contents-row-container');

  dynamic
    .onColumn('relations')
    .setRow('relations-row')
    .setContainer('relations-row-container');

  dynamic
    .ixColumn('categories')
    .ixRow('categories-row')
    .ixColumn('contents')
    .ixRow('contents-row')
    .ixColumn('relations')
    .ixRow('relations-row');

  /** Declare TyphonUI CONTAINER */
  const ccontents = dynamic.onContainer('contents-row-container');
  ccontents.setSubject('News').setClassified('h1');
  ccontents
    .setStyle('padding: 0.938rem 0.938rem 0.938rem 1.938rem;')
    .setScroll(true);
  ccontents
    .setSearch('Search anything...')
    .setEvent('search', { type: 'query' });

  const ccategories = dynamic.onContainer('categories-row-container');
  ccategories
    .setStyle('padding: 0.938rem 0.938rem 0.938rem 1.938rem;')
    .setScroll(true);
  const tabs = ccategories.setTabs('Countries');
  tabs.setOption('Japan').setEvent('search', { country: 'jp' });
  tabs.setOption('Germany').setEvent('search', { country: 'de' });
  tabs.setOption('Australia').setEvent('search', { country: 'au' });
  tabs.setOption('Norway').setEvent('search', { country: 'no' });

  const crelations = dynamic.onContainer('relations-row-container');
  crelations.setSubject('Sources').setClassified('h1');
  crelations.setScroll(true);

  /** Set card */
  const setCard = (
    data,
    ccontents,
    style = 'margin: 1.938rem 0 1.938rem 0;'
  ) => {
    const card = ccontents.setCard(data.title, data.description);
    const media = card.setMedia(
      data.source.name,
      new Date(data.publishedAt).toDateString()
    );
    media.setImage('https://picsum.photos/200/300?blur', SIZE.SMALL);
    card.setImage(data.urlToImage).setClassified('background-black');
    card.setClassified('background-white round padding-default');
    card.setStyle(style);
    const button = card.setButton('Read More');
    button.setIcon('share');
    button.setEvent('read', { url: data.url });
    dynamic = dynamic; /** Rerender UI, just svelte's way ... */
  };

  /** Set source */
  const setSource = (data, ccontents) => {
    const media = ccontents.setMedia(data.name, data.description);
    media.setClassified(`background-white round padding-default`);
    media.setStyle('margin: 1.938rem 0 1.938rem 0;');
    const asource = media.setAction('Source');
    asource.setIcon('share');
    asource.setUrl(data.url);
    const asearch = media.setButton('Search');
    asearch.setIcon('search');
    asearch.setEvent('search', { source: data.id });
    media.setImage('https://picsum.photos/200/300', SIZE.SMALL);
    dynamic = dynamic; /** Rerender UI, just svelte's way ... */
  };

  /** Fetch API */
  const data_articles = (query = 'google', source = '') => {
    const uri = `everything`;
    NewsAPI.get(`${uri}`, {
      q: query || 'bitcoin',
      sortBy: 'popularity',
      sources: source,
    }).then(({ articles }) => {
      ccontents.clear('card');
      dynamic = dynamic; /** Rerender UI, just svelte's way ... */
      (articles || []).forEach((article) => setCard(article, ccontents));
    });
  };

  const data_headlines = (country = 'jp') => {
    const uri = `top-headlines`;
    NewsAPI.get(`${uri}`, { country, sortBy: 'popularity' }).then(
      ({ articles }) => {
        ccategories.clear('card');
        dynamic = dynamic; /** Rerender UI, just svelte's way ... */
        (articles || []).forEach((article) =>
          setCard(article, ccategories, 'margin: 0 0 1.938rem 0;')
        );
      }
    );
  };

  const data_sources = () => {
    const uri = `top-headlines/sources`;
    NewsAPI.get(`${uri}`, {}).then(({ sources }) => {
      crelations.clear('card');
      dynamic = dynamic; /** Rerender UI, just svelte's way ... */
      (sources || []).forEach((source) => setSource(source, crelations));
    });
  };

  /** Call function on load */
  data_articles();
  data_headlines();
  data_sources();

  /**
   * Functions
   */
  const onSearchEvent = ({ detail }) => {
    if (detail?.parameters?.country)
      return data_headlines(detail?.parameters?.country);
    if (detail?.parameters?.source)
      return data_articles('', detail?.parameters?.source);
    return data_articles(detail?.value || '');
  };

  /**
   * Functions
   */
  const onReadEvent = ({ detail }) => {
    if (detail?.parameters?.url) window.open(detail?.parameters?.url, '_blank');
  };
</script>

<!-- Modals are top priority -->
{#each dynamic.getComponents('modal') as component (component.identifier)}
  <svelte:component this={components[component.type]} {...component} />
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
                        {...component}
                        on:search={onSearchEvent}
                        on:read={onReadEvent}
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
