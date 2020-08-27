<script lang="ts">
  import type { Icon } from '../kappa/core/components';
  import { ALIGNMENT, SIZE } from '../kappa';

  /**
   * Components
   */
  import cicon from './Icon/index.svelte';
  const components = {
    icon: cicon,
  };

  export let title: string = '';
  export let classified: string = '';
  export let icon: Icon;
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let size: SIZE = SIZE.NONE;

  const untitled = icon && !title ? 'untitled' : '';
</script>

<style type="text/scss">
  @import './scss/button.scss';
  @import './scss/alignment.scss';
  @import './scss/fonts.scss';
</style>

<button
  class={`button ${classified} ${untitled} ${alignment} ${size} display`}
  name={title}
  type="button">
  {#if icon}
    <svelte:component this={components.icon} {...icon} />
    {#if title}&nbsp;{/if}
  {/if}
  {title}
</button>
