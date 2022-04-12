<script lang="ts">
  import { Typhon } from '@qtagon/typhon-ui';
  import TyphonUI from './core/components/Typhon/index.svelte';

  // Setup UI
  let dynamic = new Typhon('main')
    .setColumn('left')
    .setColumn('middle')
    .setColumn('right');

  /**
   * Setup containers & index
   */

  const menu_container = dynamic
    .onColumn('left')
    .setClassified('column')
    .setStyle(
      'background-color: #ff7979; padding: 5rem; flex-direction: column'
    )
    .setRow('menu')
    .setStyle('background-color: red;');

  dynamic
    .onColumn('left')
    .setRow('menux')
    .setStyle('background-color: orange;');

  dynamic
    .onColumn('left')
    .setRow('menuxx')
    .setStyle('background-color: yellow;');

  const content_container = dynamic
    .onColumn('middle')
    .setStyle('background-color: #badc58; padding: 5rem')
    .setRow('content')
    .setStyle('background-color: red;')
    .setContainer('content')
    .setScroll(true);

  const right_container = dynamic
    .onColumn('right')
    .setStyle('background-color: #be2edd; padding: 5rem')
    .setRow('right')
    .setStyle('background-color: red;')
    .setContainer('right')
    .setScroll(true);

  dynamic.ixColumn('left').ixRow('menu');

  console.log(dynamic);
</script>

<main>
  <TyphonUI {dynamic} />
</main>

<style type="text/scss">
</style>
