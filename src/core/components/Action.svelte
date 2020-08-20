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
  export let icon: Icon;
</script>

<style type="text/scss">
  button {
    background: #0659fd;

    &:active,
    &:hover,
    &:focus {
      background: #0659fd;
    }

    mix-blend-mode: normal;
    border-radius: 0.25rem;
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0;
    cursor: pointer;
    padding: 0.313rem 0.614rem;
  }
</style>

<button class="display" name={title} type="button">
  {#if icon}
    <svelte:component this={components.icon} {...icon} />
    &nbsp;
  {/if}
  {title}
</button>
