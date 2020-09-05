<script lang="ts">
  import type { Option } from '@qtagon/typhon-ui';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * Components
   */
  import cicon from './Icon/index.svelte';
  const components = {
    icon: cicon,
  };

  export let title: string = '';
  export let options: Array<Option> = [];

  /**
   * Functions
   */
  const emit = (name: string = '', parameters: any) => {
    if (name) dispatch(name, parameters);
    return;
  };

  const onEvent = (option) => {
    if (option?.event) emit('event', option.event);
  };
</script>

<style type="text/scss">
  @import './scss/fonts.scss';
  @import './scss/alignment.scss';

  .menu {
    display: flex;
    flex-direction: column;
    background: #0659fd;
    padding: 3.625rem;
    flex: 1 1 100%;

    & > .option {
      cursor: pointer;
      color: #ffffff;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active,
      &:hover,
      &:focus,
      &:active {
        background: rgba(255, 255, 255, 1);
        color: #0659fd;

        & > :global(svg > path) {
          fill: #0659fd;
        }
      }

      &:not(:last-child) {
        margin-bottom: 2.5rem;
      }

      &:last-child {
        margin-top: auto;
      }

      & > :global(svg > path) {
        fill: #fff;
      }
    }
  }
</style>

{#if title}
  <div class="h1">{title}</div>
{/if}
<div class={`menu`}>
  {#each options as option (option.identifier)}
    <div
      class={`option h4 ${option.classified}`}
      on:click={() => onEvent(option)}>
      {#if option.icon}
        <svelte:component this={components.icon} {...option.icon} />
        {#if option.title}&nbsp;{/if}
      {/if}
      {option.title}
    </div>
  {/each}
</div>
