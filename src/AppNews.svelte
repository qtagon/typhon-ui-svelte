<script lang="ts">
    import Kappa, { ALIGNMENT, SIZE } from './core/kappa';
    import API from './core/utils/api.request'
  
    const MovieAPI = new API(`https://api.themoviedb.org/3/`, `5ddafb95e989ca8aa719ebfd59996a89`);
  
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
    import Subject from './core/components/Subject.svelte';
    import Message from './core/components/Message.svelte';
    import Modal from './core/components/Modal.svelte';
  
    // MovieAPI.get('movie/popular').then((e) => {
    //   console.log(e)
    // })
  
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
    };
  
    let dynamic = new Kappa('ui')
      .setColumn('left-left')
      .setColumn('left')
      .setColumn('right');
  
    const clear = () => (dynamic = dynamic);
  
    let cccontainer = dynamic
      .onColumn('left-left')
      .setClassified('flex-auto')
      .setRow('ccontent')
      .setContainer('csearch');
  
    const menu = cccontainer.setMenu();
    menu.setOption().setIcon('home').setWidth(24).setHeight(24);
    menu.setOption().setIcon('calendar').setWidth(24).setHeight(24);
    menu.setOption().setIcon('message').setWidth(24).setHeight(24);
    menu.setOption().setIcon('user').setWidth(24).setHeight(24);
    menu.setOption().setIcon('logout').setWidth(24).setHeight(24);
  
    let ccontainer = dynamic
      .onColumn('left')
      .setStyle('padding: 2.938rem 2.938rem 0 2.938rem; flex-basis: 18%')
      .setRow('content')
      .setClassified('direction-column')
      .setContainer('search');
  
    ccontainer.setSearch('Search in news...').setEvent('search');
    const tabs = ccontainer.setTabs('News');
    tabs.setOption('United States').setEvent('search', { country: 'us' });
    tabs.setOption('Russia').setEvent('search', { country: 'ru' });
    tabs.setOption('Ukraine').setEvent('search', { country: 'ua' });
    tabs.setOption('Romania').setEvent('search', { country: 'ro' });
  
    let ocontainer = dynamic
      .onColumn('right')
      .setStyle('padding: 2.938rem 2.938rem 0 2.938rem;')
      .setRow('content')
      .setClassified('direction-column')
      .setContainer('search');
  
    ocontainer.setSubject('Top Writers').setClassified('h3');
  
    fetch('https://reqres.in/api/users?page=2')
      .then((r) => r.json())
      .then(({ data }) => {
        ocontainer.clear('media');
  
        data.forEach((e) => {
          const media = ocontainer
            .setMedia(`${e.first_name} ${e.last_name}`, `${e.email}`)
            .setClassified('background-white padding-default round');
  
          media.setAction('Follow').setClassified('dark').setIcon('check');
  
          media.setImage(e.avatar, SIZE.SMALL);
        });
  
        clear();
      });
  
    ocontainer
      .setMedia()
      .setClassified('background-white padding-default round')
      .setPlaceholder(true);
  
    ccontainer
      .setCard()
      .setClassified('background-white padding-default round')
      .setPlaceholder(true);
  
    /**
     * Functions
     */
    const searchNews = (
      q: string = '',
      country: string = 'us',
      pageSize: string = '50',
      apiKey: string = '7c41da8c4a554de095aa8860ec8d7b0e'
    ) => {
      const params = new URLSearchParams({
        apiKey,
        country,
        q,
        pageSize,
      }).toString();
  
      fetch(`http://newsapi.org/v2/top-headlines?${params}`)
        .then((r) => r.json())
        .then(({ articles }) => {
          ccontainer.clear('card');
  
          if (!articles.length) {
            ccontainer
              .setMessage(
                `Zero... nothing... nada... zilch... nix!`,
                `Sorry, but we couldn't find anything! Please try another search term.`
              )
              .setAlignment(ALIGNMENT.MIDDLE)
              .setClassified('background-white padding-default round');
          }
  
          if (articles.length) ccontainer.clear('message');
  
          articles.forEach((e: any) => {
            const card = ccontainer
              .setCard(`${e.title}`, `${e.description || ''}`)
              .setClassified('background-white padding-default round');
  
            card.setImage(e.urlToImage).setTitle(e.title);
  
            card
              .setAction('Read More')
              .setUrl(e.url)
              .setClassified('transparent bordered')
              .setIcon('share');
          });
  
          clear();
        });
    };
    searchNews();
  
    /**
     *
     */
    let country = 'us';
    const onSearchEvent = ({ detail }) => {
      const query = detail?.value || '';
      searchNews(query, (country = detail?.parameters?.country || country));
    };
  </script>
  
  <style type="text/scss">
    @import './core/components/scss/global.scss';
    @import './core/components/scss/scroller.scss';
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
        {#each column.getRows() as row (row.identifier)}
          <div class={`row ${row.classified}`}>
            <div class="scroller-container scroller-fade scroller-ghost-hairline">
              <div class="scroller">
                {#each row.getContainers() as container (container.identifier)}
                  <div class="container">
                    {#each container.getComponents() as component (component.identifier)}
                      <svelte:component
                        this={components[component.type]}
                        on:search={onSearchEvent}
                        {...component} />
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </main>
  