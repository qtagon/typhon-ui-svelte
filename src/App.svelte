<script lang="ts">
  import Kappa, { Component } from './core/kappa';

  const dynamic = new Kappa('ui')
    .setRow('menu')
    .setRow('profile')
    .setRow('content');
  dynamic.onRow('menu').setContainer('options').setMedia();
  dynamic.onRow('profile').setContainer('account');
  dynamic.onRow('content').setContainer('products');

  console.log(dynamic);

  export let name: string;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <span>{JSON.stringify(dynamic)}</span>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
