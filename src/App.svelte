<script lang="ts">
  /**
   * Components
   */
  import Media from './core/components/Media.svelte';
  import Card from './core/components/Card.svelte';

  const components = {
    media: Media,
    card: Card,
  };

  console.log(components['Media']);

  import Kappa, { Component, SIZE } from './core/kappa';

  const dynamic = new Kappa('ui')
    .setRow('menu')
    .setRow('profile')
    .setRow('content');

  const container = dynamic.onRow('menu').setContainer('options');
  const media = container.setMedia('Logan Nesser', '@louisaingram');
  media.setAction('Add').setIcon('check');
  media
    .setImage(
      'https://images.pexels.com/photos/5060987/pexels-photo-5060987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      SIZE.SMALL
    )
    .setTitle('oooo')
    .setClassified('x');

  const card = dynamic
    .onRow('profile')
    .setContainer('account')
    .setCard('Logan Nesser', '@louisaingram');

  card
    .setImage(
      'https://images.pexels.com/photos/3954401/pexels-photo-3954401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    )
    .setTitle('cotton');

  card
    .setMedia('Cottonbro', '@cotton')
    .setImage(
      'https://images.pexels.com/photos/4153141/pexels-photo-4153141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      SIZE.SMALL
    )
    .setTitle('cotton');

  card.setAction('326').setIcon('heart');
  card.setAction('148').setIcon('comment');
  card.setAction('Share').setIcon('share');

  dynamic.onRow('content').setContainer('products');

  console.log(JSON.stringify(dynamic, null, '    '));
</script>

<style>
  main {
    padding: 1em;
  }
</style>

<main>
  {#each dynamic.getRows() as row, i}
    <div class="row">
      {#each row.getContainers() as container}
        <div class="container">
          {#each container.getComponents() as component}
            <svelte:component
              this={components[component.type]}
              {...component} />
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</main>
