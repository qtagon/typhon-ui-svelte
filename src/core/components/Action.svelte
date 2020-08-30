<script lang="ts">
  import type { Icon } from '@qtagon/typhon-ui';
  import { ALIGNMENT, SIZE } from '@qtagon/typhon-ui';

  /**
   * Components
   */
  import cicon from './Icon/index.svelte';
  const components = {
    icon: cicon,
  };

  export let title: string = '';
  export let url: string = '';
  export let classified: string = '';
  export let icon: Icon;
  export let alignment: ALIGNMENT = ALIGNMENT.NONE;
  export let size: SIZE = SIZE.NONE;

  const untitled = icon && !title ? 'untitled' : '';
</script>

<style type="text/scss">
  @import './scss/button.scss';
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';
</style>

<a
  class={`button ${classified} ${untitled} ${alignment} ${size} display`}
  href={url}
  name={title}
  aria-label={title}
  target="_blank"
  rel="noopener noreferrer">
  {#if icon}
    <svelte:component this={components.icon} {...icon} />
    {#if title}&nbsp;{/if}
  {/if}
  {title}
</a>
