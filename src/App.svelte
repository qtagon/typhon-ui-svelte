<script lang="ts">
  import Kappa, { SIZE, ALIGNMENT } from './core/kappa';
  import { onMount } from 'svelte';

  /**
   * Components
   */
  import Media from './core/components/Media.svelte';
  import Card from './core/components/Card.svelte';
  import Action from './core/components/Action.svelte';
  import Image from './core/components/Image.svelte';
  import Notification from './core/components/Notification.svelte';
  import { Container } from './core/kappa/base/Container';

  const components = {
    media: Media,
    card: Card,
    action: Action,
    image: Image,
    notification: Notification,
  };

  const defaultPicture =
    'https://gp1.wac.edgecastcdn.net/802892/production_static/20200807141007/images/widgets/html5_audio/55/default_image.png';
  let dynamic = new Kappa('ui').setRow('content');
  let fcontainer = dynamic
    .onRow('content')
    .setClassified('display-flex direction-row')
    .setContainer('news');

  fetch(
    'http://newsapi.org/v2/top-headlines?apiKey=7c41da8c4a554de095aa8860ec8d7b0e&country=ru'
  )
    .then((r) => r.json())
    .then(({ articles }) => {
      articles.forEach((e) => {
        const card = fcontainer.setCard(`${e.title}`, `${e.description || ''}`);
        card.setImage(e.urlToImage || defaultPicture);
        card
          .setMedia(`${e.author || 'Unknown Author'}`, `${e.source.name}`)
          .setImage(e.urlToImage || defaultPicture, SIZE.SMALL);
      });

      dynamic = dynamic;
    });

  let ocontainer = dynamic.onRow('content').setContainer('videos');
  ocontainer
    .setMedia('Rings a Bell (Visualizer)', `@allieX`)
    .setImage(
      'https://cdn.dribbble.com/users/730703/screenshots/13960639/media/f9094a86313f7870788e7b76a3dddc50.jpg',
      SIZE.SMALL
    );

  fetch('https://reqres.in/api/users?page=1')
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
  @import './core/components/scss/alignment.scss';

  .row {
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
  {#each dynamic.getRows() as row (row.identifier)}
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
</main>
