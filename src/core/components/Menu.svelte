<script lang="ts">
  import type { Image } from '../kappa/components/Image';
  import type { Option } from '../kappa/components/Option';

  /**
   * Components
   */
  import cicon from './Icon/index.svelte';
  const components = {
    icon: cicon,
  };

  export let title: string = '';
  export let subtitle: string = '';
  export let options: Array<Option> = [];
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';

  .menu {
    display: flex;
    flex-direction: column;
    background: #0659fd;
    height: 100%;
    padding: 3.625rem;

    & > .option {
      cursor: pointer;
      color: #8f92a1;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:not(:first-child) {
        margin-top: 2.5rem;
      }

      & > :global(svg > path) {
        fill: #fff;
      }

      &.active {
        color: #1e1f20;
      }
    }
  }
</style>

{#if title}
  <div class="h1">{title}</div>
{/if}
<div class={`menu`}>
  {#each options as option (option.identifier)}
    <div class={`option h4 ${option.classified}`}>
      {#if option.icon}
        <svelte:component this={components.icon} {...option.icon} />
        {#if title}&nbsp;{/if}
      {/if}
      {option.title}
    </div>
  {/each}
</div>
