<script lang="ts">
  import type { Icon } from '../kappa/components/Icon';

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

  const untitled = icon && !title ? 'untitled' : '';
</script>

<style type="text/scss">
  @import './scss/button.scss';
</style>

<button class={`${classified} ${untitled} display`} name={title} type="button">
  {#if icon}
    <svelte:component this={components.icon} {...icon} />
    {#if title}&nbsp;{/if}
  {/if}
  {title}
</button>
