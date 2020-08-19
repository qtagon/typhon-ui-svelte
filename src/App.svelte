<script lang="ts">
  /**
   * Components
   */
  import Media from './core/components/Media.svelte';

  const components = {
    media: Media,
  };

  console.log(components['Media']);

  import Kappa, { Component, SIZE } from './core/kappa';

  const dynamic = new Kappa('ui')
    .setRow('menu')
    .setRow('profile')
    .setRow('content');

  const container = dynamic.onRow('menu').setContainer('options');
  const mediax = container.setMedia('Logan Nesser', '@louisaingram');

  mediax
    .setImage(
      'https://static.dribbble.com/users/5976/screenshots/14046921/media/d3ae8455079e0d0031c594563c54878a.png',
      SIZE.SMALL
    )
    .setClassified('x');

  mediax.setAction('Add').setIcon('check');
  mediax.setAction('Add').setIcon('check');

  dynamic.onRow('profile').setContainer('account');
  dynamic.onRow('content').setContainer('products');

  console.log(JSON.stringify(dynamic, null, '    '));
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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
